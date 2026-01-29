
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logoTrial from "@/assets/logo-trial.png";
import QRCode from "react-qr-code";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/' || location.pathname === '/Mi-Dentista/' || location.pathname === '/Mi-Dentista') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Wave path animation tied to scroll progress
  const pathX = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-[#65153d] to-[#8C3573] text-white pt-14 pb-7 overflow-hidden"
    >
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft moving orb 1 */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-brand-light/20 rounded-full blur-[80px]"
        />
        {/* Soft moving orb 2 */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-0 w-80 h-80 bg-brand-secondary/20 rounded-full blur-[60px]"
        />
        {/* Subtle sparkle effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-10 right-1/4"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/20">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logoTrial}
                alt="Mi Dentista Logo"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Cuidando sonrisas en Barcelona con tecnología avanzada y un trato cercano. Especialistas en hacer que los niños amen ir al dentista.
            </p>
            <div className="flex gap-3">
              {/* Social icons - scaled down */}
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 font-montserrat tracking-tight">Enlaces</h4>
            <ul className="space-y-2.5 text-white/70 text-sm">
              <li><a href="#" onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/' || location.pathname === '/Mi-Dentista/' || location.pathname === '/Mi-Dentista') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }} className="hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-brand-light opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Inicio
              </a></li>
              <li><a href="#tratamientos" onClick={(e) => { e.preventDefault(); scrollToSection('tratamientos'); }} className="hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-brand-light opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Tratamientos
              </a></li>
              <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('historia'); }} className="hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-brand-light opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Nosotros
              </a></li>
              <li><a href="#testimonios" onClick={(e) => { e.preventDefault(); scrollToSection('testimonios'); }} className="hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-brand-light opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Opiniones
              </a></li>
              <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto-footer'); }} className="hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-brand-light opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contacto
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 font-montserrat tracking-tight">Horario</h4>
            <ul className="space-y-2.5 text-white/70 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="font-medium">Lun - Vie</span>
                <span className="text-white">9:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="font-medium">Sábados</span>
                <span className="text-white">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-white/40">
                <span className="font-medium">Domingos</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h4 className="font-bold text-sm mb-4 font-montserrat tracking-tight">Contacto Rápido</h4>
            <div className="bg-transparent p-0 rounded-none">
              <QRCode
                value="https://wa.me/34692248625"
                size={100}
                level="M"
                bgColor="transparent"
                fgColor="#FFFFFF"
              />
            </div>
            <span className="text-[10px] uppercase font-bold text-white/80 tracking-wider mt-3 text-center max-w-[120px]">Escanea para chatear vía WhatsApp</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Mi Dentista Barcelona. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => { e.preventDefault(); toast.info("Página de Privacidad en construcción"); }} className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" onClick={(e) => { e.preventDefault(); toast.info("Página de Cookies en construcción"); }} className="hover:text-white transition-colors">Cookies</a>
            <a href="#" onClick={(e) => { e.preventDefault(); toast.info("Aviso Legal en construcción"); }} className="hover:text-white transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
