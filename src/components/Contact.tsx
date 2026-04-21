import { useState } from "react";
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
import { MessageSquare, Calendar, MapPin, Phone, Check } from "lucide-react";
import { submitFormToSheet } from "../utils/googleSheets";
import { toast } from "sonner";
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
import BookingDialog from "@/components/BookingDialog";

const Contact = () => {
    const [bookingOpen, setBookingOpen] = useState(false);

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
            if (values.trap) return; // Silent fail

            const metadata = getBrowserMetadata();
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
                toast.success("¡Mensaje enviado!", {
                    description: "Gracias por contactarnos. Te responderemos en breve.",
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
            toast.error("Algo salió mal", {
                description: "No pudimos enviar tu mensaje. Por favor intenta más tarde.",
            });
        }
    };

    return (
        <section id="contacto" className="py-20 bg-brand-bg/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-[1.2fr_1fr] xl:grid-cols-2 gap-12 items-center">

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
                                    <a
                                        href="https://wa.me/34665487739"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="link" className="text-green-600 p-0 h-auto font-bold hover:no-underline">
                                            Chatear ahora →
                                        </Button>
                                    </a>
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

                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Solicitar Cita</h3>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 font-medium text-sm">Nombre completo *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        className="bg-white border-gray-200 h-10 md:h-12"
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
                                            <FormItem>
                                                <FormLabel className="text-gray-700 font-medium text-sm">Teléfono *</FormLabel>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border-r border-gray-200 pr-2 mr-2 pointer-events-none z-10">
                                                        <span className="text-lg">🇪🇸</span>
                                                    </div>
                                                    <FormControl>
                                                        <Input
                                                            placeholder=""
                                                            className="bg-white border-gray-200 h-10 md:h-12 pl-16 text-black"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-700 font-medium text-sm">Correo *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder=""
                                                    className="bg-white border-gray-200 h-10 md:h-12 text-black"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="treatment"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 font-medium text-sm">¿Qué tratamiento te interesa?</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white border-gray-200 text-gray-900 h-10 md:h-12">
                                                            <SelectValue placeholder="Seleccionar..." />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="revisión">Primera Visita (Gratis)</SelectItem>
                                                        <SelectItem value="odontopediatria">Odontopediatría</SelectItem>
                                                        <SelectItem value="ortodoncia">Ortodoncia</SelectItem>
                                                        <SelectItem value="estetica">Estética Dental</SelectItem>
                                                        <SelectItem value="implantes">Implantes Dentales</SelectItem>
                                                        <SelectItem value="otro">Otro</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="reason"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 font-medium text-sm">Motivo de consulta</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        className="bg-white border-gray-200 h-10 md:h-12 text-black"
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
                                    name="trap"
                                    render={({ field }) => (
                                        <FormItem className="hidden">
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full sm:flex-1 h-12 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 font-bold text-sm md:text-base rounded-lg shadow-sm uppercase tracking-wide transition-all min-w-0"
                                        disabled={!form.formState.isValid || isSubmitting}
                                    >
                                        {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                                    </Button>
                                    <span className="text-gray-400 font-bold text-xs uppercase hidden sm:block">o</span>
                                    <Button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setBookingOpen(true);
                                        }}
                                        className="w-full sm:flex-1 h-12 bg-brand-primary text-white hover:bg-brand-dark font-bold text-sm md:text-base rounded-lg shadow-lg uppercase tracking-wide transition-all min-w-0 px-2"
                                    >
                                        Reserva tu Cita
                                    </Button>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="privacy"
                                    render={({ field }) => (
                                        <FormItem className="flex items-start gap-3 pt-4 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="mt-1 bg-white border-gray-300 text-brand-primary"
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel className="text-xs text-gray-600 leading-tight">
                                                    Acepto la Política de Privacidad
                                                </FormLabel>
                                                <p className="opacity-70 text-[10px] text-gray-500">
                                                    Responsable: Mi Dentista. Finalidad: Responder consultas.
                                                </p>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
            <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
        </section>
    );
};

export default Contact;
