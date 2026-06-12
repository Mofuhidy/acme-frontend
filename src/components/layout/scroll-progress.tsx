"use client";

import * as React from "react";

function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;

      setProgress(Math.max(nextProgress, 0));
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full bg-transparent"
    >
      <div
        className="h-full origin-left bg-brand-yellow shadow-[0_0_18px_rgba(255,228,146,0.55)] motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

export { ScrollProgress };
