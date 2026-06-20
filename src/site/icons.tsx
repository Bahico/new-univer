import React from "react";

type IconProps = { size?: number; sw?: number; style?: React.CSSProperties } & React.SVGProps<SVGSVGElement>;

const Svg = ({ size = 22, sw = 2, children, style, ...rest }: any) =>
  React.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: sw,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { display: "block", flexShrink: 0, ...style },
      ...rest,
    },
    children
  );

const P = (d: string) => <path d={d} key={d} />;

export const Icon: Record<string, (p?: IconProps) => JSX.Element> = {
  menu: (p) => <Svg {...p}>{P("M4 6h16")}{P("M4 12h16")}{P("M4 18h16")}</Svg>,
  close: (p) => <Svg {...p}>{P("M18 6 6 18")}{P("m6 6 12 12")}</Svg>,
  search: (p) => <Svg {...p}><circle cx="11" cy="11" r="7" />{P("m21 21-4.3-4.3")}</Svg>,
  arrowRight: (p) => <Svg {...p}>{P("M5 12h14")}{P("m12 5 7 7-7 7")}</Svg>,
  arrowUpRight: (p) => <Svg {...p}>{P("M7 17 17 7")}{P("M7 7h10v10")}</Svg>,
  chevronRight: (p) => <Svg {...p}>{P("m9 18 6-6-6-6")}</Svg>,
  chevronDown: (p) => <Svg {...p}>{P("m6 9 6 6 6-6")}</Svg>,
  globe: (p) => <Svg {...p}><circle cx="12" cy="12" r="9" />{P("M3 12h18")}{P("M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18")}</Svg>,
  phone: (p) => <Svg {...p}>{P("M13.8 10.2a8 8 0 0 0 3.5 3.5l1.2-1.5a1 1 0 0 1 1-.3 9 9 0 0 0 2.5.4 1 1 0 0 1 1 1V16a1 1 0 0 1-1 1A16 16 0 0 1 6 4a1 1 0 0 1 1-1h2.2a1 1 0 0 1 1 1 9 9 0 0 0 .4 2.5 1 1 0 0 1-.3 1z")}</Svg>,
  mail: (p) => <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" />{P("m3 7 9 6 9-6")}</Svg>,
  pin: (p) => <Svg {...p}>{P("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0")}<circle cx="12" cy="10" r="3" /></Svg>,
  calendar: (p) => <Svg {...p}><rect x="3" y="4" width="18" height="18" rx="2" />{P("M16 2v4")}{P("M8 2v4")}{P("M3 10h18")}</Svg>,
  clock: (p) => <Svg {...p}><circle cx="12" cy="12" r="9" />{P("M12 7v5l3 2")}</Svg>,
  cap: (p) => <Svg {...p}>{P("M22 9 12 5 2 9l10 4 10-4z")}{P("M6 11v5c0 1 2.7 3 6 3s6-2 6-3v-5")}{P("M22 9v6")}</Svg>,
  book: (p) => <Svg {...p}>{P("M12 7c0-1.5-2-2.5-5-2.5S3 5.5 3 7v11c0-1.5 1-2.5 4-2.5s5 1 5 2.5")}{P("M12 7c0-1.5 2-2.5 5-2.5S21 5.5 21 7v11c0-1.5-1-2.5-4-2.5s-5 1-5 2.5")}{P("M12 7v11")}</Svg>,
  users: (p) => <Svg {...p}>{P("M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1")}<circle cx="9" cy="7" r="3.5" />{P("M22 19v-1a4 4 0 0 0-3-3.8")}{P("M16 3.3a4 4 0 0 1 0 7.4")}</Svg>,
  building: (p) => <Svg {...p}><rect x="4" y="3" width="16" height="18" rx="1.5" />{P("M9 8h.01")}{P("M15 8h.01")}{P("M9 12h.01")}{P("M15 12h.01")}{P("M10 21v-3a2 2 0 0 1 4 0v3")}</Svg>,
  home: (p) => <Svg {...p}>{P("M3 10.5 12 3l9 7.5")}{P("M5 9.5V21h14V9.5")}{P("M9 21v-6h6v6")}</Svg>,
  bed: (p) => <Svg {...p}>{P("M3 7v13")}{P("M3 14h18v6")}{P("M21 14V9a2 2 0 0 0-2-2H8v7")}<circle cx="6.5" cy="11" r="1.5" /></Svg>,
  play: (p) => <Svg {...p}>{P("M7 4.5v15l13-7.5z")}</Svg>,
  check: (p) => <Svg {...p}>{P("M20 6 9 17l-5-5")}</Svg>,
  checkCircle: (p) => <Svg {...p}><circle cx="12" cy="12" r="9" />{P("m8.5 12 2.5 2.5L16 9")}</Svg>,
  file: (p) => <Svg {...p}>{P("M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z")}{P("M14 3v5h5")}{P("M9 13h6")}{P("M9 17h6")}</Svg>,
  download: (p) => <Svg {...p}>{P("M12 3v12")}{P("m7 11 5 5 5-5")}{P("M5 21h14")}</Svg>,
  flask: (p) => <Svg {...p}>{P("M9 3h6")}{P("M10 3v6.5L5 18a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-8.5V3")}{P("M7.5 15h9")}</Svg>,
  leaf: (p) => <Svg {...p}>{P("M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16")}{P("M4 20c4-5 7-7 13-9")}</Svg>,
  tractor: (p) => <Svg {...p}>{P("M4 13V6h6l2 4h6")}<circle cx="7" cy="16" r="3" /><circle cx="18" cy="17" r="2" />{P("M10 16h5")}</Svg>,
  award: (p) => <Svg {...p}><circle cx="12" cy="9" r="6" />{P("m8.5 14-1.5 7 5-3 5 3-1.5-7")}</Svg>,
  quote: (p) => <Svg {...p}>{P("M7 7H4v6h3l-1 4h3l1-4V7z")}{P("M17 7h-3v6h3l-1 4h3l1-4V7z")}</Svg>,
  external: (p) => <Svg {...p}>{P("M15 3h6v6")}{P("M10 14 21 3")}{P("M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6")}</Svg>,
};
