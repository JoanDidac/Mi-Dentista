import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, MapPin, Phone, Check } from "lucide-react";
import { submitFormToSheet } from "../utils/googleSheets";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "Revisión General (Gratis)",
        privacy: true
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Ensure phone number has +34 prefix for E.164 compliance
        const formattedPhone = formData.phone.startsWith('+') ? formData.phone : `+34${formData.phone}`;

        const payload = {
            name: formData.name,
            phone: formattedPhone,
            email: "Not provided", // Contact.tsx doesn't have email field in UI currently
            treatment: formData.service,
            privacy: true
        };

        const success = await submitFormToSheet(payload);

        if (success) {
            toast.success("¡Solicitud enviada!", {
                description: "Te contactaremos en breve.",
                duration: 5000,
                className: "bg-white text-brand-primary border-brand-primary/20",
                icon: <Check className="text-[#84cc16] w-5 h-5" />,
            });
            setFormData(prev => ({ ...prev, name: "", phone: "" }));
        } else {
            toast.error("Error al enviar", {
                description: "Inténtalo de nuevo más tarde.",
            });
        }
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };
    return (
        <section id="contacto" className="py-20 bg-brand-bg/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat">
                            ¿Listo para sonreír sin preocupaciones?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Reserva hoy tu <span className="font-bold text-brand-primary">primera visita gratuita</span>. Te escuchamos, te diagnosticamos y te explicamos todo sin compromiso.
                        </p>

                        <div className="grid gap-6 mt-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">WhatsApp Directo</h4>
                                    <p className="text-gray-500 text-sm mb-2">Respuesta rápida y cercana.</p>
                                    <Button variant="link" className="text-green-600 p-0 h-auto font-bold hover:no-underline">
                                        Chatear ahora →
                                    </Button>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-light/30 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-brand-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Poble Sec, Barcelona</h4>
                                    <p className="text-gray-500 text-sm">Carrer de Blai, 45</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Solicitar Cita</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                                        placeholder="600 000 000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium text-gray-700">Tratamiento de interés</label>
                                <select
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all bg-white"
                                >
                                    <option value="Revisión General (Gratis)">Revisión General (Gratis)</option>
                                    <option value="Odontopediatría (Niños)">Odontopediatría (Niños)</option>
                                    <option value="Ortodoncia">Ortodoncia</option>
                                    <option value="Implantes">Implantes</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 bg-brand-primary hover:bg-brand-dark text-white rounded-xl text-md font-bold shadow-lg shadow-brand-primary/20 hover:shadow-xl transition-all"
                            >
                                {isSubmitting ? "Enviando..." : "Reserva Ahora"}
                            </Button>
                            <p className="text-xs text-center text-gray-400">
                                Al enviar aceptas nuestra política de privacidad.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
