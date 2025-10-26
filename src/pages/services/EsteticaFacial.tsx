import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/estetica-facial-bg.jpg";

const EsteticaFacial = () => {
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
              Estética Facial Avanzada
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Tratamientos completos de armonización y rejuvenecimiento facial
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Armonización Facial sin Cirugía</h2>
            <p className="text-foreground/80 mb-6">
              La estética facial avanzada va más allá del tratamiento de arrugas individuales. Analizamos 
              y tratamos el rostro de forma integral para lograr una armonía facial perfecta y natural.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Tratamientos Avanzados</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Armonización Facial:</strong> Análisis y tratamiento integral de proporciones faciales.</li>
              <li><strong>Hidratación Profunda:</strong> Tratamientos de hidratación intensa para piel radiante.</li>
              <li><strong>Peelings Médicos:</strong> Renovación celular profunda con ácidos de uso médico.</li>
              <li><strong>Revitalización Facial:</strong> Cócteles de vitaminas y nutrientes para regeneración.</li>
              <li><strong>Tratamiento de Manchas:</strong> Eliminación de hiperpigmentación y melasma.</li>
              <li><strong>Tensado Sin Cirugía:</strong> Técnicas de lifting facial no quirúrgico.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Conceptos de Tratamiento</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Tercio Superior:</strong> Frente, entrecejo y región periocular.</li>
              <li><strong>Tercio Medio:</strong> Mejillas, zona malar y surcos nasogenianos.</li>
              <li><strong>Tercio Inferior:</strong> Zona perioral, mentón y línea mandibular.</li>
              <li><strong>Armonización Global:</strong> Equilibrio entre todos los tercios faciales.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Indicaciones</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Deseo de mejorar proporciones faciales</li>
              <li>• Signos avanzados de envejecimiento</li>
              <li>• Piel deshidratada o sin luminosidad</li>
              <li>• Asimetrías faciales leves</li>
              <li>• Pérdida de definición del óvalo facial</li>
              <li>• Deseo de rejuvenecimiento integral</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Proceso Personalizado</h3>
            <ol className="space-y-2 text-foreground/80 list-decimal list-inside">
              <li>Evaluación facial completa con análisis fotográfico</li>
              <li>Diseño de plan de tratamiento individualizado</li>
              <li>Sesiones de tratamiento programadas</li>
              <li>Seguimiento y ajustes según evolución</li>
              <li>Mantenimiento para resultados duraderos</li>
            </ol>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Beneficios</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Rejuvenecimiento facial completo</li>
              <li>✓ Armonía y equilibrio de proporciones</li>
              <li>✓ Resultados naturales y elegantes</li>
              <li>✓ Mejora de calidad de piel</li>
              <li>✓ Mayor luminosidad y frescura</li>
              <li>✓ Efecto antiedad integral</li>
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

export default EsteticaFacial;