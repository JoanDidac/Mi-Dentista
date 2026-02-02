import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MouseEvent } from "react";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import odontopediatriaImage from "../assets/odontopediatria.png";
import ortodonciaInvisibleImage from "../assets/orthodoncia-invisible.png";
import esteticaDentalImage from "../assets/estetica-dental-soft.png";

interface TreatmentCard {
    slug: string;
    title: string;
    description: string;
    gradient: string;
    image?: string;
    imageClass?: string;
}

const TreatmentsSection = () => {
    const navigate = useNavigate();

    const featuredTreatments: TreatmentCard[] = [
        {
            slug: "odontopediatria-barcelona",
            title: "Odontopediatría",
            description: "Cuidado dental especializado para los más pequeños en un ambiente divertido y seguro.",
            gradient: "linear-gradient(135deg, rgba(140, 53, 115, 0.92) 0%, rgba(101, 21, 61, 0.95) 100%)",
            image: odontopediatriaImage,
            imageClass: "scale-125 object-center group-hover:scale-135",
        },
        {
            slug: "ortodoncia-invisible-barcelona",
            title: "Ortodoncia invisible",
            description: "Alinea tus dientes y consigue tu sonrisa soñada de forma discreta.",
            gradient: "linear-gradient(135deg, rgba(173, 94, 153, 0.92) 0%, rgba(140, 53, 115, 0.95) 100%)",
            image: ortodonciaInvisibleImage,
        },
        {
            slug: "implantes-dentales-barcelona",
            title: "Estética dental",
            description: "Dientes perfectos, más blancos y totalmente personalizados.",
            gradient: "linear-gradient(135deg, rgba(101, 21, 61, 0.85) 0%, rgba(140, 53, 115, 0.9) 100%)",
            image: esteticaDentalImage,
        },
    ];

    const handleCardClick = (slug: string) => {
        navigate(`/tratamientos/${slug}`);
    };

    return (
        <section id="tratamientos" className="w-full bg-gradient-to-b from-white via-brand-bg/30 to-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <p className="text-brand-primary font-semibold tracking-wide uppercase text-sm mb-3">
                        Somos expertos en implantología oral avanzada en Barcelona
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-darker mb-6 font-montserrat">
                        Tratamientos dentales personalizados
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        En Mi Dentista, tu salud bucodental es nuestra prioridad. Somos expertos en cirugía oral avanzada
                        y trabajamos para ofrecerte soluciones definitivas y efectivas. Nuestro equipo de odontólogos experimentados
                        analizarán tu caso para ofrecerte el tratamiento que mejor se adapte a tus necesidades presentes y futuras.
                    </p>
                </div>

                {/* Treatment Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featuredTreatments.map((treatment, index) => (
                        <TreatmentCard3D
                            key={treatment.slug}
                            treatment={treatment}
                            index={index}
                            onClick={() => handleCardClick(treatment.slug)}
                        />
                    ))}
                </div>

                {/* Optional CTA below cards */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 text-sm">
                        ¿Necesitas ayuda para elegir el mejor tratamiento?{" "}
                        <a href="#contact" className="text-brand-primary font-semibold hover:underline">
                            Solicita tu consulta gratuita
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

const TreatmentCard3D = ({
    treatment,
    index,
    onClick
}: {
    treatment: TreatmentCard;
    index: number;
    onClick: () => void;
}) => {
    // Motion values for mouse position relative to card center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring configuration for smooth "heavy" feel (damping absorbs jitter)
    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };

    // Derived rotations with spring physics
    const rotateX = useSpring(useTransform(y, [-200, 200], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(x, [-200, 200], [-10, 10]), springConfig);

    // Additional parallax/transform values
    // Scale up slightly on hover (driven by hover state mostly, but we can spring it too if needed)
    // For now, keeping scale on CSS hover is fine, but tilt is physics-based.

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate distance from center
        const mouseX = e.clientX - rect.left - centerX;
        const mouseY = e.clientY - rect.top - centerY;

        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="group relative h-[400px] w-full cursor-pointer perspective-[1000px] touch-none"
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000
            }}
        >
            {/* Rotatable 3D Container */}
            <motion.div
                className="relative w-full h-full transition-shadow duration-300 ease-out [transform-style:preserve-3d]"
                style={{
                    rotateX,
                    rotateY,
                }}
            >
                {/* Background Layer (Back Face) */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 [transform:translateZ(0px)]"
                >
                    {/* Background Image */}
                    {treatment.image && (
                        <div className="absolute inset-0">
                            <img
                                src={treatment.image}
                                alt={treatment.title}
                                className={`w-full h-full object-cover transition-transform duration-700 ${treatment.imageClass || "scale-110 object-center group-hover:scale-125"}`}
                            />
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 group-hover:brightness-110 ${treatment.image ? 'mix-blend-multiply opacity-90' : ''}`}
                        style={{
                            background: treatment.gradient,
                        }}
                    >
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,_rgba(255,255,255,0.3),transparent_50%)]"></div>
                    </div>

                    {/* Hover light effect on background */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 pointer-events-none"></div>
                </div>

                {/* Content Layer (Front Face) - Floating "Cube" Face
                    translateZ(50px) pulls it closer to camera.
                */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center [transform:translateZ(60px)] pointer-events-none"
                >
                    <div className="transform transition-transform duration-300">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-montserrat drop-shadow-lg">
                            {treatment.title}
                        </h3>
                        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 drop-shadow-md">
                            {treatment.description}
                        </p>

                        {/* Arrow indicator */}
                        <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                            <span className="text-sm uppercase tracking-wide">Más información</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TreatmentsSection;
