import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/odontologia-general-bg.jpg";

const OdontologiaGeneral = () => {
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
              Odontología General
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Cuidado integral de tu salud bucodental
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Atención Dental Completa</h2>
            <p className="text-foreground/80 mb-6">
              La odontología general es la base de una buena salud oral. Proporcionamos atención preventiva 
              y tratamientos para mantener tu sonrisa sana y funcional.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Revisiones Periódicas:</strong> Exámenes completos para detectar problemas en etapas tempranas.</li>
              <li><strong>Limpiezas Dentales:</strong> Eliminación profesional de placa y sarro para prevenir enfermedades.</li>
              <li><strong>Empastes:</strong> Restauración de dientes afectados por caries con materiales estéticos.</li>
              <li><strong>Control de Caries:</strong> Prevención y tratamiento de caries dental.</li>
              <li><strong>Tratamiento de Bruxismo:</strong> Férulas de descarga personalizadas para proteger tus dientes.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Prevención</h3>
            <p className="text-foreground/80 mb-4">
              La prevención es clave para mantener una buena salud oral. Recomendamos:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Revisiones cada 6 meses</li>
              <li>✓ Limpiezas profesionales regulares</li>
              <li>✓ Cepillado tres veces al día</li>
              <li>✓ Uso diario de hilo dental</li>
              <li>✓ Alimentación equilibrada baja en azúcares</li>
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

export default OdontologiaGeneral;