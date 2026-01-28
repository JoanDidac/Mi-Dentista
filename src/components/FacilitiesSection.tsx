import { useEffect, useRef, useState } from "react";
// Original images
import facility2 from "../assets/facilities/facility_2.png";
import facility3 from "../assets/facilities/facility_3.png";
import facility4 from "../assets/facilities/facility_4.png";
// New generated images
import facilityKid from "../assets/facilities/facility_mulato_kid.png";
import facilityReception from "../assets/facilities/facility_reception_logo.png";
import facilityKidsCorner from "../assets/facilities/facility_kids_corner.png";
import facilityDoctors from "../assets/facilities/facility_doctors_ortopantograma.png";

const IMAGES = [
    facilityReception,   // 4. New: Reception with logo (Moved to 1st)
    facility2,           // 2. Old 2nd
    facility3,           // 3. Old 3rd
    facilityKid,         // 1. New: Warm mulato kid (Moved to 4th)
    facility4,           // 5. Old 5th (was facility4 in imports?)
    facilityKidsCorner,  // 6. New: Kid's corner
    facilityDoctors,     // 7. New: Doctors
];

const FacilitiesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const totalScrollable = rect.height - windowHeight;
            const currentScroll = -rect.top;

            let p = currentScroll / totalScrollable;
            p = Math.max(0, Math.min(1, p));

            setProgress(p);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="instalaciones"
            className="relative bg-white z-10" // z-10 to avoid overlap from previous sections
            style={{ height: "400dvh" }}
        >
            <div className="sticky top-0 h-[100dvh] flex flex-col md:flex-row overflow-hidden bg-gray-100 md:bg-white">
                {/* Left Side - Text Content */}
                <div className="absolute top-0 left-0 w-full z-20 max-h-[55dvh] min-h-[55dvh] overflow-y-auto bg-white/95 backdrop-blur-md shadow-xl rounded-b-[2rem] px-6 py-8 md:static md:w-1/2 md:h-full md:bg-white md:shadow-none md:rounded-none md:overflow-hidden md:flex md:items-center md:justify-center md:px-12 md:py-0">
                    <div className="max-w-3xl">
                        <span className="text-brand-primary font-semibold tracking-widest uppercase text-xs mb-4 block">
                            Instalaciones y Tecnología
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6 md:mb-8 font-montserrat leading-tight tracking-tight">
                            <span className="text-brand-primary">Descubre</span> Nuestras <br />
                            <span className="relative inline-block mt-2">
                                Instalaciones
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-brand-secondary/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h2>

                        <div className="space-y-4 md:space-y-6 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                            <p>
                                En <strong className="text-brand-primary font-semibold">Mi Dentista</strong>, practicamos una <span className="text-brand-secondary font-medium italic">odontología empática y respetuosa</span>. Entendemos que la visita al dentista puede generar ansiedad, y por eso hemos diseñado cada detalle para transformar tu experiencia.
                            </p>

                            <p>
                                Nos especializamos en ayudar a pacientes con <strong className="text-gray-900 font-medium">fobia dental o malas experiencias previas</strong>. Aquí no encontrarás prisas ni juicios, solo un equipo humano que te acompañará de la mano durante todo el proceso, respetando tus tiempos y escuchando tus necesidades.
                            </p>

                            <p>
                                Nos tomamos el tiempo necesario para explicarte cada paso, asegurándonos de que tus opiniones y experiencias sean siempre parte fundamental de la ecuación de tu tratamiento. Tu <strong className="text-brand-primary font-semibold">serenidad</strong> y <strong className="text-brand-primary font-semibold">confianza</strong> son nuestra prioridad.
                            </p>
                        </div>

                        <div className="mt-8 md:mt-12">
                            <button
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="group relative overflow-hidden bg-brand-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <span className="relative z-10">Visita la Clínica</span>
                                <div className="absolute inset-0 bg-brand-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Animated Image Column */}
                <div className="w-full h-full md:w-1/2 relative overflow-hidden bg-gray-100">
                    <div
                        className="absolute inset-0 flex flex-col transition-transform duration-150 ease-out [--carousel-start:55dvh] md:[--carousel-start:12vh] [--carousel-travel:275dvh] md:[--carousel-travel:262vh]"
                        style={{
                            transform: `translateY(calc(var(--carousel-start) - (var(--carousel-travel) * ${progress})))`,
                        }}
                    >
                        {IMAGES.map((src, index) => (
                            <div
                                key={index}
                                className="w-full h-[45dvh] md:h-[50vh] flex-shrink-0 flex items-center justify-center p-4 md:px-8 md:py-[2.5vh]"
                            >
                                {/* 3:2 aspect ratio as requested, with max-h and max-w constraints */}
                                <div className="relative w-full aspect-[3/4] max-h-[42dvh] md:max-h-[40vh] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
                                    <img
                                        src={src}
                                        alt={`Facility ${index + 1}`}
                                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                        style={{
                                            objectPosition: index === 3 ? "center 35%" : "center center",
                                        }}
                                    />
                                    {/* Elegant overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Refined Progress Indicator */}
                    <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                        {IMAGES.map((_, index) => {
                            const isActive = Math.round(progress * (IMAGES.length - 1)) === index;
                            return (
                                <div
                                    key={index}
                                    className={`w-1 transition-all duration-500 rounded-full ${isActive ? "h-6 md:h-10 bg-brand-primary shadow-lg shadow-brand-primary/30" : "h-2 bg-gray-300/80 md:bg-gray-200"
                                        }`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
