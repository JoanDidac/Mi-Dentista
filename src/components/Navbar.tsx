import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { servicesData } from "@/data/services";
import BookingDialog from "@/components/BookingDialog";

import logoTrial from "@/assets/logo-trial.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
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
          className="flex items-center gap-2 transition-opacity hover:opacity-90 translate-y-[2px] md:translate-y-0"
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
            <Link
              to="/tratamientos"
              className={cn("transition-colors text-sm font-medium flex items-center gap-1", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}
            >
              Tratamientos <span className="text-xs">▼</span>
            </Link>
            <div className={cn(
              "absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl p-4 animate-in fade-in slide-in-from-top-2 border border-brand-light/20",
              isDropdownOpen ? "block" : "hidden"
            )}>
              <div className="flex flex-col gap-2">
                {servicesData.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/tratamientos/${service.slug}`}
                    className="text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-bg/50 p-2 rounded-lg transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button onClick={() => scrollToSection("historia")} className={cn("transition-colors text-sm font-medium cursor-pointer", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}>
            Nosotros
          </button>
          <button onClick={() => scrollToSection("testimonios")} className={cn("transition-colors text-sm font-medium cursor-pointer", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}>
            Opiniones
          </button>
          <Link to="/blog" className={cn("transition-colors text-sm font-medium cursor-pointer", isTransparent ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-brand-primary")}>
            Blog
          </Link>
          <button
            onClick={() => setBookingOpen(true)}
            className={cn(
              "text-sm font-semibold rounded-full px-5 py-2 transition-all duration-300 cursor-pointer tracking-wide",
              isTransparent
                ? "border border-white/60 text-white hover:bg-white hover:text-brand-primary"
                : "bg-brand-primary text-white hover:bg-brand-dark ring-2 ring-brand-primary/20 hover:ring-brand-primary/40"
            )}
          >
            Reserva Tu Cita →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={cn(isTransparent ? "text-white" : "text-brand-primary")} /> : <Menu className={cn(isTransparent ? "text-white" : "text-brand-primary")} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto top-full">
          <div className="font-bold text-brand-primary mb-2 flex justify-between items-center px-4">
            <span>Tratamientos</span>
            <Link to="/tratamientos" className="text-xs font-semibold bg-brand-light/20 text-brand-primary px-3 py-1 rounded-full hover:bg-brand-light/40" onClick={() => setIsOpen(false)}>Ver Todos</Link>
          </div>
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              to={`/tratamientos/${service.slug}`}
              className="pl-4 text-sm text-gray-600 hover:text-brand-primary"
              onClick={() => setIsOpen(false)}
            >
              {service.title}
            </Link>
          ))}

          <div className="h-px bg-gray-100 my-2"></div>

          <button
            onClick={() => scrollToSection("historia")}
            className="text-gray-600 hover:text-brand-primary font-medium text-left cursor-pointer px-4"
          >
            Nosotros
          </button>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-brand-primary font-medium text-left cursor-pointer px-4"
          >
            Blog
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              setBookingOpen(true);
            }}
            className="w-full mt-4 text-sm font-semibold text-white bg-brand-primary hover:bg-brand-dark rounded-full py-3 transition-all duration-300 tracking-wide cursor-pointer ring-2 ring-brand-primary/20 hover:ring-brand-primary/40"
          >
            Reserva Tu Cita →
          </button>
        </div>
      )}

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </nav>
  );
};

export default Navbar;
