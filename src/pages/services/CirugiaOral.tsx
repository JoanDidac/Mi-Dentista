import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/cirugia-oral-bg.jpg";

const CirugiaOral = () => {
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
              Cirugía Oral
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Procedimientos quirúrgicos con la máxima precisión y seguridad
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Cirugía Oral Especializada</h2>
            <p className="text-foreground/80 mb-6">
              La cirugía oral abarca procedimientos quirúrgicos en la boca, mandíbulas y estructuras 
              relacionadas. Utilizamos técnicas modernas y anestesia para garantizar tu comodidad.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Procedimientos</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Extracción de Muelas del Juicio:</strong> Remoción de cordales impactados o problemáticos.</li>
              <li><strong>Extracciones Complejas:</strong> Extracción de dientes con raíces complicadas o dientes rotos.</li>
              <li><strong>Cirugía de Quistes:</strong> Eliminación de quistes y lesiones en los maxilares.</li>
              <li><strong>Injertos Óseos:</strong> Aumento de hueso para facilitar la colocación de implantes.</li>
              <li><strong>Frenectomía:</strong> Corrección quirúrgica del frenillo lingual o labial.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">¿Cuándo se necesita cirugía oral?</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Muelas del juicio impactadas o que causan dolor</li>
              <li>• Dientes que no pueden extraerse de forma simple</li>
              <li>• Preparación para implantes dentales</li>
              <li>• Quistes o tumores benignos en la mandíbula</li>
              <li>• Infecciones persistentes</li>
              <li>• Problemas con el frenillo</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Nuestro Enfoque</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Evaluación exhaustiva preoperatoria</li>
              <li>✓ Técnicas mínimamente invasivas</li>
              <li>✓ Anestesia local o sedación según necesidad</li>
              <li>✓ Seguimiento post-operatorio detallado</li>
              <li>✓ Instrucciones claras para recuperación</li>
              <li>✓ Tecnología de vanguardia</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Recuperación</h3>
            <p className="text-foreground/80">
              El tiempo de recuperación varía según el procedimiento. Proporcionamos instrucciones 
              detalladas y estamos disponibles para cualquier consulta durante tu recuperación.
            </p>

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

export default CirugiaOral;