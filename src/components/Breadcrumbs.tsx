import React from "react";

/**
 * Breadcrumb trail for inner pages.
 */
export function Breadcrumbs({ items = [], style, ...rest }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last ? (
              <span style={{ color: "var(--text-strong)", fontWeight: "var(--fw-semibold)" }}>
                {it.label}
              </span>
            ) : (
              <a href={it.href || "#"} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                {it.label}
              </a>
            )}
            {!last && <span aria-hidden style={{ color: "var(--text-faint)" }}>/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
