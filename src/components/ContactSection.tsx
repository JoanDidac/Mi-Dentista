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
import { submitFormToSheet } from "../utils/googleSheets";
import { toast } from "sonner";
import { Check } from "lucide-react";
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
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";

const ContactSection = () => {
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
        <section id="contacto" className="w-full bg-gradient-to-br from-[#8C3573] to-[#65153d] py-16 md:py-24">
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
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white font-medium text-sm">Nombre completo *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        className="bg-white border-white/30 h-10 md:h-12"
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
                                                <FormLabel className="text-white font-medium text-sm">Teléfono *</FormLabel>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border-r border-gray-300 pr-2 mr-2 pointer-events-none z-10">
                                                        <span className="text-lg">🇪🇸</span>
                                                    </div>
                                                    <FormControl>
                                                        <Input
                                                            placeholder=""
                                                            className="bg-white border-white/30 h-10 md:h-12 pl-16 text-black placeholder:text-gray-500"
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
                                            <FormLabel className="text-white font-medium text-sm">Correo *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder=""
                                                    className="bg-white border-white/30 h-10 md:h-12 text-black placeholder:text-gray-500"
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
                                                <FormLabel className="text-white font-medium text-sm">¿Qué tratamiento te interesa?</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white/20 border-white/30 text-white h-12">
                                                            <SelectValue placeholder="Seleccionar tratamiento" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="revisión">Primera Visita (Gratis)</SelectItem>
                                                        <SelectItem value="odontopediatria">Odontopediatría</SelectItem>
                                                        <SelectItem value="ortodoncia">Ortodoncia Invisible</SelectItem>
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
                                                <FormLabel className="text-white font-medium text-sm">¿Cuál es el motivo de tu consulta?</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        className="bg-white border-white/30 h-10 md:h-12 text-black placeholder:text-gray-500"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

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

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full sm:flex-1 px-8 h-12 bg-white/20 text-white hover:bg-white/30 border border-white/50 font-bold text-base rounded-lg shadow-sm uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        disabled={!form.formState.isValid || isSubmitting}
                                    >
                                        {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                                    </Button>
                                    <span className="text-white/80 font-bold text-sm uppercase">o</span>
                                    <Button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setBookingOpen(true);
                                        }}
                                        className="w-full sm:flex-1 px-8 h-12 bg-white text-brand-primary hover:bg-white/90 font-bold text-base rounded-lg shadow-lg uppercase tracking-wide transition-all"
                                    >
                                        Reserva tu Cita
                                    </Button>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="privacy"
                                    render={({ field }) => (
                                        <FormItem className="flex items-start gap-3 pt-6 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="mt-1 bg-white border-white text-brand-primary"
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel className="text-xs text-white/80 leading-tight">
                                                    Acepto la Política de Privacidad y todo lo que se dispone en ella.
                                                </FormLabel>
                                                <p className="opacity-70 text-[10px] text-white/80">
                                                    Responsable: Mi Dentista. Finalidad: Dar respuesta a las consultas/gestión de citas...
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

export default ContactSection;
