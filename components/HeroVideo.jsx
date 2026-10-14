"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Home hero explainer: muted looping video of every service (one file per language, public/hero/).
 * Autoplays only when the visitor accepts motion, pauses off-screen, and has a pause/play control.
 */
export default function HeroVideo({ locale, labels }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.25 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [userPaused]);

  function toggle() {
    const video = ref.current;
    if (video.paused) {
      setUserPaused(false);
      video.play().catch(() => {});
    } else {
      setUserPaused(true);
      video.pause();
    }
  }

  return (
    <div className="relative">
      <video
        ref={ref}
        className="block aspect-video w-full bg-canvas"
        src={`/hero/stratix-${locale}.mp4`}
        poster={`/hero/stratix-${locale}.jpg`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={labels.video}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        className="focus-ring absolute bottom-3 end-3 flex h-10 w-10 items-center justify-center rounded-full bg-night/70 text-white backdrop-blur transition hover:bg-night"
        aria-label={playing ? labels.pause : labels.play}
      >
        {playing ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="5" y="4" width="5" height="16" rx="1" />
            <rect x="14" y="4" width="5" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 4.5v15l12-7.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
