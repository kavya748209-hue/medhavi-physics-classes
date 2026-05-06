import { FloatingButtons } from "@/components/FloatingButtons";
import { PageNavbar } from "@/components/PageNavbar";
import AboutPage from "@/pages/AboutPage";
import AdmissionPage from "@/pages/AdmissionPage";
import { ContactSection } from "@/pages/ContactSection";
import CoursesPage from "@/pages/CoursesPage";
import { FAQSection } from "@/pages/FAQSection";
import { Footer } from "@/pages/Footer";
import GalleryPage from "@/pages/GalleryPage";
import { HeroSection } from "@/pages/HeroSection";
import { PhysicsQuotesSection } from "@/pages/PhysicsQuotesSection";
import PhysicsTipsPage from "@/pages/PhysicsTipsPage";
import ResultsPage from "@/pages/ResultsPage";
import { ReviewsSection } from "@/pages/ReviewsSection";
import { ServicesSection } from "@/pages/ServicesSection";
import StudyMaterialsPage from "@/pages/StudyMaterialsPage";
import { ToppersSection } from "@/pages/ToppersSection";
import { WhyChooseUsSection } from "@/pages/WhyChooseUsSection";
import { useEffect, useState } from "react";

function HomePage() {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <PageNavbar />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ToppersSection />
      <ReviewsSection />
      <PhysicsQuotesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function getPage(pathname: string) {
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/courses")) return "courses";
  if (pathname.startsWith("/results")) return "results";
  if (pathname.startsWith("/study-materials")) return "study-materials";
  if (pathname.startsWith("/gallery")) return "gallery";
  if (pathname.startsWith("/physics-tips")) return "physics-tips";
  if (pathname.startsWith("/admission")) return "admission";
  return "home";
}

export default function App() {
  const [page, setPage] = useState(() => getPage(window.location.pathname));

  useEffect(() => {
    const handlePop = () => setPage(getPage(window.location.pathname));
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  // Expose navigate globally so PageNavbar can use it
  useEffect(() => {
    (
      window as Window & { __navigateTo?: (path: string) => void }
    ).__navigateTo = (path: string) => {
      window.history.pushState({}, "", path);
      setPage(getPage(path));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);

  if (page === "about") return <AboutPage />;
  if (page === "courses") return <CoursesPage />;
  if (page === "results") return <ResultsPage />;
  if (page === "study-materials") return <StudyMaterialsPage />;
  if (page === "gallery") return <GalleryPage />;
  if (page === "physics-tips") return <PhysicsTipsPage />;
  if (page === "admission") return <AdmissionPage />;
  return <HomePage />;
}
