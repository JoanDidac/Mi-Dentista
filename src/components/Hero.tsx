
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay - Deep Purple Gradient to match reference */}
        <div className="absolute inset-0 bg-[#65153d]/80 mix-blend-multiply md:bg-[#65153d]/70"></div>
        {/* Additional gradient for text readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#8C3573]/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start pt-20">
        <div className="pl-8 max-w-4xl space-y-8 animate-in slide-in-from-left-5 duration-1000">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium border border-white/20 shadow-sm">
            <Star className="w-4 h-4 fill-white text-white" />
            <span>Primera Visita Gratis</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f0ede4] leading-tight font-montserrat drop-shadow-md tracking-tighter">
            Tu Sonrisa <br className="hidden md:block" /> y la de tu Familia  <br className="hidden md:block" />
            <span className="text-[#f0ede4] relative">
              En Buenas Manos
              {/* Optional underline decoration */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-light opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 max-w-xl font-light leading-relaxed drop-shadow-sm">
            Expertos en odontología infantil y familiar en Poble Sec. Cuidamos de tu salud bucal con delicadeza, tecnología avanzada y mucho cariño.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="h-14 px-8 bg-white/90 backdrop-blur-sm text-brand-primary hover:bg-brand-light hover:text-white rounded-full text-lg font-semibold shadow-xl transition-all hover:-translate-y-1">
              Reserva Tu Cita Gratis
            </Button>
            <Button variant="outline" className="h-14 px-8 bg-brand-white border-brand-white text-brand-primary hover:text-brand-white hover:bg-white/20 backdrop-blur-sm rounded-full text-lg group">
              Conoce el Equipo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 flex items-center gap-4 text-white/80">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-brand-primary"></div>
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-brand-primary"></div>
              <div className="w-10 h-10 rounded-full bg-white text-brand-primary border-2 border-brand-primary flex items-center justify-center text-xs font-bold shadow-lg">
                +500
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-medium">Familias felices en Barcelona</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (Optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
