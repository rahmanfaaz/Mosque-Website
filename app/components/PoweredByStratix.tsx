/**
 * Site credit. Set NEXT_PUBLIC_STRATIX_URL at build time to link the company name.
 */
export default function PoweredByStratix({ className = '' }: { className?: string }) {
  const url = process.env.NEXT_PUBLIC_STRATIX_URL
  const label = 'Stratix AI'
  const bold = 'font-semibold text-text-secondary hover:text-primary'

  return (
    <p className={`text-center text-xs text-text-muted ${className}`}>
      Powered by{' '}
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${bold} underline-offset-2 hover:underline`}
        >
          {label}
        </a>
      ) : (
        <span className={bold}>{label}</span>
      )}
    </p>
  )
}
