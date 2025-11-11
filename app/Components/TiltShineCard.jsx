import Image from "next/image";
import React, { useRef, useEffect } from "react";
import dashboard from "../../public/images/dashboard-hero.png";

// TiltShineCard.jsx
// Next.js + Tailwind CSS component
// Usage: import TiltShineCard from './TiltShineCard' and use <TiltShineCard>...</TiltShineCard>

export default function TiltShineCard({
  children,
  className = "",
  width = 800,
  height = 800,
  maxRotate = 12, // degrees
  scale = 1.04,
  transition = 300, // ms
}) {
  const elRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let bounds = null;
    let mouse = { x: 0, y: 0 };
    let state = { rx: 0, ry: 0, tx: 0, ty: 0 };

    function onMove(e) {
      bounds = el.getBoundingClientRect();
      const cx = bounds.left + bounds.width / 2;
      const cy = bounds.top + bounds.height / 2;
      const x = (e.clientX - cx) / (bounds.width / 2); // -1 .. 1
      const y = (e.clientY - cy) / (bounds.height / 2); // -1 .. 1

      mouse.x = Math.max(-1, Math.min(1, x));
      mouse.y = Math.max(-1, Math.min(1, y));

      // schedule RAF for smooth animation
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    }

    function onLeave() {
      // reset
      mouse.x = 0;
      mouse.y = 0;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    }

    function update() {
      // easing toward the target
      const ease = 0.12;
      const targetRx = -mouse.y * maxRotate;
      const targetRy = mouse.x * maxRotate;

      state.rx += (targetRx - state.rx) * ease;
      state.ry += (targetRy - state.ry) * ease;

      // shine position (0..1)
      const shineX = (mouse.x + 1) / 2;
      const shineY = (mouse.y + 1) / 2;

      const transform = `perspective(1000px) rotateX(${state.rx.toFixed(
        2
      )}deg) rotateY(${state.ry.toFixed(2)}deg) scale(${scale})`;
      el.style.transform = transform;

      // update shine background position using CSS variables
      el.style.setProperty("--shine-x", `${(shineX * 100).toFixed(1)}%`);
      el.style.setProperty("--shine-y", `${(shineY * 100).toFixed(1)}%`);

      // drop shadow subtle movement
      const dx = state.ry / maxRotate; // -1..1
      const dy = state.rx / maxRotate;
      el.style.setProperty("--shadow-x", `${(dx * 12).toFixed(1)}px`);
      el.style.setProperty("--shadow-y", `${(Math.abs(dy) * 10).toFixed(1)}px`);

      rafRef.current = null;
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onMove);
    el.addEventListener("mouseleave", onLeave);

    // cleanup
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [maxRotate, scale]);

  return (
    <div
      ref={elRef}
      className={`relative select-none ${className}`}
      style={{
        width: width + "px",
        height: height + "px",
        transition: `transform ${transition}ms cubic-bezier(.2,.9,.2,1)`,
        transformStyle: "preserve-3d",
        "--shine-x": "50%",
        "--shine-y": "40%",
        "--shadow-x": "0px",
        "--shadow-y": "8px",
      }}
    >
      {/* Card surface */}
      <div className="w-full max-w-[90vw] sm:max-w-[95vw] md:max-w-[800px] lg:max-w-[1000px] mx-auto">
  <div className="relative w-full h-0 pb-[65%] rounded-xl sm:rounded-2xl overflow-hidden">
    {/* Content slot */}
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={dashboard}
        width={1200}
        height={600}
        alt="dashboard image"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
    </div>
  );
}

