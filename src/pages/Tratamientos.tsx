import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Button } from "@/components/ui/button";
import { servicesData } from "../data/services";
import { ArrowRight, Sparkles, HeartPulse, Tag } from "lucide-react";
import dentalPattern from "../assets/dental-pattern.png";
import { SEO } from "../components/SEO";

const Tratamientos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Tratamientos Dentales en Barcelona | Especialistas Sin Dolor | Mi Dentista"
                description="Descubre nuestros tratamientos dentales en Barcelona. Desde odontopediatría hasta ortodoncia invisible e implantes. Ambiente familiar y máxima calidad."
                path="/tratamientos"
            />
            <Navbar />

            {/* Warm Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-bg relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none"
                    style={{
                        backgroundImage: `url(${dentalPattern})`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '300px'
                    }}
                />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full text-brand-primary text-sm font-semibold border border-brand-light/30 mb-6 shadow-sm">
                        <HeartPulse className="w-4 h-4" />
                        <span>Clínica Dental Familiar y Avanzada</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 font-montserrat leading-tight mb-6">
                        Nuestros Tratamientos: <span className="text-brand-primary">Ciencia, Arte y Calidez</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
                        Desde la primera ecografía de los dientes de tu pequeño hasta el diseño de la sonrisa de película que siempre soñaste. Todo en confianza y en un ambiente familiar que te acompaña a cada paso.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <Link
                                to={`/tratamientos/${service.slug}`}
                                key={index}
                                className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-brand-light/30 transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={`Tratamiento de ${service.title}`}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-md">
                                        <service.icon className="w-6 h-6 text-brand-primary" />
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-3 group-hover:text-brand-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-3 mb-6 flex-1">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-brand-primary font-semibold text-sm group-hover:gap-2 transition-all">
                                        Explorar Tratamiento <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Deals / Offers Space */}
            <section className="py-16 md:py-24 bg-brand-darkest text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-light via-brand-dark to-brand-darkest pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:px-12">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-light text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                            <Tag className="w-3 h-3" />
                            Promociones y Facilidades
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                            Empezar es fácil y sin compromiso
                        </h2>
                        <p className="text-brand-light/90 text-lg leading-relaxed mb-8">
                            Nuestra filosofía es la transparencia total. Ven a conocernos y hablemos de lo que tu sonrisa necesita con una valoración médica gratuita, sin sorpresas ni presiones comerciales.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Sparkles className="w-5 h-5 text-brand-primary shrink-0" />
                                <span>Primera Visita y Diagnóstico 100% Gratis</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Sparkles className="w-5 h-5 text-brand-primary shrink-0" />
                                <span>Estudio de Financiación a Medida</span>
                            </div>
                        </div>
                        <Button
                            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-brand-primary hover:bg-[#8C3573] text-white rounded-full px-8 h-12 font-semibold shadow-lg transition-transform hover:-translate-y-1"
                        >
                            Reservar mi cita de valoración
                        </Button>
                    </div>
                </div>
            </section>

            <Contact />

            {/* SEO Semantic Keyword Cluster (Subtle Integration) */}
            <section className="bg-gray-50 py-12 border-t border-gray-100">
                <div className="container mx-auto px-4 text-center max-w-4xl opacity-70">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Tu Salud Bucodental Integral en Barcelona</h3>
                    <p className="text-xs text-gray-400 leading-loose text-justify font-normal">
                        En nuestra clínica dental en Poble Sec, nos dedicamos a ofrecer soluciones dentales integrales como tu dentista familiar de confianza. Nos especializamos en estética dental avanzada, incluyendo diseño de sonrisa personalizado y carillas estéticas, para ayudarte a conseguir tu mejor versión. ¿Tienes dolor? Ofrecemos atención para empastes urgentes y solucionamos patologías con rapidez. Además, preservamos la salud de tus encías mediante limpieza dental profesional y prevención continua. Nuestro equipo incluye un ortodoncista en Barcelona experto en sistemas invisibles, y un implantólogo dedicado a ofrecer implantes inmediatos de máxima calidad. Sabemos que el miedo al dentista es real, por eso contamos con opciones de sedación consciente, siendo el dentista pediátrico ideal para que los más pequeños asocien la salud oral a una experiencia positiva y sin dolor.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Tratamientos;
