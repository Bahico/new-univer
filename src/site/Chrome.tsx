import React from "react";
import { Button, Badge } from "../components";
import { Icon } from "./icons";
import { SiteData } from "./data";
import { logoUrl } from "./assets";

export type PageKey =
  | "home" | "news" | "article" | "events" | "programs"
  | "studyplans" | "admission" | "structure" | "dormitory";

export type Go = (p: PageKey) => void;

const TONES = [
  "linear-gradient(135deg, var(--green-600), var(--green-800))",
  "linear-gradient(135deg, var(--green-500), var(--green-700))",
  "linear-gradient(135deg, var(--green-700), var(--green-900))",
  "linear-gradient(135deg, #2f6f4a, #14503a)",
];

export function ImageBlock({ icon = "leaf", h = 200, tone = 0, label, radius = "var(--radius-lg)", style }: any) {
  const Ico = Icon[icon] || Icon.leaf;
  return (
    <div style={{
      position: "relative", height: h, borderRadius: radius, overflow: "hidden",
      background: TONES[tone % TONES.length], display: "flex", alignItems: "center", justifyContent: "center",
      ...style,
    }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.5,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.18) 1px, transparent 0)",
        backgroundSize: "18px 18px" }} />
      <div style={{ color: "rgba(255,255,255,.85)" }}>{Ico({ size: Math.min(64, h * 0.34), sw: 1.4 })}</div>
      {label && <span style={{ position: "absolute", bottom: 12, left: 14, color: "rgba(255,255,255,.7)",
        fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: ".04em" }}>{label}</span>}
    </div>
  );
}

export function SectionHead({ eyebrow, title, action, onAction, align = "left" }: any) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
      gap: 24, marginBottom: "var(--space-6)", flexWrap: "wrap",
      textAlign: align, ...(align === "center" ? { flexDirection: "column", alignItems: "center" } : {}) }}>
      <div>
        {eyebrow && <div className="aiaa-eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div>}
        <h2 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>{title}</h2>
      </div>
      {action && (
        <Button variant="ghost" size="sm" onClick={onAction} iconRight={Icon.arrowRight({ size: 16 })}>{action}</Button>
      )}
    </div>
  );
}

export function TopBar() {
  const c = SiteData.contact;
  return (
    <div style={{ background: "var(--green-900)", color: "rgba(255,255,255,.78)", fontSize: "var(--text-sm)" }}>
      <div className="aiaa-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 40, gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>{Icon.pin({ size: 15 })} Kuyganyor, Andijon</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, opacity: .9 }}>{Icon.clock({ size: 15 })} {c.hours}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>{Icon.phone({ size: 15 })} {c.phone}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, opacity: .9 }}>{Icon.globe({ size: 15 })} O'zbek · Рус · EN</span>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({ current, go }: { current: string; go: Go }) {
  const [open, setOpen] = React.useState(false);
  const nav = SiteData.nav;
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.92)",
      backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border)" }}>
      <div className="aiaa-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "var(--header-h)", gap: 20 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src={logoUrl} alt="AndQXAI" style={{ height: 42 }} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="aiaa-desktop-nav">
          {nav.map((n) => (
            <a key={n.key} href="#" onClick={(e) => { e.preventDefault(); go(n.key as PageKey); }}
              style={{ padding: "9px 14px", borderRadius: "var(--radius-sm)", textDecoration: "none",
                fontSize: "var(--text-sm)", fontWeight: 600,
                color: current === n.key ? "var(--brand)" : "var(--text-body)",
                background: current === n.key ? "var(--brand-soft)" : "transparent" }}>
              {n.label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button aria-label="Qidiruv" style={{ background: "none", border: "none", color: "var(--text-body)", padding: 6, display: "flex" }}>{Icon.search({ size: 20 })}</button>
          <span className="aiaa-desktop-nav"><Button size="sm" onClick={() => go("admission")}>Hujjat topshirish</Button></span>
          <button className="aiaa-mobile-toggle" aria-label="Menyu" onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "var(--text-strong)", padding: 6, display: "none" }}>
            {open ? Icon.close({ size: 24 }) : Icon.menu({ size: 24 })}
          </button>
        </div>
      </div>
      {open && (
        <div style={{ borderTop: "1px solid var(--border)", padding: "10px 0", background: "#fff" }}>
          <div className="aiaa-container" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {nav.map((n) => (
              <a key={n.key} href="#" onClick={(e) => { e.preventDefault(); go(n.key as PageKey); setOpen(false); }}
                style={{ padding: "12px 10px", borderRadius: "var(--radius-sm)", textDecoration: "none", fontWeight: 600,
                  color: current === n.key ? "var(--brand)" : "var(--text-body)" }}>{n.label}</a>
            ))}
            <div style={{ padding: "10px 0" }}><Button fullWidth onClick={() => { go("admission"); setOpen(false); }}>Hujjat topshirish</Button></div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter({ go }: { go: Go }) {
  const c = SiteData.contact;
  const col = (title: string, items: { label: string; key?: string }[]) => (
    <div>
      <h4 style={{ color: "#fff", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)",
        letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>{title}</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {items.map((it, i) => (
          <a key={i} href="#" onClick={(e) => { e.preventDefault(); it.key && go(it.key as PageKey); }}
            style={{ color: "rgba(255,255,255,.72)", textDecoration: "none", fontSize: "var(--text-sm)" }}>{it.label}</a>
        ))}
      </div>
    </div>
  );
  return (
    <footer style={{ background: "var(--green-950)", color: "#fff", marginTop: "var(--space-12)" }}>
      <div className="aiaa-container" style={{ padding: "var(--space-9) var(--space-5) var(--space-6)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }} className="aiaa-footer-grid">
          <div>
            <img src={logoUrl} alt="AndQXAI" style={{ height: 46, filter: "brightness(0) invert(1)", marginBottom: 16 }} />
            <p style={{ color: "rgba(255,255,255,.7)", fontSize: "var(--text-sm)", maxWidth: 300, lineHeight: 1.6 }}>
              Andijon qishloq xo'jaligi va agrotexnologiyalar instituti — O'zbekiston qishloq va suv xo'jaligi uchun mutaxassislar tayyorlaydi.
            </p>
          </div>
          {col("Ta'lim", [{ label: "Bakalavriat", key: "programs" }, { label: "Magistratura", key: "programs" }, { label: "O'quv rejalar", key: "studyplans" }, { label: "Qabul", key: "admission" }])}
          {col("Institut", [{ label: "Tuzilma", key: "structure" }, { label: "Yangiliklar", key: "news" }, { label: "Tadbirlar", key: "events" }, { label: "Turar joy", key: "dormitory" }])}
          <div>
            <h4 style={{ color: "#fff", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>Aloqa</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "rgba(255,255,255,.72)", fontSize: "var(--text-sm)" }}>
              <span style={{ display: "flex", gap: 9 }}>{Icon.pin({ size: 17 })}<span>{c.address}</span></span>
              <span style={{ display: "flex", gap: 9, alignItems: "center" }}>{Icon.phone({ size: 16 })}{c.phone}</span>
              <span style={{ display: "flex", gap: 9, alignItems: "center" }}>{Icon.mail({ size: 16 })}{c.email}</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.12)", marginTop: "var(--space-7)", paddingTop: "var(--space-5)",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, color: "rgba(255,255,255,.5)", fontSize: "var(--text-xs)" }}>
          <span>© 2026 AndQXAI. Barcha huquqlar himoyalangan.</span>
          <span>Maxfiylik siyosati · Foydalanish shartlari</span>
        </div>
      </div>
    </footer>
  );
}
