import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showConfig, setShowConfig] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookie-consent', 'all');
        setIsVisible(false);
        // Optionally trigger a reload or dispatch event so analytics loads
    };

    const handleRejectAll = () => {
        localStorage.setItem('cookie-consent', 'essential');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 200, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-24 md:pb-6 pointer-events-none"
                >
                    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border border-gray-100 p-6 md:p-8 pointer-events-auto flex flex-col lg:flex-row gap-6 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <ShieldAlert className="w-6 h-6 text-brand-primary" />
                                <h3 className="font-bold text-gray-900 text-lg md:text-xl font-montserrat">Tu privacidad es importante</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed pr-0 md:pr-10">
                                Utilizamos cookies propias y de terceros para fines analíticos (conocer tus preferencias y mejorar nuestro servicio) y para mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación.
                            </p>
                            {showConfig && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                                    <div className="flex justify-between items-center py-2"><span className="font-bold">Cookies Técnicas (Obligatorias)</span> <span className="text-green-600 font-bold">Activas</span></div>
                                    <div className="flex justify-between items-center py-2"><span>Cookies Analíticas</span> <span className="text-gray-400">Opcionales</span></div>
                                    <div className="flex justify-between items-center py-2"><span>Cookies Publicitarias</span> <span className="text-gray-400">Opcionales</span></div>
                                </motion.div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 mt-2 lg:mt-0">
                            <Button variant="outline" onClick={handleRejectAll} className="h-12 rounded-xl text-gray-600 border-gray-200 hover:bg-gray-50 flex-1 sm:flex-none font-semibold">
                                Rechazar
                            </Button>
                            <Button variant="secondary" onClick={() => setShowConfig(!showConfig)} className="h-12 rounded-xl bg-brand-light/10 text-brand-dark hover:bg-brand-light/30 flex-1 sm:flex-none font-semibold border border-transparent hover:border-brand-light/40">
                                Configurar
                            </Button>
                            <Button onClick={handleAcceptAll} className="h-12 rounded-xl bg-brand-primary hover:bg-[#8C3573] text-white flex-1 sm:flex-none px-8 font-bold shadow-lg hover:shadow-xl transition-all">
                                Aceptar Todas
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
