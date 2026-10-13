export default function AppointmentSection({ dict }) {
  const a = dict.contact.appointment;
  return (
    <div className="rounded-3xl bg-navy text-mist-100 p-8 sm:p-10 relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/10 blur-2xl" aria-hidden="true" />
      <div className="relative">
        <h3 className="font-display text-2xl">{a.title}</h3>
        <p className="mt-3 text-sm text-mist-100/70 max-w-md leading-relaxed">{a.description}</p>

        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <button
            type="button"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy-deep hover:bg-cyan-soft transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            {a.cta}
          </button>
        </div>

        <p className="mt-4 text-xs text-mist-100/40 border-t border-white/10 pt-4">{a.note}</p>
      </div>
    </div>
  );
}
