import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/odontopediatria-bg.jpg";

const Odontopediatria = () => {
  const navigate = useNavigate();
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const h1 = document.querySelector('h1');
    if (h1) {
      h1.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
              Odontopediatría
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Cuidado dental especializado para los más pequeños
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Dentista para Niños</h2>
            <p className="text-foreground/80 mb-6">
              La odontopediatría se dedica al cuidado de la salud oral de bebés, niños y adolescentes. 
              Creamos experiencias positivas que fomentan hábitos saludables para toda la vida.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Servicios Especializados</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Primera Visita:</strong> Examen completo y consejos para padres sobre cuidado dental infantil.</li>
              <li><strong>Revisiones Preventivas:</strong> Controles regulares adaptados a cada etapa de desarrollo.</li>
              <li><strong>Selladores Dentales:</strong> Protección adicional contra caries en molares y premolares.</li>
              <li><strong>Fluorización:</strong> Aplicación de flúor para fortalecer el esmalte dental.</li>
              <li><strong>Tratamiento de Caries:</strong> Empastes en dientes de leche y permanentes.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">¿Por qué elegirnos?</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Ambiente amigable y sin estrés</li>
              <li>✓ Profesionales especializados en niños</li>
              <li>✓ Técnicas de manejo conductual</li>
              <li>✓ Educación sobre higiene oral</li>
              <li>✓ Prevención como prioridad</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Consejos para Padres</h3>
            <p className="text-foreground/80">
              Recomendamos la primera visita al dentista antes del primer año de edad o cuando aparezca 
              el primer diente. Las visitas tempranas ayudan a:
            </p>
            <ul className="space-y-2 text-foreground/80 mt-3">
              <li>• Familiarizar al niño con el entorno dental</li>
              <li>• Detectar problemas tempranamente</li>
              <li>• Establecer buenos hábitos de higiene</li>
              <li>• Prevenir el miedo al dentista</li>
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

export default Odontopediatria;