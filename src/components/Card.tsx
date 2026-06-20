import React from "react";

/**
 * Surface container with soft shadow and rounded corners.
 */
export function Card({
  children,
  as = "div",
  interactive = false,
  padding = "var(--space-5)",
  elevation = "sm",
  style,
  ...rest
}) {
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
  };
  return (
    <Tag
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        display: "block",
        background: "var(--surface-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding,
        boxShadow: interactive && hover ? "var(--shadow-lg)" : shadows[elevation],
        transform: interactive && hover ? "translateY(-3px)" : "none",
        transition: "box-shadow var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
