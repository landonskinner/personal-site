import StickyHeader from "./components/sticky-header";
import AboutMe from "./components/about-me-scroller";
import ContactLinks from "./components/contact-links";
import ProjectCards from "./components/project-cards";
import PageButtons from "./components/page-buttons";

export default function Home() {
  return (
    <div className="relative">
      <PageButtons />
      <div>
        <StickyHeader />
        <div className="sm:bg-[length:175vw] bg-[length:300vw] bg-top-right bg-repeat pt-[80vh] bg-decorative" />
        <AboutMe />
        <ProjectCards />
      </div>

      <ContactLinks />
    </div>
  );
}
