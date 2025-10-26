import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/estetica-dental-bg.jpg";

const EsteticaDental = () => {
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
              Estética Dental
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Transformamos sonrisas con las técnicas más avanzadas en estética dental
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">¿Qué es la Estética Dental?</h2>
            <p className="text-foreground/80 mb-6">
              La estética dental es una especialidad que combina arte y ciencia para crear sonrisas perfectas. 
              Utilizamos técnicas avanzadas para mejorar la apariencia de tus dientes mientras mantenemos su funcionalidad.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Nuestros Tratamientos</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Carillas de Porcelana:</strong> Láminas ultrafinas que se adhieren a la superficie de los dientes para corregir imperfecciones de color, forma o tamaño.</li>
              <li><strong>Carillas de Composite:</strong> Una alternativa más económica y menos invasiva que se puede realizar en una sola sesión.</li>
              <li><strong>Blanqueamiento Dental:</strong> Tratamientos profesionales que eliminan manchas y decoloraciones, devolviendo el brillo natural a tu sonrisa.</li>
              <li><strong>Diseño Digital de Sonrisa:</strong> Tecnología avanzada que nos permite visualizar el resultado final antes de iniciar el tratamiento.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Beneficios</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Mejora significativa de la apariencia de tu sonrisa</li>
              <li>✓ Resultados naturales y duraderos</li>
              <li>✓ Procedimientos mínimamente invasivos</li>
              <li>✓ Aumento de la confianza y autoestima</li>
              <li>✓ Técnicas de última generación</li>
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

export default EsteticaDental;