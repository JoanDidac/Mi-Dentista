import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/ronquido-bg.jpg";

const RonquidoApnea = () => {
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
              Ronquido y Apnea del Sueño
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Mejora tu descanso y salud con dispositivos intraorales
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Tratamiento del Ronquido y Apnea</h2>
            <p className="text-foreground/80 mb-6">
              El ronquido y la apnea del sueño son problemas comunes que afectan la calidad del descanso y 
              la salud general. Ofrecemos soluciones efectivas mediante dispositivos intraorales personalizados.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">¿Qué es la Apnea del Sueño?</h3>
            <p className="text-foreground/80 mb-4">
              La apnea obstructiva del sueño es un trastorno en el que la respiración se detiene repetidamente 
              durante el sueño debido a la obstrucción de las vías respiratorias. Esto puede causar:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li>• Somnolencia diurna excesiva</li>
              <li>• Fatiga crónica</li>
              <li>• Problemas cardiovasculares</li>
              <li>• Dificultad de concentración</li>
              <li>• Dolores de cabeza matutinos</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Nuestro Tratamiento</h3>
            <p className="text-foreground/80 mb-4">
              Los dispositivos de avance mandibular (DAM) son aparatos intraorales personalizados que:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Posicionan la mandíbula:</strong> Adelantan ligeramente la mandíbula inferior durante el sueño.</li>
              <li><strong>Abren las vías respiratorias:</strong> Mantienen las vías aéreas despejadas para una respiración normal.</li>
              <li><strong>Son cómodos:</strong> Diseñados a medida para máxima comodidad durante el sueño.</li>
              <li><strong>Fáciles de usar:</strong> Portátiles y discretos, ideales para viajes.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Beneficios</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Reducción significativa del ronquido</li>
              <li>✓ Mejora de la calidad del sueño</li>
              <li>✓ Alternativa no invasiva al CPAP</li>
              <li>✓ Aumenta la energía y concentración</li>
              <li>✓ Reduce riesgos cardiovasculares</li>
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

export default RonquidoApnea;