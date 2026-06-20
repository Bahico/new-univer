import React from "react";

/**
 * Labeled native select with brand styling.
 */
export function Select({ label, hint, options = [], id, required = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", ...style }}>
      {label && (
        <label
          htmlFor={uid}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--fw-semibold)",
            color: "var(--text-strong)",
          }}
        >
          {label}
          {required && <span style={{ color: "var(--danger)", marginLeft: 3 }}>*</span>}
        </label>
      )}
      <div style={{ position: "relative", display: "flex" }}>
        <select
          id={uid}
          required={required}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: "none",
            width: "100%",
            padding: "12px 40px 12px 14px",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            color: "var(--text-strong)",
            background: "var(--surface-card)",
            border: `1.5px solid ${focus ? "var(--brand)" : "var(--border-strong)"}`,
            borderRadius: "var(--radius-md)",
            boxShadow: focus ? "var(--shadow-focus)" : "none",
            outline: "none",
            cursor: "pointer",
            transition: "border-color var(--dur-fast) var(--ease-out)",
          }}
          {...rest}
        >
          {options.map((o) => {
            const value = typeof o === "string" ? o : o.value;
            const text = typeof o === "string" ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <span
          aria-hidden
          style={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "var(--text-muted)",
            fontSize: 12,
          }}
        >
          ▼
        </span>
      </div>
      {hint && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{hint}</span>}
    </div>
  );
}
