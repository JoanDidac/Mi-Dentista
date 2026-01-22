
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
