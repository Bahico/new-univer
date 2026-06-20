import React from "react";
import { Button, Card, Badge, Stat } from "../components";
import { Icon } from "./icons";
import { SiteData } from "./data";
import { videoUrl } from "./assets";
import { ImageBlock, SectionHead, Go } from "./Chrome";

function Hero({ go }: { go: Go }) {
  return (
    <section style={{ position: "relative", minHeight: 620, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <video autoPlay muted loop playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div style={{ position: "absolute", inset: 0,
        background: "linear-gradient(100deg, rgba(8,36,20,.92) 0%, rgba(14,59,34,.80) 42%, rgba(18,77,43,.42) 100%)" }} />
      <div className="aiaa-container" style={{ position: "relative", paddingBlock: "var(--space-10)" }}>
        <div style={{ maxWidth: 680, color: "#fff" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px",
            borderRadius: "var(--radius-pill)", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.22)",
            fontSize: "var(--text-sm)", fontWeight: 600, letterSpacing: ".04em", marginBottom: 24 }}>
            {Icon.cap({ size: 16 })} 1964-yildan buyon · 60+ yillik tajriba
          </span>
          <h1 style={{ color: "#fff", fontSize: "var(--text-4xl)", lineHeight: 1.04, margin: "0 0 20px" }}>
            Andijon qishloq xo'jaligi va agrotexnologiyalar instituti
          </h1>
          <p style={{ fontSize: "var(--text-md)", color: "rgba(255,255,255,.85)", maxWidth: 560, marginBottom: 32, lineHeight: 1.6 }}>
            O'zbekiston qishloq va suv xo'jaligi tarmoqlari uchun yuqori malakali mutaxassislar tayyorlaydigan yetakchi oliy ta'lim muassasasi.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button size="lg" onClick={() => go("admission")} iconRight={Icon.arrowRight({ size: 18 })}>Qabul – 2026</Button>
            <Button size="lg" variant="secondary" onClick={() => go("programs")}
              style={{ background: "rgba(255,255,255,.12)", color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
              Dasturlarni ko'rish
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickLinks({ go }: { go: Go }) {
  return (
    <section className="aiaa-container" style={{ marginTop: -56, position: "relative", zIndex: 5 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }} className="aiaa-grid-4">
        {SiteData.quickLinks.map((q, i) => (
          <Card key={i} interactive onClick={() => go(q.key as any)} padding="var(--space-5)" style={{ cursor: "pointer" }}>
            <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--brand-soft)",
              color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              {Icon[q.icon]({ size: 24 })}
            </div>
            <h3 style={{ fontSize: "var(--text-lg)", margin: "0 0 6px" }}>{q.title}</h3>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{q.text}</p>
            <div style={{ marginTop: 14, color: "var(--brand)", display: "flex", alignItems: "center", gap: 6, fontSize: "var(--text-sm)", fontWeight: 600 }}>
              Batafsil {Icon.arrowRight({ size: 15 })}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function StatStrip() {
  return (
    <section className="aiaa-container" style={{ marginTop: "var(--space-9)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, padding: "var(--space-7) var(--space-6)",
        background: "var(--brand-soft)", borderRadius: "var(--radius-xl)", border: "1px solid var(--green-100)" }} className="aiaa-grid-4">
        {SiteData.stats.map((s, i) => (
          <Stat key={i} value={s.value} suffix={s.suffix} label={s.label} align="center" />
        ))}
      </div>
    </section>
  );
}

function FeaturedNews({ go }: { go: Go }) {
  const news = SiteData.news;
  const lead = news[0];
  const rest = news.slice(1, 4);
  return (
    <section className="aiaa-container" style={{ marginTop: "var(--space-10)" }}>
      <SectionHead eyebrow="Yangiliklar" title="So'nggi yangiliklar va e'lonlar" action="Barchasi" onAction={() => go("news")} />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 24 }} className="aiaa-news-grid">
        <Card interactive padding="0" onClick={() => go("article")} style={{ overflow: "hidden", cursor: "pointer" }}>
          <ImageBlock icon={lead.icon} h={300} tone={0} radius="0" />
          <div style={{ padding: "var(--space-5) var(--space-6) var(--space-6)" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
              <Badge tone="brand">{lead.tag}</Badge>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{lead.date}</span>
            </div>
            <h3 style={{ fontSize: "var(--text-xl)", margin: "0 0 10px" }}>{lead.title}</h3>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>{lead.excerpt}</p>
          </div>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {rest.map((n, i) => (
            <Card key={i} interactive padding="var(--space-4)" onClick={() => go("article")}
              style={{ display: "flex", gap: 16, alignItems: "center", cursor: "pointer" }}>
              <ImageBlock icon={n.icon} h={92} tone={i + 1} radius="var(--radius-md)" style={{ width: 110, flexShrink: 0 }} />
              <div>
                <div style={{ display: "flex", gap: 9, alignItems: "center", marginBottom: 7 }}>
                  <Badge tone="neutral">{n.tag}</Badge>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>{n.date}</span>
                </div>
                <h4 style={{ fontSize: "var(--text-base)", fontFamily: "var(--font-sans)", fontWeight: 600, margin: 0, lineHeight: 1.35, color: "var(--text-strong)" }}>{n.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsTeaser({ go }: { go: Go }) {
  return (
    <section className="aiaa-container" style={{ marginTop: "var(--space-10)" }}>
      <SectionHead eyebrow="Fakultetlar" title="Ta'lim yo'nalishlari" action="Barcha dasturlar" onAction={() => go("programs")} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="aiaa-grid-3">
        {SiteData.faculties.slice(0, 3).map((f, i) => (
          <Card key={i} interactive onClick={() => go("programs")} style={{ cursor: "pointer" }}>
            <div style={{ width: 46, height: 46, borderRadius: "var(--radius-md)", background: "var(--brand-soft)",
              color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
              {Icon[f.icon]({ size: 24 })}
            </div>
            <h3 style={{ fontSize: "var(--text-lg)", margin: "0 0 10px" }}>{f.name}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {f.majors.slice(0, 3).map((m, j) => (
                <span key={j} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--brand)", display: "flex" }}>{Icon.check({ size: 15 })}</span> {m}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CTASection({ go }: { go: Go }) {
  return (
    <section className="aiaa-container" style={{ marginTop: "var(--space-10)" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-2xl)",
        background: "linear-gradient(120deg, var(--green-800), var(--green-600))", padding: "var(--space-9) var(--space-8)", color: "#fff" }}>
        <div style={{ position: "absolute", inset: 0, opacity: .25,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.25) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div style={{ position: "relative", maxWidth: 620 }}>
          <h2 style={{ color: "#fff", fontSize: "var(--text-2xl)", margin: "0 0 12px" }}>Kelajak kasbingizni biz bilan boshlang</h2>
          <p style={{ color: "rgba(255,255,255,.85)", fontSize: "var(--text-md)", margin: "0 0 26px" }}>
            2026-yil qabul jarayoni ochiq. Bakalavr va magistratura yo'nalishlariga hujjat topshiring.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button size="lg" variant="accent" onClick={() => go("admission")}>Hujjat topshirish</Button>
            <Button size="lg" variant="secondary" onClick={() => go("structure")}
              style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,.4)" }}>Institut haqida</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage({ go }: { go: Go }) {
  return (
    <div>
      <Hero go={go} />
      <QuickLinks go={go} />
      <StatStrip />
      <FeaturedNews go={go} />
      <ProgramsTeaser go={go} />
      <CTASection go={go} />
    </div>
  );
}
