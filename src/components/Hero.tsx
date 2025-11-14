import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <div className="relative bg-background overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: '60% 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              Mi Dentista
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight" style={{ color: '#691844' }}>
              ODONTOLOGÍA
              <br />
              FAMILIAR
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tratamientos de estética dental mínimamente invasivos con la ayuda de 
              la tecnología más humana.
            </p>
            <div className="pt-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                UN NUEVO CONCEPTO EN EL
                <br />
                DISEÑO DE SONRISAS
              </h2>
              <Button 
                onClick={onOpenBooking} 
                size="lg" 
                className="text-lg px-8 py-6 gap-2 shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: '#691844', color: 'white' }}
              >
                <Calendar className="h-5 w-5" />
                Pedir Cita
              </Button>
            </div>
          </div>

          {/* Right side - empty to show background image */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="relative bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center tracking-wide">
            CLÍNICA DENTAL EN BARCELONA
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
