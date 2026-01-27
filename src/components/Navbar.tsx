
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

import logoTrial from "@/assets/logo-trial.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we are on the home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar style based on scroll and page
  // On home page: Transparent at top (dark bg underneath implies white text), Solid white when scrolled
  // On other pages: Always solid white (standard behavior)
  const isTransparent = isHomePage && !isScrolled;

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b",
        isTransparent
          ? "bg-transparent border-transparent py-6"
          : "bg-white/95 backdrop-blur-md shadow-sm border-brand-light/20 py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          {/* Use a filter to invert the logo color when on transparent dark background for better visibility if needed, 
                 or just display it. Assuming the logo is dark text. width/height adjusted to fit. 
                 If the user provided logo is black text, and we are on transparent (dark) bg, we might need a white version 
                 or a filter. For this trial, I will try to use a filter invert if transparent, but the user just said 'use the image'. 
                 I'll add a conditional brightness/invert if it's transparent, assuming the logo is dark. 
                 Safest bet is just to show the image first as requested. */}
          <img
            src={logoTrial}
            alt="Mi Dentista Logo"
            className={cn("h-12 w-auto object-contain", isTransparent && "brightness-0 invert")}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className={cn("transition-colors font-medium flex items-center gap-1", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}>
              Tratamientos <span className="text-xs">▼</span>
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl p-4 hidden group-hover:block animate-in fade-in slide-in-from-top-2 border border-brand-light/20">
              <div className="flex flex-col gap-2">
                <Link to="/tratamientos/odontopediatria-barcelona" className="text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-bg/50 p-2 rounded-lg transition-colors">Odontopediatría</Link>
                <Link to="/tratamientos/ortodoncia-invisible-barcelona" className="text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-bg/50 p-2 rounded-lg transition-colors">Ortodoncia Invisible</Link>
                <Link to="/tratamientos/implantes-dentales-barcelona" className="text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-bg/50 p-2 rounded-lg transition-colors">Implantes Dentales</Link>
                <Link to="/tratamientos/ortodoncia-convencional-barcelona" className="text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-bg/50 p-2 rounded-lg transition-colors">Ortodoncia Convencional</Link>
                <Link to="/tratamientos/endodoncia-barcelona" className="text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-bg/50 p-2 rounded-lg transition-colors">Endodoncia</Link>
                <Link to="/tratamientos/periodoncia-barcelona" className="text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-bg/50 p-2 rounded-lg transition-colors">Periodoncia</Link>
                <Link to="/tratamientos/cirugia-oral-barcelona" className="text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-bg/50 p-2 rounded-lg transition-colors">Cirugía Oral</Link>
              </div>
            </div>
          </div>

          <a href="/#historia" className={cn("transition-colors font-medium", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}>
            Nosotros
          </a>
          <a href="/#testimonios" className={cn("transition-colors font-medium", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}>
            Opiniones
          </a>
          <a href="/#contact">
            <Button className={cn("rounded-full px-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5", isTransparent ? "bg-white/80 text-brand-primary hover:bg-brand-light hover:text-white" : "bg-brand-primary/90 hover:bg-brand-dark text-white")}>
              Reserva Tu Cita Gratis
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={cn(isTransparent ? "text-white" : "text-brand-primary")} /> : <Menu className={cn(isTransparent ? "text-white" : "text-brand-primary")} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto top-full">
          <div className="font-bold text-brand-primary mb-2">Tratamientos</div>
          <Link to="/tratamientos/odontopediatria-barcelona" className="pl-4 text-sm text-gray-600 hover:text-brand-primary" onClick={() => setIsOpen(false)}>Odontopediatría</Link>
          <Link to="/tratamientos/ortodoncia-invisible-barcelona" className="pl-4 text-sm text-gray-600 hover:text-brand-primary" onClick={() => setIsOpen(false)}>Ortodoncia Invisible</Link>
          <Link to="/tratamientos/implantes-dentales-barcelona" className="pl-4 text-sm text-gray-600 hover:text-brand-primary" onClick={() => setIsOpen(false)}>Implantes Dentales</Link>
          {/* Add more links as needed for mobile */}

          <div className="h-px bg-gray-100 my-2"></div>

          <a
            href="/#historia"
            className="text-gray-600 hover:text-brand-primary font-medium"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </a>
          <a href="/#contact" onClick={() => setIsOpen(false)}>
            <Button className="bg-brand-primary/90 w-full text-white rounded-full mt-4">
              Reserva Tu Cita Gratis
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
