import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { SEO } from "../components/SEO";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Ear, Smile } from "lucide-react";
import dentalPattern from "../assets/dental-pattern.png";

const FobiaDental = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const schema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Superar la Fobia Dental | Mi Dentista Barcelona",
        "description": "En Mi Dentista Barcelona somos especialistas en pacientes con miedo o fobia dental. Tratamientos con sedación consciente y sin dolor.",
        "about": {
            "@type": "Thing",
            "name": "Dental Phobia"
        }
    });

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Superar la Fobia al Dentista en Barcelona | Sin Odontofobia"
                description="Entendemos tu miedo al dentista. Ofrecemos técnicas de relajación, sedación consciente y un entorno seguro para pacientes con fobia dental o ansiedad."
                path="/fobia-dental"
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-bg relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none"
                    style={{ backgroundImage: `url(${dentalPattern})`, backgroundRepeat: 'repeat', backgroundSize: '300px' }}
                />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full text-brand-primary text-sm font-semibold border border-brand-light/30 mb-6 shadow-sm">
                        <Heart className="w-4 h-4 fill-brand-primary text-brand-primary" />
                        <span>Especialistas en Odontofobia</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat leading-tight mb-6">
                        No dejes que el miedo decida sobre tu <span className="text-brand-primary">salud dental</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light mb-8">
                        La ansiedad ante el dentista es muy común. En Mi Dentista, creamos un entorno libre de prejuicios donde el control lo tienes tú, con opciones de sedación para un tratamiento sin dolor ni estrés.
                    </p>
                    <Button
                        onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#8C3573] hover:bg-[#722a5d] text-white px-8 h-14 rounded-full text-lg font-bold shadow-lg transition-transform hover:-translate-y-1"
                    >
                        Hablemos de tu caso gratis
                    </Button>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 text-center md:text-left">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-montserrat mb-6">Te entendemos, y no te juzgamos</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Sabemos que para muchas personas, simplemente llamar para pedir cita supone un esfuerzo titánico. Las malas experiencias previas, el miedo al dolor o la vergüenza por el estado de los dientes paralizan a miles de pacientes.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Nuestra prioridad en tu primera visita <strong>no es mirar tus dientes</strong>, es conocerte y escuchar qué necesitas para sentirte seguro.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <Activity className="w-8 h-8 text-brand-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Sedación Consciente</h3>
                            <p className="text-sm text-gray-500">Un anestesista regula tu nivel de relajación. Estás despierto pero totalmente tranquilo y sin noción del tiempo.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <Ear className="w-8 h-8 text-brand-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Control en todo momento</h3>
                            <p className="text-sm text-gray-500">Acordamos una señal. Si levantas la mano, paramos. Sin preguntas. Tú diriges el ritmo.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <Heart className="w-8 h-8 text-brand-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Anestesia sin dolor</h3>
                            <p className="text-sm text-gray-500">Utilizamos técnicas de anestesia de última generación prácticamente indoloras.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <Smile className="w-8 h-8 text-brand-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Ambiente de calma</h3>
                            <p className="text-sm text-gray-500">Luz reducida, música relajante y un equipo humano entrenado en el manejo de pacientes con miedo.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default FobiaDental;
