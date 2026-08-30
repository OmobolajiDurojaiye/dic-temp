"use client";

import React, { useEffect, useRef, useState } from "react";

interface TickMarkProps {
  variant?: "rust" | "brass" | "navy" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
  title?: string;
}

export default function TickMark({
  variant = "rust",
  size = "md",
  animated = false,
  className = "",
  title = "Auditor Verified"
}: TickMarkProps) {
  const [hasDrawn, setHasDrawn] = useState(!animated);
  const elementRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!animated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasDrawn(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const getColor = () => {
    switch (variant) {
      case "rust":
        return "#A3462B"; // Verified Rust (auditor red pencil)
      case "brass":
        return "#B08D3E"; // Brass signature accent
      case "navy":
        return "#101F38"; // Ink Navy
      case "white":
        return "#FFFFFF";
      default:
        return "#A3462B";
    }
  };

  const getSizePx = () => {
    switch (size) {
      case "sm":
        return "w-3.5 h-3.5";
      case "md":
        return "w-4.5 h-4.5";
      case "lg":
        return "w-6 h-6";
      case "xl":
        return "w-8 h-8";
      default:
        return "w-4.5 h-4.5";
    }
  };

  const strokeColor = getColor();

  return (
    <svg
      ref={elementRef}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 align-middle ${getSizePx()} ${className}`}
      aria-label={title}
      role="img"
    >
      <title>{title}</title>
      {/* Hand-inked auditor verification tick: subtle downstroke + confident rising upstroke */}
      <path
        d="M3.5 13.2C5.2 14.8 7.8 17.6 9.4 19.5C13.8 13.6 18.5 7.4 21.8 3.8"
        stroke={strokeColor}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={hasDrawn && animated ? "animate-tick-draw" : ""}
        style={{
          strokeDasharray: animated ? 60 : undefined,
          strokeDashoffset: animated && !hasDrawn ? 60 : 0
        }}
      />
    </svg>
  );
}
