
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { MessageCircle, MapPin, Clock, Check } from "lucide-react";
import { submitFormToSheet } from "../utils/googleSheets";
import { toast } from "sonner";
import QRCode from "react-qr-code";

const ContactLocationSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        treatment: "",
        reason: "",
        privacy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const success = await submitFormToSheet(formData);

        if (success) {
            toast.success("¡Solicitud recibida!", {
                description: "Nos pondremos en contacto contigo muy pronto.",
                duration: 5000,
                className: "bg-white text-brand-primary border-brand-primary/20",
                icon: <Check className="text-[#84cc16] w-5 h-5" />,
            });
            setFormData({
                name: "",
                phone: "",
                email: "",
                treatment: "",
                reason: "",
                privacy: false,
            });
        } else {
            toast.error("Error al enviar", {
                description: "Hubo un problema. Por favor, inténtalo de nuevo o llámanos.",
            });
        }
        setIsSubmitting(false);
    };

    const handleChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section id="contacto-footer" className="w-full bg-white py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Info Content */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-brand-dark leading-tight">
                                Contacta con nuestro <br />
                                equipo y vuelve a sonreír
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                                Puedes contactar con nuestro equipo rellenando el formulario,
                                llamando al <span className="font-bold text-brand-primary">93 441 36 64</span> o escribiendo
                                un mensaje de WhatsApp haciendo clic en el botón.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <a
                                    href="https://wa.me/34692248625"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Button className="bg-[#8C3573] hover:bg-[#722a5d] text-white px-8 h-14 rounded-xl flex items-center gap-3 font-bold uppercase tracking-wide group transition-all">
                                        CONTACTA POR WHATSAPP
                                        <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                                    </Button>
                                </a>

                                {/* QR Code for Desktop */}
                                <div className="hidden md:flex flex-col items-center gap-2 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                                    <div className="bg-white p-1 rounded-lg">
                                        <QRCode
                                            value="https://wa.me/34692248625"
                                            size={80}
                                            level="M"
                                            fgColor="#8C3573"
                                        />
                                    </div>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Escanea para chatear</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="space-y-3">
                                <h3 className="text-brand-primary font-bold text-lg flex items-center gap-2">
                                    Dirección
                                </h3>
                                <a
                                    href="#map-location"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('map-location')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
                                    className="text-gray-600 font-medium hover:text-brand-primary hover:scale-105 hover:uppercase transition-all duration-300 cursor-pointer block origin-left"
                                >
                                    C/Blai Nº 45 08004 Poble Sec, Barcelona
                                </a>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-brand-primary font-bold text-lg flex items-center gap-2">
                                    Horario
                                </h3>
                                <p className="text-gray-600 font-medium">
                                    Lunes a viernes de 10:00 a 14:00 y 16:00 a 20:00
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="bg-[#8C3573] p-8 md:p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                        {/* Subtle patterns/decorations if needed */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 pointer-events-none" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2 md:col-span-1">
                                    <label htmlFor="name-cl" className="text-white font-medium text-sm">
                                        Nombre completo <span className="text-red-400">*</span>
                                    </label>
                                    <Input
                                        id="name-cl"
                                        required
                                        className="bg-white border-none h-12 text-black rounded-lg focus-visible:ring-2 focus-visible:ring-brand-secondary"
                                        value={formData.name}
                                        onChange={(e) => handleChange("name", e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-1">
                                    <label htmlFor="phone-cl" className="text-white font-medium text-sm">
                                        Teléfono <span className="text-red-400">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border-r border-gray-200 pr-2 mr-2 pointer-events-none">
                                            <span className="text-base">🇪🇸</span>
                                            <span className="text-[10px] text-gray-400">▼</span>
                                        </div>
                                        <Input
                                            id="phone-cl"
                                            required
                                            className="bg-white border-none h-12 pl-16 text-black rounded-lg focus-visible:ring-2 focus-visible:ring-brand-secondary"
                                            value={formData.phone}
                                            onChange={(e) => handleChange("phone", e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-1">
                                    <label htmlFor="email-cl" className="text-white font-medium text-sm">
                                        Correo <span className="text-red-400">*</span>
                                    </label>
                                    <Input
                                        id="email-cl"
                                        type="email"
                                        required
                                        className="bg-white border-none h-12 text-black rounded-lg focus-visible:ring-2 focus-visible:ring-brand-secondary"
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-white font-medium text-sm">
                                        ¿En qué tratamiento estás interesado/a?
                                    </label>
                                    <Select
                                        onValueChange={(val) => handleChange("treatment", val)}
                                    >
                                        <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 rounded-lg hover:bg-white/20 transition-colors uppercase text-xs font-bold">
                                            <SelectValue placeholder="SELECCIONAR" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="implantes">IMPLANTES DENTALES</SelectItem>
                                            <SelectItem value="ortodoncia">ORTODONCIA INVISIBLE</SelectItem>
                                            <SelectItem value="estetica">ESTÉTICA DENTAL</SelectItem>
                                            <SelectItem value="odontopediatria">ODONTOPEDIATRÍA</SelectItem>
                                            <SelectItem value="endodoncia">ENDODONCIA</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="reason-cl" className="text-white font-medium text-sm">
                                        ¿Cuál es el motivo de tu consulta?
                                    </label>
                                    <Input
                                        id="reason-cl"
                                        className="bg-white border-none h-12 text-black rounded-lg focus-visible:ring-2 focus-visible:ring-brand-secondary"
                                        value={formData.reason}
                                        onChange={(e) => handleChange("reason", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 pt-2">
                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        id="privacy-cl"
                                        className="mt-1 bg-white border-none text-brand-primary"
                                        checked={formData.privacy}
                                        onCheckedChange={(checked) => handleChange("privacy", checked === true)}
                                    />
                                    <label htmlFor="privacy-cl" className="text-[11px] text-white/90 leading-tight">
                                        <span className="font-bold">Acepto la Política de Privacidad</span> y todo lo que se dispone en ella.
                                    </label>
                                </div>

                                <p className="text-[9px] text-white/60 leading-tight">
                                    Responsable: <span className="font-bold uppercase">Mi Dentista</span> Finalidad: Dar respuesta a las consultas/gestión de citas/envío de boletín informativo o comunicaciones comerciales. Legitimación: Consentimiento del interesado. Destinatarios: No se cederán datos a terceros, salvo obligación legal. Derechos: Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional. Información adicional: Puede consultar la información adicional y detallada sobre Protección de Datos Personales en el Aviso Legal y Política de Privacidad.
                                </p>
                            </div>

                            <Button
                                type="submit"
                                className="px-10 h-14 bg-white text-[#8C3573] hover:bg-white/90 font-bold text-base rounded-lg shadow-lg uppercase tracking-wider transition-all"
                                disabled={!formData.privacy || isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Pide Cita"}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div id="map-location" className="mt-20 rounded-[40px] overflow-hidden shadow-xl border border-gray-100 h-[400px] relative">
                    <iframe
                        src="https://maps.google.com/maps?q=Carrer+de+Blai+45+08004+Barcelona&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Mi Dentista"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactLocationSection;
