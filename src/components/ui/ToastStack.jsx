import { useApp } from '../../context/AppContext'

export default function ToastStack() {
  const { toasts } = useApp()

  return (
    <div className="pointer-events-none fixed top-20 right-4 z-[80] flex w-[min(92vw,360px)] flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto rounded-xl border px-4 py-3 text-sm shadow-xl animate-fade-up ${
            t.tone === 'loss'
              ? 'border-loss/30 bg-navy text-loss'
              : t.tone === 'gold'
                ? 'border-gold/30 bg-navy text-gold'
                : 'border-mint/30 bg-navy text-mint'
          }`}
        >
          {t.message}
        </div>
      ))}
    </div>
  )
}
