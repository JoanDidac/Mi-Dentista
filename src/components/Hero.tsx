import { Calendar, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                Tu clínica dental en Barcelona desde 2008
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Cuidamos de tu
              <span className="text-primary"> sonrisa </span>
              y tu bienestar
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Tratamientos de salud y estética dental con la tecnología más avanzada 
              y un equipo profesional con más de 15 años de experiencia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={onOpenBooking} className="gap-2">
                <Calendar className="h-5 w-5" />
                Pedir Cita
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#servicios">Ver Servicios</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5" />
                  <span className="text-2xl font-bold">15+</span>
                </div>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl font-bold">5000+</span>
                </div>
                <p className="text-sm text-muted-foreground">Pacientes felices</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <span className="text-2xl font-bold">24h</span>
                </div>
                <p className="text-sm text-muted-foreground">Urgencias</p>
              </div>
            </div>
          </div>

          {/* Image placeholder - would be a hero image in production */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-border shadow-strong" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">😁</div>
                  <p className="text-lg font-medium text-muted-foreground">
                    Tu mejor sonrisa empieza aquí
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
