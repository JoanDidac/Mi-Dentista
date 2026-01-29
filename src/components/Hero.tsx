import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "../assets/hero-image.png";
import avatar1 from "../assets/avatar_face_1.png";
import avatar2 from "../assets/avatar_face_2.png";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div
        className="absolute inset-0 bg-cover bg-[60%_center] md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay - Deep Purple Gradient to match reference */}
        <div className="absolute inset-0 bg-[#65153d]/80 mix-blend-multiply md:bg-[#65153d]/70"></div>
        {/* Additional gradient for text readability at the bottom - seamlessly transitioning to #8C3573 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#8C3573] via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start pt-20">
        <div className="pl-0 md:pl-8 max-w-4xl space-y-8 animate-in slide-in-from-left-5 duration-1000">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium border border-white/20 shadow-sm">
            <Star className="w-4 h-4 fill-white text-white" />
            <span>Primera Visita Gratis</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#f0ede4] leading-tight font-barlow drop-shadow-md tracking-normal">
            Tu Sonrisa <br /> <span className="whitespace-nowrap">y la de tu Familia</span> <br />
            <span className="text-[#f0ede4] relative whitespace-nowrap">
              En Buenas Manos
              {/* Optional underline decoration */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-light opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  className="animate-shine opacity-0"
                  strokeDasharray="30 200"
                  style={{ filter: "drop-shadow(0 0 2px #AD5E99) drop-shadow(0 0 6px #8C3573)" }}
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 max-w-xl font-light leading-relaxed drop-shadow-sm">
            Expertos en odontología empática y respetuosa en Poble Sec, Barcelona. Cuidamos de tu salud buco-dental con delicadeza, 20 años de experiencia y mucho cariño.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={scrollToContact}
              className="h-14 px-8 bg-white/90 backdrop-blur-sm text-brand-primary border border-brand-primary/60 hover:border-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-[0_8px_25px_-5px_#AD5E99] rounded-full text-lg font-semibold shadow-xl transition-all hover:-translate-y-1"
            >
              Reserva Tu Cita Gratis
            </Button>
            <Button
              onClick={() => scrollToSection('historia')}
              variant="outline"
              className="h-14 px-8 bg-[#B784A7]/20 border-[#B784A7]/40 text-white hover:text-white hover:bg-[#8C3573]/80 backdrop-blur-sm rounded-full text-lg group"
            >
              Conoce el Equipo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 flex items-center gap-4 text-white/80">
            <div className="flex -space-x-3">
              <img src={avatar1} alt="Patient 1" className="w-10 h-10 rounded-full border-2 border-brand-primary object-cover" />
              <img src={avatar2} alt="Patient 2" className="w-10 h-10 rounded-full border-2 border-brand-primary object-cover" />
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

      {/* Scroll indicator */}
      <div
        onClick={scrollToContact}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block cursor-pointer hover:opacity-80 transition-opacity"
      >
        <motion.div
          className="w-12 h-12 flex justify-center items-center"
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          {/* Friendly Wisdom Tooth SVG - Animated */}
          <motion.svg
            viewBox="0 0 64 64"
            className="w-full h-full drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
            variants={{
              hover: { scale: 1.15 }
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <g fill="none" fillRule="evenodd">
              {/* Twinkling Stars */}
              <motion.polygon
                fill="#FF78C7"
                points="17.561 10.341 13.629 11.493 14.78 7.561 13.629 3.629 17.561 4.78 21.493 3.629 20.341 7.561 21.493 11.493"
                transform="rotate(-45 17.56 7.56)"
                animate={{ opacity: [1, 0.5, 1], scale: [1, 0.9, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.polygon
                fill="#FF78C7"
                points="17.78 55.67 15.107 56.453 15.89 53.78 15.107 51.107 17.78 51.89 20.453 51.107 19.67 53.78 20.453 56.453"
                transform="rotate(-45 17.78 53.78)"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Tooth Body - Nods on Hover */}
              <motion.path
                fill="#f0ede4"
                d="M26.0714286,14 C21.8109462,14 19,18.8928881 19,24.9285714 C19,30.9642548 21.8109462,50 26.0714286,50 C28.5568423,50 28.8391605,34.1920244 32.1785714,34.177711 C36.1608395,34.1920244 35.8003005,50 38.2857143,50 C42.5461966,50 45.3571429,30.9642548 45.3571429,24.9285714 C45.3571429,18.8928881 42.5461966,14 38.2857143,14 C36.25,14 34.2142857,15.9285714 32.1785714,15.9285714 30.1428571,15.9285714 28.1071428,14 26.0714286,14 Z"
                variants={{
                  hover: {
                    rotate: [0, -5, 5, 0],
                    fill: "#FFFFFF"
                  }
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ originX: "50%", originY: "50%" }}
              />

              <motion.polygon
                fill="#FF78C7"
                points="36.78 23.67 34.107 24.453 34.89 21.78 34.107 19.107 36.78 19.89 39.453 19.107 38.67 21.78 39.453 24.453"
                transform="rotate(-45 36.78 21.78)"
                animate={{ opacity: [1, 0.6, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Rings Group */}
              {/* Rings Group */}
              <motion.g>
                {/* Ring 1 - Orbit Flow */}
                <motion.path
                  stroke="#FF78C7"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M17.4701388,29.01117 C9.93126448,29.8980783 4.92849706,31.4581568 4.92849706,33.2346166 C4.92849706,35.9960404 17.0168088,38.2346166 31.9284971,38.2346166 C46.8401853,38.2346166 58.9284971,35.9960404 58.9284971,33.2346166 C58.9284971,31.8411183 55.8501866,30.5807641 50.8841565,29.6740337"
                  transform="rotate(-30 31.928 33.623)"
                  initial={{ strokeDasharray: "none", strokeDashoffset: 0 }}
                  variants={{
                    hover: {
                      strokeDasharray: "10 10",
                      strokeDashoffset: -40,
                      transition: {
                        strokeDasharray: { duration: 0 },
                        strokeDashoffset: { duration: 1, ease: "linear", repeat: Infinity }
                      }
                    }
                  }}
                />
                {/* Ring 2 - Orbit Flow with delay */}
                <motion.path
                  stroke="#D650C7"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M13.3558551,29.1929448 C8.13881926,30.1045985 4.8826859,31.3969451 4.8826859,32.830127 C4.8826859,35.5915508 16.9709977,37.830127 31.8826859,37.830127 L31.8826859,37.830127 C46.7943741,37.830127 58.8826859,35.5915508 58.8826859,32.830127 C58.8826859,31.0833094 54.0454791,29.5457122 46.7162979,28.6516378"
                  transform="rotate(30 31.883 33.24)"
                  initial={{ strokeDasharray: "none", strokeDashoffset: 0 }}
                  variants={{
                    hover: {
                      strokeDasharray: "10 10",
                      strokeDashoffset: -40,
                      transition: {
                        strokeDasharray: { duration: 0 },
                        strokeDashoffset: { duration: 1, ease: "linear", repeat: Infinity }
                      }
                    }
                  }}
                />
              </motion.g>
            </g>
          </motion.svg>
        </motion.div>
      </div>

      {/* Hero QR Code Widget (Desktop Only) */}
      <motion.div
        className="absolute bottom-8 right-4 hidden md:flex flex-col items-center gap-3 z-20 cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.05, 1] // Bouncing scale effect
        }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 1, delay: 1 },
          scale: {
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 5 // Repeats every 5 seconds + duration
          }
        }}
      >
        <a
          href="https://wa.me/34692248625"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 transition-transform duration-300 group-hover:scale-110"
        >
          {/* Glassmorphism container for QR */}
          {/* User asked for transparent bg, but pure transparent might be hard to scan if bg has noise.
              However, inverted QR (white on dark) works well.
              Ref: "transparent background with white qr code" */}
          <div className="p-1 backdrop-blur-[2px] rounded-lg opacity-40 group-hover:opacity-100 transition-opacity duration-300">
            <QRCode
              value="https://wa.me/34692248625"
              size={70}
              level="M"
              fgColor="#FFFFFF"
              bgColor="transparent"
            />
          </div>
          <div className="text-white text-[10px] font-light tracking-widest uppercase drop-shadow-md text-center opacity-90">
            Contacta por Whatsapp!
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
