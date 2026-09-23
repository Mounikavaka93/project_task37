import { Link } from 'react-router-dom'

export default function SectionHeading({ eyebrow, title, copy, to, linkLabel = 'View all' }) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-mint">{eyebrow}</p>
        )}
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {copy && <p className="mt-3 max-w-xl text-sm leading-relaxed text-soft sm:text-base">{copy}</p>}
      </div>
      {to && (
        <Link
          to={to}
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-mint transition hover:text-white"
        >
          {linkLabel}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  )
}
