export default function Legal({ kind = 'privacy' }) {
  const privacy = kind === 'privacy'
  return (
    <article className="shell max-w-none py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Legal</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-white">
        {privacy ? 'Privacy Policy' : 'Terms & Conditions'}
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-soft">
        {privacy
          ? 'This demo site does not operate a production backend. Any name or email you enter stays in your browser session and is never sent to a server. We do not collect cookies for advertising. Market figures are fictional and provided for interface demonstration only.'
          : 'Meridian is a user-interface prototype. Nothing on this website is an offer to buy or sell securities, nor is it investment, tax, or legal advice. Simulated balances, orders, and news can be reset by refreshing your session. Use of this demo is at your own discretion.'}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-soft">
        If this product were offered commercially, we would describe data retention, order routing, and account
        protections in full. For questions about this sample experience, contact hello@meridian.trade.
      </p>
    </article>
  )
}
