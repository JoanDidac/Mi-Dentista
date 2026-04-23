
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO } from "@/components/SEO";
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

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalOrganization", "LocalBusiness"],
    "name": "Mi Dentista Barcelona",
    "image": "https://www.midentistabarcelona.com/og-image.png",
    "url": "https://www.midentistabarcelona.com/",
    "telephone": "+34934415849",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer Blai 45",
      "addressLocality": "Barcelona",
      "postalCode": "08004",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.3739,
      "longitude": 2.1643
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "16:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$"
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Mi Dentista - Clínica Dental en Barcelona | Salud y Estética Dental"
        description="Tu clínica dental de confianza en Barcelona desde 2008. Especialistas en estética dental, ortodoncia, implantes y medicina estética facial."
        path="/"
        schema={schema}
      />
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
