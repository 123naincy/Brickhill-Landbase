import React from "react";
import useReveal from "../hooks/useReveal";

export default function Reveal({
  children,
  delay = 0,
  duration = 800,
  direction = "up",
  distance = 40,
  className = "",
  once = true,
  as: Tag = "div",
}) {
  const [ref, visible] = useReveal(once);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        "--reveal-distance": `${distance}px`,
      }}
    >
      {children}
    </Tag>
  );
}