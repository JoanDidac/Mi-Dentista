import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/periodoncia-bg.jpg";

const Periodoncia = () => {
  const navigate = useNavigate();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-4 text-white hover:text-white/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Periodoncia
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Cuidamos la salud de tus encías para una sonrisa fuerte y duradera
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Salud Periodontal</h2>
            <p className="text-foreground/80 mb-6">
              La periodoncia se especializa en prevenir, diagnosticar y tratar enfermedades de las encías y 
              estructuras de soporte de los dientes. Unas encías sanas son la base de una sonrisa saludable.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Nuestros Servicios</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Limpieza Profunda:</strong> Raspado y alisado radicular para eliminar placa y sarro bajo la línea de las encías.</li>
              <li><strong>Tratamiento de Gingivitis:</strong> Intervención temprana para revertir la inflamación de las encías.</li>
              <li><strong>Tratamiento de Periodontitis:</strong> Terapias avanzadas para controlar la enfermedad periodontal.</li>
              <li><strong>Mantenimiento Periodontal:</strong> Revisiones y limpiezas regulares para mantener la salud de tus encías.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Signos de Alerta</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>⚠ Encías rojas, inflamadas o que sangran al cepillarse</li>
              <li>⚠ Mal aliento persistente</li>
              <li>⚠ Retracción de encías o dientes que parecen más largos</li>
              <li>⚠ Movilidad dental</li>
              <li>⚠ Cambios en la mordida</li>
            </ul>

            <div className="mt-12 text-center">
              <Button 
                size="lg" 
                onClick={() => setBookingOpen(true)}
                className="bg-primary hover:bg-primary/90"
              >
                Solicitar Consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Periodoncia;