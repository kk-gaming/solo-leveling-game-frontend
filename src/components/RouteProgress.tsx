"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger a short progress animation on route changes
    setVisible(true);
    const bar = barRef.current;
    if (bar) {
      bar.style.width = "0%";
      // Start animation next tick
      requestAnimationFrame(() => {
        bar.style.width = "70%";
        setTimeout(() => {
          bar.style.width = "100%";
          setTimeout(() => setVisible(false), 200);
        }, 200);
      });
    } else {
      setVisible(false);
    }
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="sl-progress">
      <div ref={barRef} className="sl-progress-bar" />
    </div>
  );
}

