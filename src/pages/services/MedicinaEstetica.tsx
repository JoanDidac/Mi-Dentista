import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/services/medicina-estetica-bg.jpg";

const MedicinaEstetica = () => {
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
              Medicina Estética Facial
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Realza tu belleza natural con tratamientos faciales avanzados
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Rejuvenecimiento Facial</h2>
            <p className="text-foreground/80 mb-6">
              La medicina estética facial combina arte y ciencia para realzar tu belleza natural. 
              Utilizamos técnicas no quirúrgicas para rejuvenecer y armonizar los rasgos faciales.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">Tratamientos</h3>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Ácido Hialurónico:</strong> Rellenos dérmicos para volumen, hidratación y corrección de arrugas.</li>
              <li><strong>Toxina Botulínica (Bótox):</strong> Tratamiento de arrugas de expresión en frente, entrecejo y patas de gallo.</li>
              <li><strong>Bioestimuladores:</strong> Productos que estimulan la producción natural de colágeno.</li>
              <li><strong>Mesoterapia Facial:</strong> Microinyecciones de vitaminas y nutrientes para revitalizar la piel.</li>
              <li><strong>Rinomodelación:</strong> Corrección no quirúrgica de pequeñas irregularidades nasales.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Áreas de Tratamiento</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Arrugas y líneas de expresión</li>
              <li>• Pérdida de volumen en mejillas y labios</li>
              <li>• Surcos nasogenianos profundos</li>
              <li>• Ojeras y bolsas bajo los ojos</li>
              <li>• Contorno facial y mandibular</li>
              <li>• Hidratación y luminosidad de la piel</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Ventajas</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>✓ Procedimientos no quirúrgicos</li>
              <li>✓ Resultados naturales y armoniosos</li>
              <li>✓ Mínimo tiempo de recuperación</li>
              <li>✓ Sin cicatrices</li>
              <li>✓ Efectos visibles inmediatos</li>
              <li>✓ Tratamientos personalizados</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Nuestro Enfoque</h3>
            <p className="text-foreground/80 mb-4">
              Creemos en realzar tu belleza natural sin alterar tu expresión. Cada tratamiento es 
              personalizado según tus necesidades y objetivos, buscando siempre resultados armoniosos 
              y naturales que te hagan sentir más segura y radiante.
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

export default MedicinaEstetica;