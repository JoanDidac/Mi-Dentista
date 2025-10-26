import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/implantes-bg.jpg";

const Implantes = () => {
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
              Implantes Dentales
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Recupera tu sonrisa con la solución más natural y duradera
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Implantología Avanzada</h2>
            <p className="text-foreground/80 mb-6">
              Los implantes dentales son la mejor solución para reemplazar dientes perdidos. Funcionan como 
              raíces artificiales que se integran al hueso, proporcionando una base sólida para coronas o prótesis.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Nuestros Servicios</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Implantes Unitarios:</strong> Reemplazo de un solo diente sin afectar los dientes adyacentes.</li>
              <li><strong>Múltiples Implantes:</strong> Solución para varios dientes ausentes de forma independiente.</li>
              <li><strong>Cirugía Guiada:</strong> Planificación digital 3D para colocación precisa y mínimamente invasiva.</li>
              <li><strong>Regeneración Ósea:</strong> Técnicas avanzadas cuando no hay suficiente hueso disponible.</li>
              <li><strong>Carga Inmediata:</strong> Colocación de dientes provisionales el mismo día de la cirugía (casos seleccionados).</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Ventajas de los Implantes</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Aspecto, sensación y función como dientes naturales</li>
              <li>✓ Preservan el hueso y la estructura facial</li>
              <li>✓ No requieren tallar dientes adyacentes</li>
              <li>✓ Solución permanente y duradera</li>
              <li>✓ Mejora significativa en calidad de vida</li>
              <li>✓ Tasa de éxito superior al 95%</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Proceso de Tratamiento</h3>
            <ol className="space-y-2 text-foreground/80 list-decimal list-inside">
              <li>Evaluación y planificación con tecnología 3D</li>
              <li>Colocación quirúrgica del implante de titanio</li>
              <li>Periodo de osteointegración (3-6 meses)</li>
              <li>Colocación del pilar de conexión</li>
              <li>Fijación de la corona definitiva</li>
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

export default Implantes;