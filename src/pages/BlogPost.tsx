import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Button } from "@/components/ui/button";
import { blogPosts } from "../data/blog";
import { ArrowLeft, Clock, CalendarDays, UserRound, ArrowRight } from "lucide-react";

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    useEffect(() => {
        if (post) {
            document.title = `${post.title} | Mi Dentista Barcelona`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute("content", post.excerpt);
            }
        }
        window.scrollTo(0, 0);
    }, [post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Post Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-brand-bg relative">
                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-dark mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Volver al índice educativo
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full text-brand-primary text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                        {post.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-montserrat leading-tight mb-6">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm font-medium">
                        <div className="flex items-center gap-2"><UserRound className="w-4 h-4" /> {post.author}</div>
                        <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /> {post.date}</div>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</div>
                    </div>
                </div>
            </section>

            {/* Post Content & Sidebar */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-[1fr_350px] gap-12 lg:gap-20 items-start">

                        {/* Main Article Content */}
                        <article className="prose prose-lg max-w-none prose-headings:font-montserrat prose-headings:text-gray-900 prose-a:text-brand-primary hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline prose-li:text-gray-700">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-auto aspect-video object-cover rounded-3xl mb-10 shadow-lg border border-gray-100"
                            />
                            {/* Dangerously inject the HTML content designed in the data layer */}
                            <div
                                className="text-gray-700 leading-relaxed space-y-6"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </article>

                        {/* Sticky Sidebar CTA */}
                        <aside className="sticky top-28 bg-white border border-gray-100 shadow-xl rounded-3xl p-8 flex flex-col gap-6">
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 font-montserrat mb-2">¿Tienes este problema?</h3>
                                <p className="text-sm text-gray-600 mb-6">No dejes que avance. Nuestro diagnóstico inicial 3D es gratuito y sin compromiso.</p>
                            </div>

                            <img
                                src={post.image}
                                alt="Urgencia Dental"
                                className="w-full h-32 object-cover rounded-2xl opacity-80"
                            />

                            <div className="space-y-4 mt-2">
                                <div className="p-4 bg-brand-bg rounded-xl border border-brand-light/30">
                                    <h4 className="text-sm font-bold text-brand-primary mb-1">✓ Primera visita gratuita</h4>
                                    <p className="text-xs text-gray-600">Incluye revisión clínica general y propuesta médica económica.</p>
                                </div>
                                <div className="p-4 bg-brand-bg rounded-xl border border-brand-light/30">
                                    <h4 className="text-sm font-bold text-brand-primary mb-1">✓ Facilidades de pago</h4>
                                    <p className="text-xs text-gray-600">Financiación hasta 36 meses sin intereses.</p>
                                </div>
                            </div>

                            <Button
                                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full mt-4 h-12 bg-brand-primary hover:bg-brand-dark text-white rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1"
                            >
                                Reservar Cita Ahora <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </aside>

                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default BlogPost;
