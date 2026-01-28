
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  // Helper function for smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    // Check if we are on the home page (root or empty path)
    if (location.pathname === '/' || location.pathname === '/Mi-Dentista/' || location.pathname === '/Mi-Dentista') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Close mobile menu if open
        setIsOpen(false);
      }
    } else {
      // If not on home page, navigate to home and pass the sectionId to scroll to
      navigate('/', { state: { scrollTo: sectionId } });
      setIsOpen(false);
    }
  };

  // Determine navbar style based on scroll and page
  // On home page: Transparent at top (dark bg underneath implies white text), Solid white when scrolled
  // On other pages: Always solid white (standard behavior)
  const isTransparent = isHomePage && !isScrolled;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img
            src={logoTrial}
            alt="Mi Dentista Logo"
            className={cn("h-12 w-auto object-contain", isTransparent && "brightness-0 invert")}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={cn("transition-colors font-medium flex items-center gap-1", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}
            >
              Tratamientos <span className="text-xs">▼</span>
            </button>
            <div className={cn(
              "absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl p-4 animate-in fade-in slide-in-from-top-2 border border-brand-light/20",
              isDropdownOpen ? "block" : "hidden"
            )}>
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

          <button onClick={() => scrollToSection("historia")} className={cn("transition-colors font-medium cursor-pointer", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}>
            Nosotros
          </button>
          <button onClick={() => scrollToSection("testimonios")} className={cn("transition-colors font-medium cursor-pointer", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}>
            Opiniones
          </button>
          <Button onClick={() => scrollToSection("contact")} className={cn("rounded-full px-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer", isTransparent ? "bg-white/80 text-brand-primary hover:bg-brand-light hover:text-white" : "bg-brand-primary/90 hover:bg-brand-dark text-white")}>
            Reserva Tu Cita Gratis
          </Button>
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

          <button
            onClick={() => scrollToSection("historia")}
            className="text-gray-600 hover:text-brand-primary font-medium text-left cursor-pointer"
          >
            Nosotros
          </button>
          <Button onClick={() => scrollToSection("contact")} className="bg-brand-primary/90 w-full text-white rounded-full mt-4 cursor-pointer">
            Reserva Tu Cita Gratis
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
