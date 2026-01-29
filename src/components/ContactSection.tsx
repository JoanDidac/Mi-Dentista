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
import { submitFormToSheet } from "../utils/googleSheets";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { getBrowserMetadata } from "@/utils/analytics";

const ContactSection = () => {
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

        const metadata = getBrowserMetadata();
        // Ensure phone number has +34 prefix for E.164 compliance
        const formattedPhone = formData.phone.startsWith('+') ? formData.phone : `+34${formData.phone}`;
        const success = await submitFormToSheet({ ...formData, phone: formattedPhone, metadata });

        if (success) {
            toast.success("¡Mensaje enviado!", {
                description: "Gracias por contactarnos. Te responderemos en breve.",
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
            toast.error("Algo salió mal", {
                description: "No pudimos enviar tu mensaje. Por favor intenta más tarde.",
            });
        }
        setIsSubmitting(false);
    };

    const handleChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section id="contact" className="w-full bg-gradient-to-br from-[#8C3573] to-[#65153d] py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-white space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight">
                            Primera visita <br />
                            GRATUITA
                        </h2>
                        <div className="space-y-4 text-lg md:text-xl font-light text-white/90">
                            <p>
                                Ponte en contacto con nosotros para que podamos hacerte una
                                valoración médica y explicarte cómo podemos ayudarte a mejorar tu
                                salud bucodental y tu estética.
                            </p>
                            <p>
                                Todos los tratamientos en un mismo centro: odontología general,
                                estética y rehabilitación, cirugía oral e implantología,
                                endodoncia, odontopediatría, ortodoncia, periodoncia y
                                prostodoncia.
                            </p>
                            <p>
                                Diagnóstico personalizado, plan de tratamiento con pruebas
                                diagnosticas desde tu 1ª visita y seguimiento cercano desde el inicio.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-white font-medium text-sm">
                                        Nombre completo *
                                    </label>
                                    <Input
                                        id="name"
                                        required
                                        placeholder=""
                                        className="bg-white border-white/30 h-10 md:h-12"
                                        value={formData.name}
                                        onChange={(e) => handleChange("name", e.target.value)}
                                    />
                                </div>
                                {/* Phone with partial flag placeholder simulation */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-white font-medium text-sm">
                                        Teléfono *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
                                            <span className="text-lg">🇪🇸</span>
                                        </div>
                                        <Input
                                            id="phone"
                                            required
                                            placeholder=""
                                            className="bg-white border-white/30 h-10 md:h-12 pl-16 text-black placeholder:text-gray-500"
                                            value={formData.phone}
                                            onChange={(e) => handleChange("phone", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-white font-medium text-sm">
                                    Correo *
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder=""
                                    className="bg-white border-white/30 h-10 md:h-12 text-black placeholder:text-gray-500"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-white font-medium text-sm">
                                        ¿En qué tratamiento estás interesado/a?
                                    </label>
                                    <Select
                                        onValueChange={(val) => handleChange("treatment", val)}
                                    >
                                        <SelectTrigger className="bg-white/20 border-white/30 text-white h-12">
                                            <SelectValue placeholder="Seleccionar tratamiento" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="revisión">Primera Visita (Gratis)</SelectItem>
                                            <SelectItem value="odontopediatria">Odontopediatría</SelectItem>
                                            <SelectItem value="ortodoncia">Ortodoncia Invisible</SelectItem>
                                            <SelectItem value="estetica">Estética Dental</SelectItem>
                                            <SelectItem value="implantes">Implantes Dentales</SelectItem>
                                            <SelectItem value="otro">Otro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="reason" className="text-white font-medium text-sm">
                                        ¿Cuál es el motivo de tu consulta?
                                    </label>
                                    <Input
                                        id="reason"
                                        placeholder=""
                                        className="bg-white border-white/30 h-10 md:h-12 text-black placeholder:text-gray-500"
                                        value={formData.reason}
                                        onChange={(e) => handleChange("reason", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 pt-2">
                                <Checkbox
                                    id="privacy"
                                    className="mt-1 bg-white border-white text-brand-primary"
                                    checked={formData.privacy}
                                    onCheckedChange={(checked) => handleChange("privacy", checked === true)}
                                />
                                <label htmlFor="privacy" className="text-xs text-white/80 leading-tight">
                                    Acepto la Política de Privacidad y todo lo que se dispone en ella.
                                    <br />
                                    <span className="opacity-70 text-[10px]">
                                        Responsable: Mi Dentista. Finalidad: Dar respuesta a las consultas/gestión de citas...
                                    </span>
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full md:w-auto px-8 h-12 bg-white text-brand-primary hover:bg-white/90 font-bold text-lg rounded-lg shadow-lg uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!formData.privacy || isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Pide Cita"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
