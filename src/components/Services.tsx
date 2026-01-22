
import { Baby, Sparkles, Smile, HeartPulse } from "lucide-react";

const services = [
    {
        icon: Baby,
        title: "Odontopediatría",
        description: "Cuidado especializado para los más pequeños. Hacemos que su visita sea divertida y sin miedo.",
        color: "bg-brand-light/30 text-brand-primary"
    },
    {
        icon: Smile,
        title: "Ortodoncia Invisible",
        description: "Alinea tu sonrisa discretamente con la última tecnología en alineadores transparentes.",
        color: "bg-brand-light/20 text-brand-primary"
    },
    {
        icon: Sparkles,
        title: "Estética Dental",
        description: "Diseño de sonrisa, blanqueamientos y carillas para que luzcas tu mejor versión.",
        color: "bg-brand-light/30 text-brand-primary"
    },
    {
        icon: HeartPulse,
        title: "Implantes Sin Dolor",
        description: "Recupera tu sonrisa completa con técnicas mínimamente invasivas y recuperación rápida.",
        color: "bg-brand-light/20 text-brand-primary"
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-brand-primary font-semibold tracking-wide uppercase text-sm">Nuestros Tratamientos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 font-montserrat">
                        Todo lo que tu sonrisa necesita
                    </h2>
                    <p className="text-gray-600">
                        Desde la primera revisión de tu hijo hasta los tratamientos más complejos, en un ambiente relajado y profesional.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 bg-white"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
