import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/patologia-atm-bg.jpg";

const PatologiaATM = () => {
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
              Patología ATM
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Diagnóstico y tratamiento especializado de disfunciones mandibulares
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Trastornos Temporomandibulares</h2>
            <p className="text-foreground/80 mb-6">
              La articulación temporomandibular (ATM) conecta la mandíbula con el cráneo. Los trastornos 
              de la ATM pueden causar dolor y disfunción, afectando significativamente la calidad de vida.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Síntomas Comunes</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Dolor Facial:</strong> Dolor en la mandíbula, rostro, oído o cuello.</li>
              <li><strong>Chasquidos o Crujidos:</strong> Ruidos al abrir o cerrar la boca.</li>
              <li><strong>Limitación de Movimiento:</strong> Dificultad para abrir completamente la boca.</li>
              <li><strong>Bloqueo Mandibular:</strong> Mandíbula que se queda "trabada" en posición abierta o cerrada.</li>
              <li><strong>Dolores de Cabeza:</strong> Cefaleas frecuentes, especialmente al despertar.</li>
              <li><strong>Bruxismo:</strong> Rechinar o apretar los dientes, generalmente nocturno.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Causas</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Bruxismo (apretar o rechinar dientes)</li>
              <li>• Maloclusión dental</li>
              <li>• Estrés y tensión muscular</li>
              <li>• Traumatismos en la mandíbula</li>
              <li>• Artritis en la articulación</li>
              <li>• Malos hábitos posturales</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Tratamientos</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Férulas de Descarga:</strong> Dispositivos personalizados para proteger dientes y relajar músculos.</li>
              <li><strong>Fisioterapia:</strong> Ejercicios y terapias para mejorar la función mandibular.</li>
              <li><strong>Ajuste Oclusal:</strong> Corrección de la mordida mediante tallados selectivos.</li>
              <li><strong>Ortodoncia:</strong> Alineación dental para mejorar la oclusión.</li>
              <li><strong>Manejo del Estrés:</strong> Técnicas de relajación y modificación de hábitos.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Nuestro Enfoque</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Diagnóstico preciso con tecnología avanzada</li>
              <li>✓ Tratamiento conservador y personalizado</li>
              <li>✓ Enfoque multidisciplinar</li>
              <li>✓ Férulas de descarga de última generación</li>
              <li>✓ Seguimiento continuo de la evolución</li>
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

export default PatologiaATM;