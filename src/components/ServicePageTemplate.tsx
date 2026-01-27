
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Microscope } from "lucide-react";
import { ServiceData } from "../data/services";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import heroImage from "../assets/hero-image.png"; // Fallback/Default

interface Props {
    data: ServiceData;
}

const ServicePageTemplate = ({ data }: Props) => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-bg relative overflow-hidden">
                <div className="container mx-auto px-4 grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-center relative z-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full text-brand-primary text-sm font-medium border border-brand-light">
                            <data.icon className="w-4 h-4" />
                            <span>Tratamiento Especializado</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-montserrat">
                            {data.title}
                        </h1>
                        <p className="text-xl text-gray-600 font-medium">
                            {data.subtitle}
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button
                                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                                className="h-12 px-8 bg-brand-primary hover:bg-brand-dark text-white rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                Pedir Diagnóstico Gratis
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand-secondary/20 rounded-full blur-3xl"></div>
                        {/* Note: In a real app we'd use data.imagePrompt to generate or load specific images */}
                        <div className="bg-white p-2 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-1000 animate-in fade-in slide-in-from-bottom-8">
                            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center text-gray-400">
                                <img src={data.image} className="w-full h-full object-cover opacity-90" alt={data.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description & Tech Specs */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 font-montserrat">¿En qué consiste?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {data.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mt-8">
                            {data.benefits.map((benefit, i) => (
                                <div key={i} className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Specs Card */}
                    <div className="bg-brand-darkest text-white p-8 rounded-3xl h-fit shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Microscope className="w-6 h-6 text-brand-light" />
                            <h3 className="text-xl font-bold">Ficha Técnica</h3>
                        </div>
                        <div className="space-y-6">
                            {data.techSpecs.map((spec, i) => (
                                <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                                    <p className="text-brand-light text-sm mb-1">{spec.label}</p>
                                    <p className="font-semibold text-lg">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps - Elite UX Redesign */}
            <section className="py-24 bg-gradient-to-b from-white to-brand-bg/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat">Tu tratamiento paso a paso</h2>
                        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">Transparencia total. Así es como recuperaremos tu sonrisa.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-items-center">
                        {/* Left: Videogram / Visual */}
                        <div className="relative sticky top-32 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer aspect-video lg:aspect-[4/3] w-full max-w-xl">
                            <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/0 transition-all duration-500 z-10 pointer-events-none"></div>
                            <video
                                src="/Endodoncia%20Videograma%20Mi%20Dentista%20.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-700"
                            />

                            {/* Caption */}
                            <div className="absolute bottom-5 right-5 z-20 pointer-events-none">
                                <p className="text-white/80 font-light text-sm flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                                    Videograma del Proceso
                                </p>
                            </div>
                        </div>

                        {/* Right: Vertical Timeline */}
                        <div className="relative space-y-12 pl-4 lg:pl-0 w-full max-w-lg">
                            {/* Vertical Line Line */}
                            <div className="absolute left-[27px] lg:left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-primary/20 via-brand-primary/50 to-brand-primary/20 -z-0"></div>

                            {data.process.map((step, i) => (
                                <div key={i} className="relative flex gap-8 group">
                                    {/* Number Circle */}
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-brand-primary text-brand-primary font-bold text-xl shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 relative z-10">
                                            {i + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2 pb-6 border-b border-gray-100 last:border-0 w-full group-hover:translate-x-2 transition-transform duration-300">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div >
    );
};

export default ServicePageTemplate;
