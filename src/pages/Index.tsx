import { useState } from "react";
import {
  Sparkles,
  Smile,
  Shield,
  Zap,
  Stethoscope,
  Baby,
  Activity,
  Moon,
  Syringe,
  Scissors,
  RefreshCw,
  Heart,
  Droplet,
  Wind,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCategory from "@/components/ServiceCategory";
import BookingDialog from "@/components/BookingDialog";
import Footer from "@/components/Footer";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const saludEsteticaServices = [
    {
      name: "Estética Dental",
      description: "Carillas de porcelana o composite, blanqueamiento dental, diseño digital de sonrisa.",
      icon: Sparkles,
    },
    {
      name: "Ortodoncia",
      description: "Invisalign® y brackets estéticos, ortodoncia infantil, férulas de retención.",
      icon: Smile,
    },
    {
      name: "Periodoncia",
      description: "Tratamientos de encías, limpieza profunda, mantenimiento periodontal.",
      icon: Shield,
    },
    {
      name: "Endodoncia",
      description: "Tratamiento de conductos, eliminación del dolor dental y conservación de piezas.",
      icon: Zap,
    },
    {
      name: "Odontología General",
      description: "Empastes, limpiezas, revisiones, control de caries y bruxismo.",
      icon: Stethoscope,
    },
    {
      name: "Odontopediatría",
      description: "Atención específica para niños, revisiones preventivas, selladores.",
      icon: Baby,
    },
    {
      name: "Oclusión y Rehabilitación",
      description: "Prótesis, coronas, férulas de descarga, tratamientos de ATM.",
      icon: Activity,
    },
    {
      name: "Ronquido y Apnea",
      description: "Dispositivos intraorales para mejorar el descanso y reducir el ronquido.",
      icon: Moon,
    },
  ];

  const implantesServices = [
    {
      name: "Implantes Dentales",
      description: "Sustitución de piezas perdidas con técnicas guiadas y regeneración ósea.",
      icon: Syringe,
    },
    {
      name: "Cirugía Oral",
      description: "Extracción de muelas del juicio, quistes, pequeños injertos óseos.",
      icon: Scissors,
    },
    {
      name: "Rehabilitación con Implantes",
      description: "Prótesis sobre implantes, carga inmediata, restauración total.",
      icon: RefreshCw,
    },
    {
      name: "Patología ATM",
      description: "Diagnóstico y tratamiento del dolor mandibular o disfunción de la articulación.",
      icon: Activity,
    },
  ];

  const esteticaFacialServices = [
    {
      name: "Medicina Estética Facial",
      description: "Rejuvenecimiento con ácido hialurónico, bótox, vitaminas, mesoterapia facial.",
      icon: Heart,
    },
    {
      name: "Estética Facial Avanzada",
      description: "Armonización facial sin cirugía, hidratación profunda, peelings médicos, revitalización.",
      icon: Droplet,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <Hero onOpenBooking={() => setBookingOpen(true)} />
      
      <div id="servicios">
        <ServiceCategory
          id="salud-estetica"
          title="Salud y Estética Dental"
          subtitle="Servicios orientados a mantener y mejorar la salud bucodental y la sonrisa de toda la familia"
          services={saludEsteticaServices}
          palette="a"
        />

        <ServiceCategory
          id="implantes"
          title="Implantes y Cirugía Oral"
          subtitle="Soluciones avanzadas para recuperar tu sonrisa con técnicas modernas y seguras"
          services={implantesServices}
          palette="b"
        />

        <ServiceCategory
          id="estetica-facial"
          title="Medicina y Estética Facial"
          subtitle="Tratamientos faciales no quirúrgicos para realzar tu belleza natural"
          services={esteticaFacialServices}
          palette="c"
        />
      </div>

      <Footer />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
