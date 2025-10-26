import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/rehabilitacion-implantes-bg.jpg";

const RehabilitacionImplantes = () => {
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
              Rehabilitación con Implantes
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Restauraciones completas sobre implantes para sonrisas totalmente funcionales
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Rehabilitación Total sobre Implantes</h2>
            <p className="text-foreground/80 mb-6">
              La rehabilitación con implantes permite recuperar la función completa de la boca cuando se han 
              perdido varios o todos los dientes. Es la solución más estable, cómoda y estética disponible.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Tipos de Rehabilitación</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Prótesis Fija sobre Implantes:</strong> Arcada completa fija sobre 4-6 implantes, no se puede retirar.</li>
              <li><strong>All-on-4® / All-on-6®:</strong> Técnica que permite rehabilitar una arcada completa con solo 4 o 6 implantes.</li>
              <li><strong>Carga Inmediata:</strong> Dientes provisionales fijos el mismo día de la cirugía de implantes.</li>
              <li><strong>Prótesis Híbrida:</strong> Combinación de implantes y prótesis para máxima estabilidad.</li>
              <li><strong>Sobredentadura:</strong> Prótesis removible que se fija sobre implantes para mayor estabilidad.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Ventajas</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Restauración completa de la función masticatoria</li>
              <li>✓ Estabilidad superior a dentaduras convencionales</li>
              <li>✓ Mejora de la fonética y el habla</li>
              <li>✓ Preserva el hueso maxilar</li>
              <li>✓ Estética natural y rejuvenecedora</li>
              <li>✓ Mayor confianza y calidad de vida</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">¿Eres Candidato?</h3>
            <p className="text-foreground/80 mb-4">
              La rehabilitación con implantes es ideal si:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li>• Has perdido todos o la mayoría de tus dientes</li>
              <li>• Usas dentadura postiza y buscas más estabilidad</li>
              <li>• Tienes suficiente hueso o puedes realizarte injertos</li>
              <li>• Buscas una solución permanente y cómoda</li>
              <li>• Deseas mejorar tu función masticatoria</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Proceso de Tratamiento</h3>
            <ol className="space-y-2 text-foreground/80 list-decimal list-inside">
              <li>Evaluación completa con TAC dental 3D</li>
              <li>Planificación digital del caso</li>
              <li>Colocación de implantes con cirugía guiada</li>
              <li>Prótesis provisional (inmediata o tras integración)</li>
              <li>Prótesis definitiva personalizada</li>
              <li>Mantenimiento y revisiones periódicas</li>
            </ol>

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

export default RehabilitacionImplantes;