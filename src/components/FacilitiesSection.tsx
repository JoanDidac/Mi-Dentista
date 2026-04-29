import { HeartHandshake, Stethoscope, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";

const JOURNEY_STEPS = [
    {
        id: 1,
        icon: HeartHandshake,
        title: "Recepción y Bienvenida",
        description: "Un entorno cálido y sin prisas.",
        accentColor: "text-brand-primary",
        bgColor: "bg-brand-primary/10",
        borderColor: "border-brand-primary/30",
    },
    {
        id: 2,
        icon: Stethoscope,
        title: "Examen Clínico Detallado",
        description: "Evaluación precisa escuchando tus necesidades.",
        accentColor: "text-brand-secondary",
        bgColor: "bg-brand-secondary/10",
        borderColor: "border-brand-secondary/30",
    },
    {
        id: 3,
        icon: MessageSquare,
        title: "Explicación del Plan",
        description: "Transparencia total, resolviendo todas tus dudas.",
        accentColor: "text-brand-primary",
        bgColor: "bg-brand-primary/10",
        borderColor: "border-brand-primary/30",
    },
    {
        id: 4,
        icon: ShieldCheck,
        title: "Realización del Tratamiento",
        description: "Cuidado empático, respetando tus tiempos y confort.",
        accentColor: "text-brand-secondary",
        bgColor: "bg-brand-secondary/10",
        borderColor: "border-brand-secondary/30",
    },
    {
        id: 5,
        icon: Sparkles,
        title: "Seguimiento y Sonrisa",
        description: "Acompañamiento continuo para tu bienestar.",
        accentColor: "text-brand-primary",
        bgColor: "bg-brand-primary/10",
        borderColor: "border-brand-primary/30",
    }
];

const FacilitiesSection = () => {
    const [bookingOpen, setBookingOpen] = useState(false);

    return (
        <section
            id="instalaciones"
            className="relative bg-white z-10 py-20 md:py-32 overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left Side - Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <span className="text-brand-primary font-semibold tracking-widest uppercase text-xs mb-4 block">
                            Instalaciones y Tecnología
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6 md:mb-8 font-montserrat leading-tight tracking-tight">
                            <span className="text-brand-primary">Descubre la</span> Odontología <br className="hidden md:block"/>
                            <span className="relative inline-block mt-2">
                                Respetuosa
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

                        <div className="mt-8 md:mt-12 text-center md:text-left">
                            <button
                                onClick={() => setBookingOpen(true)}
                                className="group relative overflow-hidden bg-brand-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full md:w-auto"
                            >
                                <span className="relative z-10">Visita la Clínica</span>
                                <div className="absolute inset-0 bg-brand-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Infographic */}
                    <div className="w-full lg:w-1/2 relative py-8 lg:py-0">
                        {/* Connecting Line background */}
                        <div className="absolute left-[39px] md:left-[49px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-brand-primary/20 via-brand-secondary/40 to-brand-primary/20 hidden md:block"></div>
                        <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand-primary/20 via-brand-secondary/40 to-brand-primary/20 md:hidden"></div>
                        
                        <div className="flex flex-col space-y-8 md:space-y-12 relative">
                            {JOURNEY_STEPS.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={step.id} className="group flex items-start gap-4 md:gap-8 relative">
                                        {/* Icon Container */}
                                        <div className={`relative z-10 flex-shrink-0 w-[56px] h-[56px] md:w-[100px] md:h-[100px] rounded-full bg-white border-2 md:border-4 ${step.borderColor} flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                                            <div className={`w-[48px] h-[48px] md:w-[84px] md:h-[84px] rounded-full ${step.bgColor} flex items-center justify-center transition-colors duration-500`}>
                                                <Icon className={`w-6 h-6 md:w-10 md:h-10 ${step.accentColor}`} strokeWidth={1.5} />
                                            </div>
                                            {/* Step Number Badge */}
                                            <div className={`absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-2 ${step.borderColor} flex items-center justify-center font-bold text-xs md:text-sm ${step.accentColor} shadow-sm`}>
                                                {step.id}
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex-1 pt-2 md:pt-6 bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:border-brand-primary/20 transition-colors duration-300 hover:shadow-md hover:-translate-y-1">
                                            <h3 className={`text-base md:text-xl font-bold mb-1 md:mb-2 font-montserrat ${step.accentColor}`}>
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 text-xs md:text-base font-light leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
            
            <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
        </section>
    );
};

export default FacilitiesSection;
