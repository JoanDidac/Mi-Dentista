import { useEffect, useRef, useState } from "react";
import founderImage from "../assets/founder_new.jpg";

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
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left Side - Image with Animated Background */}
                    <div className="relative order-2 md:order-1">
                        <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
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

                            {/* Image Container with Cutout Effect */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                {/* Main Portrait Image */}
                                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                    <img
                                        src={founderImage}
                                        alt="Fundadora de Mi Dentista"
                                        className="w-full h-full object-cover object-center"
                                        style={{
                                            objectPosition: 'center 20%',
                                            mixBlendMode: 'normal',
                                            filter: 'contrast(1.1) brightness(1.05)',
                                        }}
                                    />
                                    {/* Vignette overlay to help blend edges */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="order-1 md:order-2">
                        <div className="max-w-xl">
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
            </div>
        </section>
    );
};

export default LegacySection;
