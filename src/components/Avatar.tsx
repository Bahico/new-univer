import React from "react";

const SIZES = { sm: 32, md: 44, lg: 64, xl: 88 };

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
}

/**
 * Circular avatar — image or initials fallback.
 */
export function Avatar({ src, name = "", size = "md", ring = false, style, ...rest }) {
  const px = SIZES[size] || SIZES.md;
  return (
    <div
      title={name}
      style={{
        width: px,
        height: px,
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--brand-soft-2)",
        color: "var(--green-800)",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)",
        fontSize: px * 0.4,
        border: ring ? "2px solid var(--surface-card)" : "none",
        boxShadow: ring ? "0 0 0 2px var(--brand)" : "none",
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials(name)
      )}
    </div>
  );
}
