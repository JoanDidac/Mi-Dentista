import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";

const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <div className="relative bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              Pioneros en
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
              ODONTOLOGÍA
              <br />
              DIGITAL
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Tratamientos de estética dental mínimamente invasivos con la ayuda de 
              la tecnología más avanzada.
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
                className="text-lg px-8 py-6 gap-2"
              >
                <Calendar className="h-5 w-5" />
                Pedir Cita
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src={heroTeam} 
              alt="Equipo profesional de Mi Dentista" 
              className="w-full h-auto rounded-lg shadow-strong"
            />
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-foreground text-background py-12">
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
