import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { blogPosts } from "../data/blog";
import { ArrowRight, BookOpen, MessageCircleQuestion } from "lucide-react";
import dentalPattern from "../assets/dental-pattern.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Blog = () => {
    useEffect(() => {
        document.title = "Blog de Odontología y Casos Clínicos en Barcelona | Mi Dentista";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Descubre consejos de salud dental, precios de implantes y guías para solucionar dolores de muelas. Información verificada por expertos odontólogos en Barcelona.");
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-bg relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none"
                    style={{
                        backgroundImage: `url(${dentalPattern})`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '300px'
                    }}
                />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full text-brand-primary text-sm font-semibold border border-brand-light/30 mb-6 shadow-sm">
                        <BookOpen className="w-4 h-4" />
                        <span>Educación y Transparencia Médica</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-montserrat leading-tight mb-4">
                        Conocimiento Clínico para un <span className="text-brand-primary">Diagnóstico Claro</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                        Artículos educativos, casos reales y respuestas directas de nuestro equipo de especialistas en odontología para resolver tus urgencias y dudas médicas.
                    </p>
                </div>
            </section>

            {/* Sub-navigation / Filter Bar placeholder */}
            <div className="border-y border-gray-100 bg-white sticky top-20 z-40 shadow-sm hidden md:block">
                <div className="container mx-auto px-4 py-3 flex gap-6 text-sm font-medium text-gray-600">
                    <span className="text-brand-primary border-b-2 border-brand-primary pb-1">Todos los Artículos</span>
                    <span className="hover:text-brand-primary cursor-pointer pb-1 transition-colors">Problemas y Síntomas</span>
                    <span className="hover:text-brand-primary cursor-pointer pb-1 transition-colors">Odontología Avanzada</span>
                </div>
            </div>

            {/* Blog Grid */}
            <section className="py-16 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                to={`/blog/${post.slug}`}
                                key={post.slug}
                                className="group bg-white rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-xl hover:border-brand-light/40 transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1"
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 saturate-100"
                                    />
                                    <div className="absolute top-4 left-4 bg-brand-primary/90 text-white backdrop-blur-sm px-3 py-1 text-xs font-semibold rounded-full shadow-md uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <p className="text-xs text-gray-400 mb-3 font-medium tracking-wide">
                                        {post.date} · {post.readTime} de lectura
                                    </p>
                                    <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-brand-primary font-semibold text-sm group-hover:gap-2 transition-all">
                                        Leer Artículo Completo <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* MEGA FAQ - SEO Voice Search IA OVERVIEWS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-bg rounded-full mb-4 text-brand-primary">
                            <MessageCircleQuestion className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat">Respuestas Rápidas Médicas</h2>
                        <p className="text-gray-600 mt-4 text-lg">Resolvemos las dudas más frecuentes de nuestros pacientes de la manera más directa.</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:border-brand-light/50 transition-colors">
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left py-5 text-gray-800">
                                ¿Cuándo ir al dentista de urgencia?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                ¡No esperes a que sea insoportable! Debes acudir a nuestra clínica dental si experimentas dolor agudo, hinchazón facial de aparición rápida, pérdida de un diente por traumatismo, sangrado abundante continuo o dolor al masticar que te imposibilita dormir. Atajamos infecciones antes de que pasen al hueso.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:border-brand-light/50 transition-colors">
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left py-5 text-gray-800">
                                ¿Cuánto dura un implante dental?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                En condiciones óptimas, un implante dental de titanio o zirconio se considera una solución permanente. La raíz del implante puede durar toda la vida con la higiene correcta, mientras que la corona visible (el nuevo "diente") puede requerir sustitución tras 15-20 años dependiendo del nivel de desgaste o bruxismo.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:border-brand-light/50 transition-colors">
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left py-5 text-gray-800">
                                ¿Duele ponerse implantes dentales?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                Rotundamente no. Colocar implantes sin dolor es nuestra prioridad absoluta. Utilizamos anestesia local de rigor y técnicas precisas de cirugía guiada (sin levantar la encía masivamente). El postoperatorio tradicional es equivalente a la extracción de una muela del juicio simple: se maneja perfectamente con analgésicos genéricos.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:border-brand-light/50 transition-colors">
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left py-5 text-gray-800">
                                ¿Cuánto cuesta arreglar una muela?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                Depende totalmente de la gravedad de la lesión. Un empaste dental sencillo suele ser muy económico, mientras que una reconstrucción compleja o endodoncia tiene un precio mayor al requerir tratamiento de los conductos. La única forma honesta de cotizar es mediante nuestra primera visita gratuita dentista con diagnóstico digital y presupuesto cerrado, incluidas opciones de pago.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:border-brand-light/50 transition-colors">
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left py-5 text-gray-800">
                                ¿Cómo mejorar la sonrisa drásticamente?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                El diseño de sonrisa que ofrecemos pasa por una evaluación digital holística. Para mejorarla significativamente recurrimos a tres pilares fundamentales que evitan cirugías: el blanqueamiento dental para potenciar la luminosidad inmediata, ortodoncia invisible (alineadores transparentes) para alinear las piezas y corregir asimetrías, y las carillas de porcelana o composite para reconfigurar la forma anatómica ideal de las piezas erosionadas o pequeñas.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6" className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:border-brand-light/50 transition-colors">
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left py-5 text-gray-800">
                                ¿Cada cuánto debo limpiar los dientes profesionalmente?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                Lo estándar médicamente es una vez al año (limpieza dental profesional). Sin embargo, si tienes predisposición a la enfermedad periodontal o antecedentes de encías que sangran, recomendamos una pauta de mantenimiento en nuestra clínica cada 6 u 8 meses para romper el ciclo bacteriano incipiente que a menudo no puede ser detectado sin aparatología óptica en casa.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default Blog;
