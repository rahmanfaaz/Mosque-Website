'use client'

import { useEffect, useRef } from 'react'

/**
 * WebGL full-viewport background (shadcn-style path: components/ui).
 * Light: deep blue canvas (#0969da → #0550ae) like Export PDF; UI pages stay solid white on top.
 * Dark: existing navy base + --color-primary lines.
 */

type Palette = {
  bg1: Float32Array
  bg2: Float32Array
  line: Float32Array
  lineIntensity: number
}

/** #0969da — light --color-primary (Export PDF / gradient start) */
const PRIMARY_LIGHT = new Float32Array([9 / 255, 105 / 255, 218 / 255, 1])

/** #0550ae — light --color-primary-hover (darker blue, gradient end) */
const PRIMARY_HOVER_LIGHT = new Float32Array([5 / 255, 80 / 255, 174 / 255, 1])

/** Lighter blue plasma on dark-blue base */
const ACCENT_LINE_LIGHT = new Float32Array([130 / 255, 190 / 255, 255 / 255, 1])

/** #58a6ff — dark theme --color-primary */
const PRIMARY_DARK = new Float32Array([88 / 255, 166 / 255, 255 / 255, 1])

const PALETTE_LIGHT: Palette = {
  bg1: PRIMARY_LIGHT,
  bg2: PRIMARY_HOVER_LIGHT,
  line: ACCENT_LINE_LIGHT,
  lineIntensity: 0.5,
}

const PALETTE_DARK: Palette = {
  bg1: new Float32Array([0.05, 0.08, 0.13, 1]),
  bg2: new Float32Array([0.03, 0.12, 0.18, 1]),
  line: PRIMARY_DARK,
  lineIntensity: 0.52,
}

const vsSource = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`

const fsSource = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec4 uBgColor1;
  uniform vec4 uBgColor2;
  uniform vec4 uLineColor;
  uniform float uLineIntensity;

  const float overallSpeed = 0.2;
  const float gridSmoothWidth = 0.015;
  const float axisWidth = 0.05;
  const float majorLineWidth = 0.025;
  const float minorLineWidth = 0.0125;
  const float majorLineFrequency = 5.0;
  const float minorLineFrequency = 1.0;
  const float scale = 5.0;
  const float minLineWidth = 0.01;
  const float maxLineWidth = 0.2;
  const float lineSpeed = 1.0 * overallSpeed;
  const float lineAmplitude = 1.0;
  const float lineFrequency = 0.2;
  const float warpSpeed = 0.2 * overallSpeed;
  const float warpFrequency = 0.5;
  const float warpAmplitude = 1.0;
  const float offsetFrequency = 0.5;
  const float offsetSpeed = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.6;
  const float maxOffsetSpread = 2.0;
  const int linesPerGroup = 16;

  #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
  #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))

  float drawGridLines(float axis) {
    return drawCrispLine(0.0, axisWidth, axis)
          + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)
          + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);
  }

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float horizontalFade, float offset) {
    return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
  }

  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec4 fragColor;
    vec2 uv = fragCoord.xy / iResolution.xy;
    vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;

    float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
    float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);

    space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;

    vec4 lines = vec4(0.0);

    for(int l = 0; l < linesPerGroup; l++) {
      float normalizedLineIndex = float(l) / float(linesPerGroup);
      float offsetTime = iTime * offsetSpeed;
      float offsetPosition = float(l) + space.x * offsetFrequency;
      float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
      float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
      float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
      float linePosition = getPlasmaY(space.x, horizontalFade, offset);
      float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);

      float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
      vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
      float circle = drawCircle(circlePosition, 0.01, space) * 4.0;

      line = line + circle;
      lines += line * uLineColor * rand * uLineIntensity;
    }

    fragColor = mix(uBgColor1, uBgColor2, uv.x);
    fragColor *= verticalFade;
    fragColor.a = 1.0;
    fragColor += lines;

    gl_FragColor = fragColor;
  }
`

function loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function initShaderProgram(
  gl: WebGLRenderingContext,
  vs: string,
  fs: string
): WebGLProgram | null {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vs)
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fs)
  if (!vertexShader || !fragmentShader) return null

  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Shader program link error:', gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
  }
  return program
}

function readThemePalette(): Palette {
  if (typeof document === 'undefined') return PALETTE_LIGHT
  return document.documentElement.getAttribute('data-theme') === 'dark' ? PALETTE_DARK : PALETTE_LIGHT
}

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const paletteRef = useRef<Palette>(readThemePalette())
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const syncPalette = () => {
      paletteRef.current = readThemePalette()
    }
    syncPalette()
    const observer = new MutationObserver(syncPalette)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const gl = canvas.getContext('webgl', { alpha: false, antialias: true })
    if (!gl) {
      console.warn('WebGL not supported; shader background disabled.')
      observer.disconnect()
      return
    }

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource)
    if (!shaderProgram) {
      observer.disconnect()
      return
    }

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const attribVertex = gl.getAttribLocation(shaderProgram, 'aVertexPosition')
    const uniResolution = gl.getUniformLocation(shaderProgram, 'iResolution')
    const uniTime = gl.getUniformLocation(shaderProgram, 'iTime')
    const uniBg1 = gl.getUniformLocation(shaderProgram, 'uBgColor1')
    const uniBg2 = gl.getUniformLocation(shaderProgram, 'uBgColor2')
    const uniLine = gl.getUniformLocation(shaderProgram, 'uLineColor')
    const uniLineInt = gl.getUniformLocation(shaderProgram, 'uLineIntensity')

    const resizeCanvas = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const startTime = Date.now()
    const render = () => {
      const t = (Date.now() - startTime) / 1000
      const p = paletteRef.current

      gl.clearColor(0, 0, 0, 1)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(shaderProgram)

      gl.uniform2f(uniResolution, canvas.width, canvas.height)
      gl.uniform1f(uniTime, t)
      gl.uniform4fv(uniBg1, p.bg1)
      gl.uniform4fv(uniBg2, p.bg2)
      gl.uniform4fv(uniLine, p.line)
      gl.uniform1f(uniLineInt, p.lineIntensity)

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(attribVertex, 2, gl.FLOAT, false, 0, 0)
      gl.enableVertexAttribArray(attribVertex)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(rafRef.current)
      gl.deleteProgram(shaderProgram)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] h-full min-h-[100dvh] w-full bg-[var(--shader-canvas-fallback)]"
    />
  )
}
