import React from "react";
import { Button, Badge, Card, Pagination, Avatar } from "../components";
import { Icon } from "./icons";
import { SiteData } from "./data";
import { ImageBlock, Go } from "./Chrome";

export function PageHero({ title, subtitle, crumbs, go }: any) {
  return (
    <section style={{ background: "var(--green-900)", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: .18,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.4) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
      <div className="aiaa-container" style={{ position: "relative", paddingBlock: "var(--space-8)" }}>
        {crumbs && (
          <nav style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 18, fontSize: "var(--text-sm)", flexWrap: "wrap" }}>
            {crumbs.map((c: any, i: number) => (
              <React.Fragment key={i}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,.4)" }}>/</span>}
                {i === crumbs.length - 1
                  ? <span style={{ color: "#fff", fontWeight: 600 }}>{c.label}</span>
                  : <a href="#" onClick={(e) => { e.preventDefault(); c.key && go(c.key); }} style={{ color: "rgba(255,255,255,.7)", textDecoration: "none" }}>{c.label}</a>}
              </React.Fragment>
            ))}
          </nav>
        )}
        <h1 style={{ color: "#fff", fontSize: "var(--text-3xl)", margin: 0, maxWidth: 760 }}>{title}</h1>
        {subtitle && <p style={{ color: "rgba(255,255,255,.8)", fontSize: "var(--text-md)", margin: "14px 0 0", maxWidth: 640 }}>{subtitle}</p>}
      </div>
    </section>
  );
}

