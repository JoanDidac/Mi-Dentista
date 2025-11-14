import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/ortodoncia-bg.jpg";

const Ortodoncia = () => {
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
              Ortodoncia
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Alineamos tu sonrisa con tecnología invisible y brackets estéticos
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Ortodoncia Moderna</h2>
            <p className="text-foreground/80 mb-6">
              La ortodoncia corrige la posición de los dientes y mejora la mordida. Utilizamos las técnicas 
              más avanzadas para conseguir resultados excepcionales de forma cómoda y estética.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Tratamientos Disponibles</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Invisalign®:</strong> Alineadores transparentes prácticamente invisibles que puedes retirar para comer y cepillarte.</li>
              <li><strong>Brackets Estéticos:</strong> Brackets de cerámica o zafiro que se mimetizan con el color natural de tus dientes.</li>
              <li><strong>Ortodoncia Infantil:</strong> Tratamientos especializados para guiar el correcto desarrollo dental en niños.</li>
              <li><strong>Férulas de Retención:</strong> Dispositivos que mantienen los resultados obtenidos tras el tratamiento ortodóncico.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">¿Por qué elegir nuestra ortodoncia?</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Tecnología digital 3D para planificación precisa</li>
              <li>✓ Opciones estéticas e invisibles</li>
              <li>✓ Seguimiento personalizado y continuo</li>
              <li>✓ Tratamientos para todas las edades</li>
              <li>✓ Resultados predecibles y duraderos</li>
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

export default Ortodoncia;