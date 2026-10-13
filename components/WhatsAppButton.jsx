export default function WhatsAppButton({ dict, locale }) {
  const phone = "971553910708";
  const message = encodeURIComponent(dict.whatsapp.message);
  const href = `https://wa.me/${phone}?text=${message}`;
  const isRtl = locale === "ar";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus-ring group fixed bottom-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] pl-3 pr-4 py-3 shadow-lg shadow-black/20 hover:scale-105 transition-transform ${
        isRtl ? "left-5" : "right-5"
      }`}
      aria-label={dict.whatsapp.label}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="white" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11a15 15 0 0 1-1.55-.57c-2.73-1.18-4.51-3.9-4.65-4.08-.14-.19-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.24-.27.53-.34.71-.34l.51.01c.16 0 .38-.06.59.45.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.13.55.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.14.43.11.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.27.13.44.19.51.3.07.11.07.63-.17 1.31z" />
      </svg>
      <span className="hidden sm:inline text-sm font-semibold text-white">{dict.whatsapp.label}</span>
    </a>
  );
}
