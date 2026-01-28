
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TreatmentsSection from "@/components/TreatmentsSection";
import LegacySection from "@/components/LegacySection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactLocationSection from "@/components/ContactLocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Slight delay to ensure DOM is ready and layout is stable
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      // Clear state to prevent scrolling on subsequent re-renders if necessary, 
      // though location.state persists until new navigation. 
      // Ideally we would replace history but for this simple case it's fine.
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ContactSection />
      <TreatmentsSection />
      <LegacySection />
      <FacilitiesSection />
      <ReviewsSection />
      <ContactLocationSection />
      <Footer />
    </div>
  );
};

export default Index;