function NewsCard({ n, i, go }: any) {
  return (
    <Card interactive padding="0" onClick={() => go("article")} style={{ overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column" }}>
      <ImageBlock icon={n.icon} h={184} tone={i} radius="0" />
      <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
          <Badge tone="brand">{n.tag}</Badge>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>{n.date}</span>
        </div>
        <h3 style={{ fontSize: "var(--text-lg)", margin: "0 0 8px", lineHeight: 1.25 }}>{n.title}</h3>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)", flex: 1 }}>{n.excerpt}</p>
        <div style={{ marginTop: 16, color: "var(--brand)", display: "flex", alignItems: "center", gap: 6, fontSize: "var(--text-sm)", fontWeight: 600 }}>
          O'qish {Icon.arrowRight({ size: 15 })}
        </div>
      </div>
    </Card>
  );
}

export function NewsListPage({ go }: { go: Go }) {
  const [page, setPage] = React.useState(1);
  const cats = ["Barchasi", "Rasmiy", "Tadbir", "Ilmiy", "Hamkorlik", "Yoshlar"];
  const [cat, setCat] = React.useState("Barchasi");
  const news = SiteData.news;
  const shown = cat === "Barchasi" ? news : news.filter((n) => n.tag === cat);
  return (
    <div>
      <PageHero go={go} title="Yangiliklar va e'lonlar" subtitle="Institut hayoti, ilmiy yutuqlar va muhim e'lonlardan xabardor bo'ling."
        crumbs={[{ label: "Bosh sahifa", key: "home" }, { label: "Yangiliklar" }]} />
      <div className="aiaa-container" style={{ marginTop: "var(--space-7)" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              style={{ padding: "9px 18px", borderRadius: "var(--radius-pill)", border: "1px solid",
                borderColor: cat === c ? "var(--brand)" : "var(--border)", background: cat === c ? "var(--brand)" : "var(--surface-card)",
                color: cat === c ? "#fff" : "var(--text-body)", fontSize: "var(--text-sm)", fontWeight: 600, cursor: "pointer" }}>{c}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="aiaa-grid-3">
          {(shown.length ? shown : news).map((n, i) => <NewsCard key={i} n={n} i={i} go={go} />)}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-8)" }}>
          <Pagination page={page} total={6} onChange={setPage} />
        </div>
      </div>
    </div>
  );
}

export function NewsArticlePage({ go }: { go: Go }) {
  const a = SiteData.news[0];
  return (
    <div>
      <PageHero go={go} title={a.title}
        crumbs={[{ label: "Bosh sahifa", key: "home" }, { label: "Yangiliklar", key: "news" }, { label: "Maqola" }]} />
      <article className="aiaa-container" style={{ maxWidth: 820, marginTop: "var(--space-7)" }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 22, paddingBottom: 22, borderBottom: "1px solid var(--border)" }}>
          <Avatar name="Matbuot xizmati" size="md" />
          <div>
            <div style={{ fontWeight: 600, color: "var(--text-strong)", fontSize: "var(--text-sm)" }}>Institut matbuot xizmati</div>
            <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{a.date} · 3 daqiqa o'qish</div>
          </div>
          <div style={{ marginLeft: "auto" }}><Badge tone="brand">{a.tag}</Badge></div>
        </div>
        <ImageBlock icon={a.icon} h={360} tone={0} label="Tahririyat surati · namuna" style={{ marginBottom: 28 }} />
        <div style={{ fontSize: "var(--text-md)", lineHeight: 1.75, color: "var(--text-body)", display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-strong)", fontWeight: 500 }}>{a.excerpt}</p>
          <p>Andijon qishloq xo'jaligi va agrotexnologiyalar institutida talabalar, ularning ota-onalari va professor-o'qituvchilar ishtirokida ochiq muloqot forumi bo'lib o'tdi. Tadbir davomida ta'lim sifati, yotoqxona sharoitlari va talabalar farovonligi masalalari muhokama qilindi.</p>
          <blockquote style={{ margin: 0, padding: "18px 24px", borderLeft: "4px solid var(--brand)", background: "var(--brand-soft)",
            borderRadius: "0 var(--radius-md) var(--radius-md) 0", fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", color: "var(--green-900)" }}>
            "Talabalarimizning bilim olishi uchun zamonaviy sharoit yaratish — institutimizning bosh vazifasi."
          </blockquote>
          <p>Forum yakunida institut rahbariyati bildirilgan takliflar asosida ishchi guruh tuzilishini va yaqin oylarda amaliy chora-tadbirlar ko'rilishini ma'lum qildi. 60 dan ortiq xorijiy universitet bilan hamkorlik talabalarga xalqaro amaliyot imkoniyatlarini ham kengaytirmoqda.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 36, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
          <Button variant="ghost" onClick={() => go("news")} iconLeft={<span style={{ transform: "rotate(180deg)", display: "flex" }}>{Icon.arrowRight({ size: 16 })}</span>}>Yangiliklarga qaytish</Button>
          <div style={{ display: "flex", gap: 8 }}>
            <Badge tone="neutral">#qabul2026</Badge>
            <Badge tone="neutral">#talabalar</Badge>
          </div>
        </div>
      </article>
    </div>
  );
}

export function EventsPage({ go }: { go: Go }) {
  const ev = SiteData.events;
  const tone: Record<string, any> = { Qabul: "brand", Imtihon: "warning", Forum: "info", "Ta'lim": "accent" };
  return (
    <div>
      <PageHero go={go} title="Tadbirlar taqvimi" subtitle="Ochiq eshiklar kuni, imtihonlar, forum va konferensiyalar jadvali."
        crumbs={[{ label: "Bosh sahifa", key: "home" }, { label: "Tadbirlar" }]} />
      <div className="aiaa-container" style={{ marginTop: "var(--space-7)", display: "flex", flexDirection: "column", gap: 16 }}>
        {ev.map((e, i) => (
          <Card key={i} interactive style={{ display: "flex", gap: 26, alignItems: "center", cursor: "pointer" }}>
            <div style={{ flexShrink: 0, width: 92, textAlign: "center", padding: "12px 0", borderRadius: "var(--radius-md)", background: "var(--brand-soft)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--brand)", lineHeight: 1 }}>{e.day}</div>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: 4, fontWeight: 600 }}>{e.mon}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 8 }}><Badge tone={tone[e.type] || "neutral"}>{e.type}</Badge></div>
              <h3 style={{ fontSize: "var(--text-lg)", margin: "0 0 8px" }}>{e.title}</h3>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                <span style={{ display: "flex", gap: 7, alignItems: "center" }}>{Icon.clock({ size: 16 })}{e.time}</span>
                <span style={{ display: "flex", gap: 7, alignItems: "center" }}>{Icon.pin({ size: 16 })}{e.place}</span>
              </div>
            </div>
            <span className="aiaa-desktop-nav"><Button variant="outline" size="sm">Ro'yxatdan o'tish</Button></span>
          </Card>
        ))}
      </div>
    </div>
  );
}
