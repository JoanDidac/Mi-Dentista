import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/oclusion-bg.jpg";

const OclusionRehabilitacion = () => {
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
              Oclusión y Rehabilitación
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Restauramos función y estética con prótesis y tratamientos avanzados
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Rehabilitación Oral</h2>
            <p className="text-foreground/80 mb-6">
              La rehabilitación oral restaura la función masticatoria y la estética de la sonrisa mediante 
              prótesis dentales y tratamientos de oclusión. Devolvemos la calidad de vida a nuestros pacientes.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Tratamientos</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Prótesis Fijas:</strong> Coronas y puentes que se cementan permanentemente sobre dientes o implantes.</li>
              <li><strong>Prótesis Removibles:</strong> Dentaduras parciales o completas que se pueden retirar para su limpieza.</li>
              <li><strong>Coronas Dentales:</strong> Fundas que cubren completamente un diente dañado, restaurando su forma y función.</li>
              <li><strong>Férulas de Descarga:</strong> Dispositivos personalizados para tratar el bruxismo y proteger los dientes.</li>
              <li><strong>Tratamiento de ATM:</strong> Terapias para disfunciones de la articulación temporomandibular.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">¿Quién necesita rehabilitación oral?</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Personas con dientes ausentes o muy dañados</li>
              <li>• Pacientes con problemas de mordida</li>
              <li>• Quienes sufren de bruxismo o rechinar de dientes</li>
              <li>• Personas con dolor en la articulación mandibular</li>
              <li>• Pacientes que desean mejorar función y estética</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Beneficios</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Recuperación de la función masticatoria</li>
              <li>✓ Mejora de la estética facial</li>
              <li>✓ Alivio del dolor y molestias</li>
              <li>✓ Protección de dientes naturales</li>
              <li>✓ Resultados naturales y duraderos</li>
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

export default OclusionRehabilitacion;