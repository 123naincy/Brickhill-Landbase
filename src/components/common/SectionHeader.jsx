import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  return (
    <div className={`section-header text-${align}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}