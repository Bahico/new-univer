import React from "react";

/**
 * Page navigation for listings (news, events).
 */
export function Pagination({ page = 1, total = 1, onChange, style, ...rest }) {
  const go = (p) => onChange && p >= 1 && p <= total && p !== page && onChange(p);
  const pages = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - page) <= 1) pages.push(i);
    else if (pages[pages.length - 1] !== "…") pages.push("…");
  }
  const cell = (active) => ({
    minWidth: 42,
    height: 42,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 12px",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--fw-semibold)",
    borderRadius: "var(--radius-md)",
    border: `1px solid ${active ? "var(--brand)" : "var(--border)"}`,
    background: active ? "var(--brand)" : "var(--surface-card)",
    color: active ? "#fff" : "var(--text-body)",
    cursor: active ? "default" : "pointer",
  });
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: 8, ...style }} {...rest}>
      <button style={{ ...cell(false), opacity: page === 1 ? 0.4 : 1 }} onClick={() => go(page - 1)} disabled={page === 1}>‹</button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`e${i}`} style={{ color: "var(--text-faint)", padding: "0 4px" }}>…</span>
        ) : (
          <button key={p} style={cell(p === page)} onClick={() => go(p)}>{p}</button>
        )
      )}
      <button style={{ ...cell(false), opacity: page === total ? 0.4 : 1 }} onClick={() => go(page + 1)} disabled={page === total}>›</button>
    </nav>
  );
}
