export default function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#111a2e" />
      <rect x="0.6" y="0.6" width="38.8" height="38.8" rx="9.4" stroke="#3ef0c5" strokeOpacity="0.35" />
      <path
        d="M8 27L16 16L22 22L32 10"
        stroke="#3ef0c5"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="10" r="2.2" fill="#e4c36a" />
    </svg>
  )
}
