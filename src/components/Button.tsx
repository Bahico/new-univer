import React from "react";

const SIZES = {
  sm: { padding: "8px 16px", fontSize: "var(--text-sm)", height: 38, gap: 8 },
  md: { padding: "11px 22px", fontSize: "var(--text-base)", height: 46, gap: 9 },
  lg: { padding: "15px 30px", fontSize: "var(--text-md)", height: 56, gap: 11 },
};

const VARIANTS = {
  primary: {
    background: "var(--brand)",
    color: "var(--brand-contrast)",
    border: "1px solid transparent",
    "--hover-bg": "var(--brand-hover)",
    "--active-bg": "var(--brand-active)",
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--text-strong)",
    border: "1px solid var(--border-strong)",
    "--hover-bg": "var(--bg-subtle)",
    "--active-bg": "var(--bg-muted)",
  },
  accent: {
    background: "var(--accent)",
    color: "#3a2a05",
    border: "1px solid transparent",
    "--hover-bg": "var(--accent-hover)",
    "--active-bg": "var(--accent-hover)",
  },
  ghost: {
    background: "transparent",
    color: "var(--brand)",
    border: "1px solid transparent",
    "--hover-bg": "var(--brand-soft)",
    "--active-bg": "var(--brand-soft-2)",
  },
  outline: {
    background: "transparent",
    color: "var(--brand)",
    border: "1px solid var(--brand)",
    "--hover-bg": "var(--brand-soft)",
    "--active-bg": "var(--brand-soft-2)",
  },
};

/**
 * AIAA primary action button. Five variants, three sizes.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const bg = disabled
    ? "var(--bg-muted)"
    : active
    ? v["--active-bg"]
    : hover
    ? v["--hover-bg"]
    : v.background;

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        padding: s.padding,
        minHeight: s.height,
        fontFamily: "var(--font-sans)",
        fontSize: s.fontSize,
        fontWeight: "var(--fw-semibold)",
        lineHeight: 1,
        letterSpacing: "var(--tracking-snug)",
        color: disabled ? "var(--text-faint)" : v.color,
        background: bg,
        border: disabled ? "1px solid var(--border)" : v.border,
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        transform: active && !disabled ? "translateY(1px)" : "none",
        transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
        boxShadow: variant === "primary" && !disabled ? "var(--shadow-xs)" : "none",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
