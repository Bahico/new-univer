import React from "react";

/**
 * Large statistic / KPI display, mono value + label.
 */
export function Stat({ value, label, suffix, prefix, align = "start", style, ...rest }) {
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-semibold)",
          fontSize: "var(--text-3xl)",
          lineHeight: 1,
          letterSpacing: "var(--tracking-tight)",
          color: "var(--brand)",
          display: "flex",
          alignItems: "baseline",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: 2,
        }}
      >
        {prefix && <span style={{ fontSize: "0.6em" }}>{prefix}</span>}
        {value}
        {suffix && <span style={{ fontSize: "0.6em" }}>{suffix}</span>}
      </div>
      <div
        style={{
          marginTop: "var(--space-2)",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--fw-medium)",
          color: "var(--text-muted)",
          letterSpacing: "var(--tracking-snug)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
