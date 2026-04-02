import { ScanFace, Zap, ShieldCheck } from "lucide-react";

export const TechScannerBanner = () => {
    return (
        <section className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-brand-bg to-[#f6e9ff] rounded-3xl p-8 md:p-12 shadow-sm border border-brand-light/30 relative overflow-hidden">
                    {/* Background Tech aesthetic elements */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#AD5E99]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-[#691844]/5 rounded-full blur-2xl pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Icon / Badge */}
                        <div className="shrink-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl shadow-[#AD5E99]/20 border-2 border-brand-primary">
                            <ScanFace className="w-10 h-10 md:w-12 md:h-12 text-brand-primary" strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                                <Zap className="w-3 h-3" fill="currentColor" />
                                Novedad Tecnológica
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-montserrat mb-3">
                                Tecnología Escáner 3D Sin Molestias
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                                Para este tratamiento aplicamos el nuevo escáner intraoral <strong>Aoralscan 3 con Inteligencia Artificial</strong>. Olvídate para siempre de las agobiantes pastas de impresión. Tomamos medidas 100% digitales, higiénicas y ultra precisas de tu boca en menos de 60 segundos.
                            </p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mt-6">
                                <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <ShieldCheck className="w-5 h-5 text-[#8C3573]" /> Sin pastas molestas
                                </span>
                                <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <ShieldCheck className="w-5 h-5 text-[#8C3573]" /> Escaneo en 60 seg
                                </span>
                                <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <ShieldCheck className="w-5 h-5 text-[#8C3573]" /> Precisión con I.A.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
