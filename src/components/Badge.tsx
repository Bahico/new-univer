import React from "react";

const TONES = {
  brand:   { bg: "var(--brand-soft)",   fg: "var(--green-800)", bd: "var(--green-200)" },
  neutral: { bg: "var(--bg-muted)",     fg: "var(--text-body)", bd: "var(--border)" },
  accent:  { bg: "var(--accent-soft)",  fg: "var(--gold-600)",  bd: "var(--gold-200)" },
  success: { bg: "var(--success-soft)", fg: "var(--success)",   bd: "var(--green-200)" },
  warning: { bg: "var(--warning-soft)", fg: "var(--warning)",   bd: "var(--gold-200)" },
  danger:  { bg: "var(--danger-soft)",  fg: "var(--danger)",    bd: "#f3c4bf" },
  info:    { bg: "var(--info-soft)",    fg: "var(--info)",      bd: "#b9d6ec" },
};

/**
 * Small status / category label.
 */
export function Badge({ children, tone = "brand", solid = false, dot = false, style, ...rest }) {
  const t = TONES[tone] || TONES.brand;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 11px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--tracking-wide)",
        lineHeight: 1.4,
        color: solid ? "#fff" : t.fg,
        background: solid ? t.fg : t.bg,
        border: `1px solid ${solid ? "transparent" : t.bd}`,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: solid ? "#fff" : t.fg }} />
      )}
      {children}
    </span>
  );
}
