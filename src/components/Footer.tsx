import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-vertical.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#691844] text-white border-t border-[#691844]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <img src={logo} alt="Mi Dentista" className="h-24 w-auto bg-white p-2 rounded" />
            <p className="text-sm text-white/90">
              Tu clínica dental de confianza en Barcelona desde 2008. 
              Cuidamos de tu sonrisa con profesionalidad y cercanía.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contacto</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:934413664" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                934 413 664
              </a>
              <a href="mailto:info@midentista.com" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                info@midentista.com
              </a>
              <div className="flex items-start gap-2 text-white/90">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Calle Ejemplo 123<br />
                  08001 Barcelona
                </span>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Horario</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-white" />
                <span className="font-medium text-white">Lunes - Viernes</span>
              </div>
              <p className="text-white/90 pl-6">9:00 - 14:00 | 16:00 - 20:00</p>
              
              <div className="flex items-center gap-2 pt-2">
                <Clock className="h-4 w-4 text-white" />
                <span className="font-medium text-white">Urgencias 24h</span>
              </div>
              <p className="text-white/90 pl-6">Llamar al 934 413 664</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="#salud-estetica" className="hover:text-white transition-colors">Salud y Estética Dental</a></li>
              <li><a href="#implantes" className="hover:text-white transition-colors">Implantes y Cirugía</a></li>
              <li><a href="#estetica-facial" className="hover:text-white transition-colors">Estética Facial</a></li>
              <li><a href="#urgencias" className="hover:text-white transition-colors">Urgencias Dentales</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/90">
          <p>© {new Date().getFullYear()} Mi Dentista. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
