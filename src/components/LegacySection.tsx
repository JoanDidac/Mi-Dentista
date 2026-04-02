import { useEffect, useRef, useState } from "react";
import founderImage from "../assets/founder_new.jpg";
import teamImage from "../assets/equipo-team.jpg";
import fatiSmileImage from "../assets/fati-smile.jpg";
import fati3Image from "../assets/fati-3.jpg";
import angelesFatiLogo from "../assets/angeles-fati-logo.png";
import equipo1Image from "../assets/equipo-1.jpg";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const AutoCarousel = ({ images, objectPosition }: { images: string[], objectPosition: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000); // 6 seconds for soothing, slow transition
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="absolute inset-0 overflow-hidden rounded-3xl bg-[#C4A0B8]/10">
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Carrusel"
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                        objectPosition,
                        mixBlendMode: 'normal',
                        filter: 'contrast(1.05) brightness(1.05)',
                    }}
                />
            </AnimatePresence>
            {/* Vignette overlay to help blend edges */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)',
                }}
            />
        </div>
    );
};

const LegacySection = () => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const sectionTop = rect.top;
                const windowHeight = window.innerHeight;

                // Calculate scroll offset relative to section visibility
                const offset = windowHeight - sectionTop;
                setScrollY(offset);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="historia"
            className="py-20 md:py-32 bg-gradient-to-br from-[#f6e9ff] to-white overflow-hidden relative"
        >
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left Side - Image with Animated Background */}
                    <div className="relative order-2 md:order-1">
                        <div className="relative w-full aspect-[3/4] max-w-md mx-auto md:ml-auto md:mr-0">
                            {/* Animated Background Shapes */}
                            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                {/* Base gradient background */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-[#C4A0B8]/80 to-[#8C3573]/90 rounded-3xl"
                                    style={{
                                        transform: `translateY(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0001})`,
                                        transition: "transform 0.05s ease-out"
                                    }}
                                />

                                {/* Animated Shape 1 - Circle */}
                                <div
                                    className="absolute w-32 h-32 bg-[#AD5E99]/30 rounded-full blur-2xl"
                                    style={{
                                        top: "10%",
                                        right: "10%",
                                        transform: `translate(${scrollY * 0.06}px, ${scrollY * 0.04}px) rotate(${scrollY * 0.15}deg)`,
                                        transition: "transform 0.05s ease-out"
                                    }}
                                />

                                {/* Animated Shape 2 - Circle */}
                                <div
                                    className="absolute w-40 h-40 bg-[#C4A0B8]/40 rounded-full blur-3xl"
                                    style={{
                                        bottom: "20%",
                                        left: "5%",
                                        transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.07}px) scale(${1 + scrollY * 0.0003})`,
                                        transition: "transform 0.05s ease-out"
                                    }}
                                />

                                {/* Animated Shape 3 - Organic blob */}
                                <div
                                    className="absolute w-48 h-48 bg-[#691844]/20 rounded-full blur-3xl"
                                    style={{
                                        top: "40%",
                                        left: "50%",
                                        transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0004}) rotate(${scrollY * 0.2}deg)`,
                                        transition: "transform 0.05s ease-out"
                                    }}
                                />

                                {/* Animated Shape 4 - Small accent */}
                                <div
                                    className="absolute w-24 h-24 bg-white/20 rounded-full blur-xl"
                                    style={{
                                        top: "70%",
                                        right: "20%",
                                        transform: `translate(${scrollY * 0.04}px, ${scrollY * -0.06}px) rotate(${scrollY * -0.1}deg)`,
                                        transition: "transform 0.05s ease-out"
                                    }}
                                />

                                {/* Additional Shape 5 - New dynamic element */}
                                <div
                                    className="absolute w-36 h-36 bg-[#AD5E99]/25 rounded-full blur-2xl"
                                    style={{
                                        top: "25%",
                                        left: "15%",
                                        transform: `translate(${scrollY * -0.04}px, ${scrollY * 0.05}px) scale(${1 + scrollY * 0.0002})`,
                                        transition: "transform 0.05s ease-out"
                                    }}
                                />
                            </div>

                            {/* Image Container with Carousel */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <AutoCarousel
                                    images={[founderImage, fatiSmileImage, fati3Image]}
                                    objectPosition="center 20%"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="order-1 md:order-2">
                        <div className="max-w-xl mx-auto md:mr-auto md:ml-0">
                            <span className="text-[#8C3573] font-semibold tracking-wide uppercase text-sm">
                                Nuestra Historia
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6 font-montserrat leading-tight">
                                Dos generaciones de excelencia dental
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    <strong className="text-[#691844]">Mi Dentista</strong> es más que una clínica dental, es un legado de confianza, experiencia y dedicación que abarca dos generaciones y más de 20 años de experiencia profesional.
                                </p>

                                <p>
                                    Fundada en 2006 por el <strong>Dr Ghazi Al Daifi</strong>, nuestra clínica se construyó sobre pilares sólidos: profesionalismo impecable, atención personalizada y un compromiso inquebrantable con la salud bucodental de cada paciente.
                                </p>

                                <p>
                                    Hoy, su hija, la <strong>Dra. Fatima Al Daifi</strong>, continúa ese legado con la misma pasión y dedicación. Habiendo aprendido no solo las técnicas más avanzadas de odontología moderna, sino también los valores de cercanía, escucha activa y cuidado humano que su padre le transmitió, la Dra. Fatima ha llevado la clínica a nuevos niveles de excelencia.
                                </p>

                                <p>
                                    <strong className="text-[#8C3573]">La confianza que las familias depositaron en nosotros durante décadas</strong> es nuestro mayor orgullo. Y con cada tratamiento, cada sonrisa restaurada, seguimos honrando ese compromiso generacional de cuidar de ti y los tuyos con la máxima profesionalidad y calidez humana.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#AD5E99]/20">
                                <p className="text-sm text-gray-600 italic">
                                    "De padre a hija, nuestra misión sigue siendo la misma: brindarte una experiencia dental excepcional en un ambiente de confianza y calidez familiar."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section Extension */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-24 md:mt-32">
                    {/* Left Side - Content (Now on the left) */}
                    <div className="order-2 md:order-1">
                        <div className="max-w-xl mx-auto md:ml-auto md:mr-0">
                            <span className="text-[#8C3573] font-semibold tracking-wide uppercase text-sm">
                                Nuestro Equipo
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6 font-montserrat leading-tight">
                                Tu sonrisa en manos extraordinarias
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    En la consulta encontrarás a la <strong>Dra. Fatima Al Daifi</strong>, especialista en cirugía y tratamientos complejos, liderando el equipo para asegurar que tu diagnóstico sea preciso y ejecutar los tratamientos con absoluta maestría.
                                </p>

                                <p>
                                    Junto a ella están <strong>Ahlam</strong> y <strong>Melany</strong>. Ahlam es nuestra aliada del detalle, transformando sonrisas de la forma más cercana y amena. Melany tiene por especialidad la dulzura, logrando que tanto los más pequeños como los pacientes más nerviosos se sientan valientes y 100% seguros en el sillón dental.
                                </p>

                                <p>
                                    Juntas, formamos un equipo sincronizado y altamente resolutivo. Nuestro mayor orgullo no es solo la calidad técnica, sino construir una calidez tan familiar que <strong className="text-[#8C3573]">ir al dentista se convierta en una experiencia que quieras repetir.</strong>
                                </p>
                            </div>

                            <div className="mt-10">
                                <Button
                                    className="h-14 px-8 bg-brand-primary border border-brand-primary/60 hover:bg-[#8C3573] hover:shadow-[0_8px_25px_-5px_#AD5E99] text-white rounded-full text-lg font-semibold shadow-xl transition-all hover:-translate-y-1"
                                    onClick={() => {
                                        const el = document.getElementById('contact');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Reserva Tu Cita De Valoración
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image with Animated Background */}
                    <div className="relative order-1 md:order-2">
                        <div className="relative w-full aspect-[3/4] max-w-md mx-auto md:mr-auto md:ml-0">
                            {/* Animated Background Shapes (Flipped to visually balance the page) */}
                            <div className="absolute inset-0 overflow-hidden rounded-3xl" style={{ transform: 'scaleX(-1)' }}>
                                <div
                                    className="absolute inset-0 bg-gradient-to-bl from-[#C4A0B8]/80 to-[#8C3573]/90 rounded-3xl"
                                    style={{
                                        transform: `translateY(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0001})`,
                                        transition: "transform 0.05s ease-out"
                                    }}
                                />
                                <div
                                    className="absolute w-32 h-32 bg-[#AD5E99]/30 rounded-full blur-2xl"
                                    style={{
                                        top: "10%", right: "10%",
                                        transform: `translate(${scrollY * 0.06}px, ${scrollY * 0.04}px) rotate(${scrollY * 0.15}deg)`
                                    }}
                                />
                                <div
                                    className="absolute w-40 h-40 bg-[#C4A0B8]/40 rounded-full blur-3xl"
                                    style={{
                                        bottom: "20%", left: "5%",
                                        transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.07}px) scale(${1 + scrollY * 0.0003})`
                                    }}
                                />
                                <div
                                    className="absolute w-48 h-48 bg-[#691844]/20 rounded-full blur-3xl"
                                    style={{
                                        top: "40%", left: "50%",
                                        transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0004}) rotate(${scrollY * 0.2}deg)`
                                    }}
                                />
                                <div
                                    className="absolute w-36 h-36 bg-[#AD5E99]/25 rounded-full blur-2xl"
                                    style={{
                                        top: "25%", left: "15%",
                                        transform: `translate(${scrollY * -0.04}px, ${scrollY * 0.05}px) scale(${1 + scrollY * 0.0002})`
                                    }}
                                />
                            </div>

                            {/* Image Container with Carousel */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <AutoCarousel
                                    images={[teamImage, angelesFatiLogo, equipo1Image]}
                                    objectPosition="center 30%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegacySection;
