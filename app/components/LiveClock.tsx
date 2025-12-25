'use client'

import { useState, useEffect } from 'react'

const timezones = [
  { value: 'Europe/London', label: 'London (GMT)' },
  { value: 'Europe/Dublin', label: 'Dublin (GMT)' },
  { value: 'Europe/Paris', label: 'Paris (CET)' },
  { value: 'Europe/Berlin', label: 'Berlin (CET)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Asia/Karachi', label: 'Karachi (PKT)' },
  { value: 'Asia/Dhaka', label: 'Dhaka (BST)' },
  { value: 'Asia/Kolkata', label: 'Mumbai/Delhi (IST)' },
  { value: 'America/New_York', label: 'New York (EST)' },
  { value: 'America/Los_Angeles', label: 'Los Angeles (PST)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Asia/Singapore', label: 'Singapore (SGT)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEDT)' },
]

export default function LiveClock() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [timezone, setTimezone] = useState('Europe/London')

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date()
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
        
        const dateFormatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: timezone,
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })

        setTime(formatter.format(now))
        setDate(dateFormatter.format(now))
      } catch (error) {
        console.error('Error formatting time:', error)
      }
    }

    // Update immediately
    updateTime()

    // Update every second
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  const getTimezoneLabel = () => {
    return timezones.find(tz => tz.value === timezone)?.label || 'London (GMT)'
  }

  return (
    <div className="glass-card-premium rounded-xl p-5 premium-shadow hover-glow w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Clock Display */}
        <div className="flex items-center space-x-4">
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono tracking-tight">
              {time}
            </div>
            <div className="text-sm text-text-secondary mt-1.5 font-medium">
              {date}
            </div>
          </div>
        </div>

        {/* Timezone Selector */}
        <div className="flex items-center space-x-2">
          <label htmlFor="timezone-select" className="text-xs text-text-secondary whitespace-nowrap font-medium uppercase tracking-wide">
            Timezone:
          </label>
          <select
            id="timezone-select"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="px-3 py-2 rounded-lg border border-border bg-bg-primary text-text-primary text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary"
          >
            {timezones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

