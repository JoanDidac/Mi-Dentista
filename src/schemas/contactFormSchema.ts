import * as z from "zod";

export const contactBaseSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(9, "El teléfono debe tener al menos 9 dígitos"),
    // Honeypot field - should be empty
    trap: z.string().max(0, "Spam detectado").optional(),
});

export const contactFormSchema = contactBaseSchema.extend({
    treatment: z.string({ required_error: "Selecciona un tratamiento" }),
    reason: z.string().optional(),
    privacy: z.boolean().refine((val) => val === true, {
        message: "Debes aceptar la política de privacidad",
    }),
});

export const bookingFormSchema = contactBaseSchema.extend({
    service: z.string({ required_error: "Selecciona un servicio" }),
    date: z.date({ required_error: "Selecciona una fecha" }),
    time: z.string({ required_error: "Selecciona una hora" }),
    comments: z.string().optional(),
    // Booking implies privacy acceptance or handles it differently in UI, 
    // but if needed we can enforce it here too.
    // The original BookingDialog didn't explicitly validate privacy boolean in schema 
    // but implied it by submission. Let's make it consistent if we add a checkbox.
    // For now, adhering to original BookingDialog which didn't have a privacy checkbox.
});
