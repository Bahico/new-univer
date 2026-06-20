import React from "react";
import { Button, Badge, Card, Input, Select, Stat } from "../components";
import { Icon } from "./icons";
import { SiteData } from "./data";
import { SectionHead, Go, ImageBlock } from "./Chrome";
import { PageHero } from "./Pages1";

export function ProgramsPage({ go }: { go: Go }) {
  const [level, setLevel] = React.useState("bachelor");
  const faculties = SiteData.faculties;
  return (
    <div>
      <PageHero go={go} title="Ta'lim dasturlari" subtitle="5 fakultet, 20 dan ortiq yo'nalish bo'yicha bakalavr va magistratura mutaxassisliklari."
        crumbs={[{ label: "Bosh sahifa", key: "home" }, { label: "Dasturlar" }]} />
      <div className="aiaa-container" style={{ marginTop: "var(--space-7)" }}>
        <div style={{ display: "inline-flex", padding: 4, background: "var(--bg-muted)", borderRadius: "var(--radius-pill)", marginBottom: "var(--space-6)" }}>
          {[["bachelor", "Bakalavriat"], ["master", "Magistratura"]].map(([k, l]) => (
            <button key={k} onClick={() => setLevel(k)}
              style={{ padding: "10px 26px", borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer",
                fontWeight: 600, fontSize: "var(--text-sm)", background: level === k ? "var(--surface-card)" : "transparent",
                color: level === k ? "var(--brand)" : "var(--text-muted)", boxShadow: level === k ? "var(--shadow-sm)" : "none" }}>{l}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(330px,1fr))", gap: 20 }}>
          {faculties.map((f, i) => (
            <Card key={i} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--brand-soft)", color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {Icon[f.icon]({ size: 24 })}
                </div>
                <h3 style={{ fontSize: "var(--text-lg)", margin: 0, lineHeight: 1.2 }}>{f.name}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                {f.majors.map((m, j) => (
                  <div key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: j < f.majors.length - 1 ? "1px solid var(--divider)" : "none" }}>
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--text-body)" }}>{m}</span>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>{level === "bachelor" ? "4 yil" : "2 yil"}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                <Button size="sm" onClick={() => go("admission")}>Hujjat topshirish</Button>
                <Button size="sm" variant="ghost" onClick={() => go("studyplans")}>O'quv reja</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StudyPlansPage({ go }: { go: Go }) {
  const rows = [
    ["1-semestr", "Oliy matematika, Botanika, Kimyo asoslari, Informatika", "30"],
    ["2-semestr", "Fiziologiya, Tuproqshunoslik, Ekologiya, Chet tili", "30"],
    ["3-semestr", "O'simlikshunoslik, Agrokimyo, Genetika asoslari", "30"],
    ["4-semestr", "Seleksiya, Dehqonchilik, Statistika", "30"],
    ["5-semestr", "Meliorativ tizimlar, O'simliklar himoyasi", "30"],
    ["6-semestr", "Ixtisoslik fanlari, Ishlab chiqarish amaliyoti", "30"],
  ];
  return (
    <div>
      <PageHero go={go} title="O'quv rejalar" subtitle="Agrobiologiya — O'simlikshunoslik yo'nalishi bo'yicha namunaviy o'quv reja (bakalavriat)."
        crumbs={[{ label: "Bosh sahifa", key: "home" }, { label: "Dasturlar", key: "programs" }, { label: "O'quv rejalar" }]} />
      <div className="aiaa-container" style={{ marginTop: "var(--space-7)", maxWidth: 920 }}>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
          <Select label="Yo'nalish" options={["O'simlikshunoslik", "Agrokimyo va tuproqshunoslik", "Seleksiya va urug'chilik"]} style={{ maxWidth: 300 }} />
          <Select label="Ta'lim shakli" options={["Kunduzgi", "Sirtqi", "Kechki"]} style={{ maxWidth: 200 }} />
        </div>
        <Card padding="0" style={{ overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 90px", padding: "14px 20px", background: "var(--green-900)", color: "#fff", fontSize: "var(--text-sm)", fontWeight: 600 }}>
            <span>Semestr</span><span>Asosiy fanlar</span><span style={{ textAlign: "right" }}>Kredit</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "160px 1fr 90px", padding: "16px 20px", alignItems: "center",
              borderBottom: i < rows.length - 1 ? "1px solid var(--divider)" : "none", background: i % 2 ? "var(--bg-subtle)" : "#fff" }}>
              <span style={{ fontWeight: 600, color: "var(--brand)" }}>{r[0]}</span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-body)" }}>{r[1]}</span>
              <span style={{ textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{r[2]}</span>
            </div>
          ))}
        </Card>
        <div style={{ marginTop: 20 }}>
          <Button variant="outline" iconLeft={Icon.download({ size: 17 })}>To'liq o'quv rejani yuklab olish (PDF)</Button>
        </div>
      </div>
    </div>
  );
}

export function AdmissionPage({ go }: { go: Go }) {
  const steps = SiteData.admissionSteps;
  return (
    <div>
      <PageHero go={go} title="Qabul – 2026" subtitle="Bakalavr va magistratura yo'nalishlariga hujjat topshirish bosqichlari va onlayn ariza."
        crumbs={[{ label: "Bosh sahifa", key: "home" }, { label: "Qabul" }]} />
      <div className="aiaa-container" style={{ marginTop: "var(--space-7)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40 }} className="aiaa-news-grid">
          <div>
            <SectionHead eyebrow="Jarayon" title="To'rt bosqichda qabul" />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {steps.map((s, i) => (
                <Card key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--green-200)", lineHeight: 1 }}>{s.n}</div>
                  <div>
                    <h3 style={{ fontSize: "var(--text-lg)", margin: "0 0 5px" }}>{s.title}</h3>
                    <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{s.text}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 24, padding: "var(--space-6)", background: "var(--brand-soft)", borderRadius: "var(--radius-lg)" }} className="aiaa-grid-3">
              <Stat value="15" suffix=" Iyun" label="Ariza boshlanishi" align="center" />
              <Stat value="30" suffix=" Iyul" label="Hujjat muddati" align="center" />
              <Stat value="66" suffix=",1" label="O'tish balli (2025)" align="center" />
            </div>
          </div>
          <div>
            <Card elevation="md" style={{ position: "sticky", top: 96 }}>
              <h3 style={{ fontSize: "var(--text-xl)", margin: "0 0 6px" }}>Onlayn ariza</h3>
              <p style={{ margin: "0 0 22px", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Ma'lumotlaringizni qoldiring — qabul komissiyasi siz bilan bog'lanadi.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Input label="Ism familiya" placeholder="To'liq ismingiz" required />
                <Input label="Telefon" placeholder="+998 __ ___ __ __" iconLeft={Icon.phone({ size: 17 })} required />
                <Input label="Elektron pochta" type="email" placeholder="siz@email.com" iconLeft={Icon.mail({ size: 17 })} />
                <Select label="Ta'lim darajasi" options={["Bakalavriat", "Magistratura"]} />
                <Select label="Yo'nalish" options={SiteData.faculties.map((f) => f.name)} />
                <Button fullWidth size="lg" iconRight={Icon.arrowRight({ size: 18 })}>Arizani yuborish</Button>
                <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--text-faint)", textAlign: "center" }}>Ariza yuborish orqali maxfiylik siyosatiga rozilik bildirasiz.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StructurePage({ go }: { go: Go }) {
  const org = [
    { icon: "users", t: "Rektorat", d: "Rektor va prorektorlar boshqaruvi, strategik rejalashtirish." },
    { icon: "book", t: "5 ta fakultet", d: "Agrobiologiya, agroinjeneriya, agrobiznes, veterinariya, o'rmon xo'jaligi." },
    { icon: "flask", t: "Ilmiy markazlar", d: "Agrotexnologiyalar va innovatsiyalar tadqiqot laboratoriyalari." },
    { icon: "globe", t: "Xalqaro hamkorlik", d: "60+ xorijiy universitet bilan almashinuv dasturlari." },
    { icon: "file", t: "O'quv-uslubiy bo'lim", d: "O'quv rejalar, sifat nazorati va monitoring." },
    { icon: "cap", t: "Akademik litsey", d: "Tabiiy va aniq fanlar yo'nalishidagi maktab bosqichi." },
  ];
  return (
    <div>
      <PageHero go={go} title="Institut tuzilmasi" subtitle="Boshqaruv, fakultetlar, ilmiy markazlar va qo'llab-quvvatlovchi bo'limlar."
        crumbs={[{ label: "Bosh sahifa", key: "home" }, { label: "Institut" }]} />
      <div className="aiaa-container" style={{ marginTop: "var(--space-7)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="aiaa-grid-3">
          {org.map((o, i) => (
            <Card key={i} interactive>
              <div style={{ width: 46, height: 46, borderRadius: "var(--radius-md)", background: "var(--brand-soft)", color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                {Icon[o.icon]({ size: 23 })}
              </div>
              <h3 style={{ fontSize: "var(--text-lg)", margin: "0 0 8px" }}>{o.t}</h3>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{o.d}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DormitoryPage({ go }: { go: Go }) {
  const feats = [
    { icon: "bed", t: "1,200 o'rinli yotoqxona", d: "2–4 kishilik zamonaviy xonalar, isitish va internet bilan." },
    { icon: "users", t: "Ijtimoiy hayot", d: "Sport zallari, kutubxona va talabalar klublari." },
    { icon: "leaf", t: "Yashil hudud", d: "Bog' va dam olish maydonlari bilan o'ralgan kampus." },
  ];
  return (
    <div>
      <PageHero go={go} title="Talabalar turar joyi" subtitle="Qulay, xavfsiz va zamonaviy yotoqxona — uydan uzoqdagi ikkinchi uyingiz."
        crumbs={[{ label: "Bosh sahifa", key: "home" }, { label: "Turar joy" }]} />
      <div className="aiaa-container" style={{ marginTop: "var(--space-7)" }}>
        <ImageBlock icon="home" h={320} tone={0} label="Yotoqxona binosi · namuna surat" style={{ marginBottom: 28 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="aiaa-grid-3">
          {feats.map((f, i) => (
            <Card key={i}>
              <div style={{ width: 46, height: 46, borderRadius: "var(--radius-md)", background: "var(--brand-soft)", color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                {Icon[f.icon]({ size: 23 })}
              </div>
              <h3 style={{ fontSize: "var(--text-lg)", margin: "0 0 8px" }}>{f.t}</h3>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{f.d}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <Button onClick={() => go("admission")} iconRight={Icon.arrowRight({ size: 17 })}>Joy uchun ariza qoldirish</Button>
        </div>
      </div>
    </div>
  );
}
