import React from "react";
import { TopBar, SiteHeader, SiteFooter, PageKey } from "./site/Chrome";
import { HomePage } from "./site/HomePage";
import { NewsListPage, NewsArticlePage, EventsPage } from "./site/Pages1";
import { ProgramsPage, StudyPlansPage, AdmissionPage, StructurePage, DormitoryPage } from "./site/Pages2";

const PAGES: Record<PageKey, (p: { go: (k: PageKey) => void }) => JSX.Element> = {
  home: HomePage,
  news: NewsListPage,
  article: NewsArticlePage,
  events: EventsPage,
  programs: ProgramsPage,
  studyplans: StudyPlansPage,
  admission: AdmissionPage,
  structure: StructurePage,
  dormitory: DormitoryPage,
};

export function App() {
  const [page, setPage] = React.useState<PageKey>("home");
  const go = (p: PageKey) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };
  const Current = PAGES[page] || HomePage;
  return (
    <>
      <TopBar />
      <SiteHeader current={page} go={go} />
      <main>
        <Current go={go} />
      </main>
      <SiteFooter go={go} />
    </>
  );
}
