
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />

      {/* Testimonials Section - keeping it simple for now as part of Index or could be a component */}
      <section id="testimonios" className="py-20 bg-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-primary font-semibold tracking-wide uppercase text-sm">Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 font-montserrat">
              Familias que confían en nosotros
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Llevé a mi hijo de 4 años y salió encantado. La doctora fue súper paciente y le explicó todo como un juego. ¡Repetiremos seguro!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center font-bold text-brand-primary">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">María González</h4>
                    <p className="text-xs text-gray-500">Madre de Leo (4 años)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
