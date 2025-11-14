import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/endodoncia-bg.jpg";

const Endodoncia = () => {
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
              Endodoncia
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Salvamos dientes eliminando el dolor y conservando tu sonrisa natural
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Tratamiento de Conductos</h2>
            <p className="text-foreground/80 mb-6">
              La endodoncia, conocida comúnmente como "tratamiento de conductos", elimina la pulpa dental 
              infectada o dañada, aliviando el dolor y salvando el diente natural.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">¿Cuándo necesitas una endodoncia?</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Dolor intenso:</strong> Dolor dental agudo o persistente, especialmente al morder o aplicar presión.</li>
              <li><strong>Sensibilidad:</strong> Sensibilidad prolongada al frío o al calor, incluso después de retirar el estímulo.</li>
              <li><strong>Oscurecimiento dental:</strong> Cambio de color del diente afectado.</li>
              <li><strong>Inflamación:</strong> Hinchazón de encías o aparición de un bulto cerca del diente.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Nuestro Procedimiento</h3>
            <ol className="space-y-2 text-foreground/80 list-decimal list-inside">
              <li>Anestesia local para garantizar tu comodidad</li>
              <li>Acceso a la pulpa dental a través de una pequeña apertura</li>
              <li>Limpieza y desinfección de los conductos radiculares</li>
              <li>Sellado hermético de los conductos tratados</li>
              <li>Reconstrucción del diente con una restauración definitiva</li>
            </ol>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Ventajas</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Elimina el dolor dental</li>
              <li>✓ Conserva tu diente natural</li>
              <li>✓ Procedimiento indoloro con anestesia</li>
              <li>✓ Alta tasa de éxito a largo plazo</li>
              <li>✓ Tecnología de última generación</li>
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

export default Endodoncia;