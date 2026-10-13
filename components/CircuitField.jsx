export default function CircuitField({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1200 700"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00D4E5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00D4E5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <g opacity="0.55" stroke="#5FE8F2" strokeWidth="1" fill="none">
        <path d="M-20 560 L180 560 L260 480 L460 480 L540 400 L760 400 L840 320 L1060 320 L1140 240"
          strokeDasharray="1000" className="animate-traceflow" suppressHydrationWarning />
        <path d="M-20 140 L160 140 L240 220 L420 220 L500 300 L700 300 L780 380 L980 380 L1060 460 L1240 460"
          strokeDasharray="1000" className="animate-traceflow" style={{ animationDelay: "0.6s" }} suppressHydrationWarning />
        <path d="M-20 340 L300 340 L380 340 L460 260 L640 260 L720 340 L900 340 L980 260 L1220 260"
          strokeDasharray="1000" className="animate-traceflow" style={{ animationDelay: "1.2s" }} suppressHydrationWarning />
      </g>

      <g opacity="0.35" stroke="#1A3A5C" strokeWidth="1" fill="none">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 200} y1="0" x2={i * 200} y2="700" suppressHydrationWarning />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 175} x2="1200" y2={i * 175} suppressHydrationWarning />
        ))}
      </g>

      {[
        [180, 560], [460, 480], [840, 320], [1140, 240],
        [420, 220], [700, 300], [980, 380],
        [380, 340], [720, 340], [980, 260]
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 4 : 2.5} fill="#00D4E5" opacity="0.85" suppressHydrationWarning />
      ))}

      <circle cx="600" cy="350" r="140" fill="url(#nodeGlow)" opacity="0.25" className="animate-floatslow" suppressHydrationWarning />
    </svg>
  );
}
