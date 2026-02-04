
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
import { MessageCircle, MapPin, Clock, Check } from "lucide-react";
import { submitFormToSheet } from "../utils/googleSheets";
import { toast } from "sonner";
import QRCode from "react-qr-code";
import { getBrowserMetadata } from "@/utils/analytics";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const ContactLocationSection = () => {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            treatment: "",
            reason: "",
            privacy: false,
            trap: "",
        },
    });

    const isSubmitting = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
        try {
            // Honeypot check
            if (values.trap) {
                console.log("Spam detected");
                return; // Silent fail
            }

            const metadata = getBrowserMetadata();
            // Ensure phone number has +34 prefix for E.164 compliance
            const formattedPhone = values.phone.startsWith('+') ? values.phone : `+34${values.phone}`;

            const success = await submitFormToSheet({
                name: values.name,
                email: values.email,
                phone: formattedPhone,
                treatment: values.treatment,
                reason: values.reason,
                privacy: values.privacy,
                metadata
            });

            if (success) {
                toast.success("¡Solicitud recibida!", {
                    description: "Nos pondremos en contacto contigo muy pronto.",
                    duration: 5000,
                    className: "bg-white text-brand-primary border-brand-primary/20",
                    icon: <Check className="text-[#84cc16] w-5 h-5" />,
                });
                form.reset();
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error al enviar", {
                description: "Hubo un problema. Por favor, inténtalo de nuevo o llámanos.",
            });
        }
    };

    return (
        <section id="contacto-footer" className="w-full bg-white py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Info Content */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-brand-dark leading-tight tracking-tight text-center md:text-left">
                                Habla con nuestro <br />
                                equipo y vuelve a <br />
                                <span className="relative inline-block">
                                    Sonreír.
                                    <svg className="absolute w-full h-3 -bottom-2 left-0 text-brand-secondary/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                        <path
                                            d="M0 5 Q 50 10 100 5"
                                            stroke="#8C3573"
                                            strokeWidth="2"
                                            fill="none"
                                            className="animate-shine opacity-0"
                                            strokeDasharray="30 200"
                                            style={{ filter: "drop-shadow(0 0 2px #AD5E99)" }}
                                        />
                                    </svg>
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-xl text-center md:text-left mx-auto md:mx-0">
                                Puedes contactar con nuestro equipo rellenando el formulario,
                                llamando al <span className="font-bold text-brand-primary whitespace-nowrap">93 441 36 64</span> o escribiendo
                                un mensaje de WhatsApp haciendo clic en el botón.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <a
                                href="https://wa.me/34692248625"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button className="bg-[#8C3573] hover:bg-[#722a5d] text-white px-8 h-14 rounded-xl flex items-center gap-3 font-bold uppercase tracking-wide group transition-all">
                                    CONTACTA POR WHATSAPP
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white text-white drop-shadow-md group-hover:scale-150 transition-transform duration-300 ease-out" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
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

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="relative z-10 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="md:col-span-1">
                                                <FormLabel className="text-white font-medium text-sm">Nombre completo *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        required
                                                        className="bg-white border-none h-12 text-black rounded-lg focus-visible:ring-2 focus-visible:ring-brand-secondary"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem className="md:col-span-1">
                                                <FormLabel className="text-white font-medium text-sm">Teléfono *</FormLabel>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border-r border-gray-200 pr-2 mr-2 pointer-events-none z-10">
                                                        <span className="text-base">🇪🇸</span>
                                                        <span className="text-[10px] text-gray-400">▼</span>
                                                    </div>
                                                    <FormControl>
                                                        <Input
                                                            required
                                                            className="bg-white border-none h-12 pl-16 text-black rounded-lg focus-visible:ring-2 focus-visible:ring-brand-secondary"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="md:col-span-1">
                                                <FormLabel className="text-white font-medium text-sm">Correo *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        required
                                                        className="bg-white border-none h-12 text-black rounded-lg focus-visible:ring-2 focus-visible:ring-brand-secondary"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="treatment"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white font-medium text-sm">¿En qué tratamiento estás interesado/a?</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="reason"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white font-medium text-sm">¿Cuál es el motivo de tu consulta?</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="bg-white border-none h-12 text-black rounded-lg focus-visible:ring-2 focus-visible:ring-brand-secondary"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="privacy"
                                    render={({ field }) => (
                                        <FormItem className="space-y-4 pt-2">
                                            <div className="flex items-start gap-3">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        className="mt-1 bg-white border-none text-brand-primary"
                                                    />
                                                </FormControl>
                                                <FormLabel className="text-[11px] text-white/90 leading-tight">
                                                    <span className="font-bold">Acepto la Política de Privacidad</span> y todo lo que se dispone en ella.
                                                </FormLabel>
                                            </div>
                                            <p className="text-[9px] text-white/60 leading-tight">
                                                Responsable: <span className="font-bold uppercase">Mi Dentista</span> Finalidad: Dar respuesta a las consultas/gestión de citas/envío de boletín informativo o comunicaciones comerciales. Legitimación: Consentimiento del interesado. Destinatarios: No se cederán datos a terceros, salvo obligación legal. Derechos: Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional. Información adicional: Puede consultar la información adicional y detallada sobre Protección de Datos Personales en el Aviso Legal y Política de Privacidad.
                                            </p>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Honeypot Field - Hidden from users */}
                                <FormField
                                    control={form.control}
                                    name="trap"
                                    render={({ field }) => (
                                        <FormItem className="hidden">
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="px-10 h-14 bg-white text-[#8C3573] hover:bg-white/90 font-bold text-base rounded-lg shadow-lg uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!form.formState.isValid || isSubmitting}
                                >
                                    {isSubmitting ? "Enviando..." : "Pide Cita"}
                                </Button>
                            </form>
                        </Form>
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
