
export interface Review {
    id: number;
    name: string;
    time: string;
    rating: number;
    text: string;
    treatment?: string;
    avatarColor: string;
    source?: 'google' | 'doctoralia';
}

export const reviewsData: Review[] = [
    {
        id: 1,
        name: "Gemma Ortí",
        time: "hace 2 meses",
        rating: 5,
        text: "Buscaba una solución estética para alinear mis dientes sin renunciar a mi aspecto natural y no puedo estar más contenta de los resultados. Les doy un 10.",
        treatment: "ORTODONCIA INVISIBLE",
        avatarColor: "bg-pink-100 text-pink-600",
        source: 'google'
    },
    {
        id: 2,
        name: "Tiago M.",
        time: "hace 11 meses",
        rating: 5,
        text: "Hace año y medio que empecé el tratamiento de ortodoncia en esta clínica. Estoy contento con el trato y el resultado es increíble.",
        avatarColor: "bg-teal-100 text-teal-600",
        source: 'google'
    },
    {
        id: 3,
        name: "Charles Feijoo",
        time: "hace 12 meses",
        rating: 5,
        text: "He ido algunas veces a la clínica y desde el primer momento se siente como te acoge el personal. El carisma y profesionalismo que tienen es excelente.",
        avatarColor: "bg-purple-100 text-purple-600",
        source: 'google'
    },
    {
        id: 4,
        name: "Melany",
        time: "hace 12 meses",
        rating: 5,
        text: "Hace poco tuve una experiencia muy positiva en Mi Dentista. Es un lugar que realmente superó mis expectativas en todos los sentidos.",
        avatarColor: "bg-gray-100 text-gray-600",
        source: 'google'
    },
    {
        id: 5,
        name: "Ricardo S.",
        time: "hace 5 meses",
        rating: 5,
        text: "Excelente clínica, muy profesionales y atentos. Me hicieron un implante y todo salió perfecto. Sin duda la mejor de la zona.",
        avatarColor: "bg-blue-100 text-blue-600",
        source: 'google'
    },
    {
        id: 6,
        name: "Sofía R.",
        time: "hace 1 mes",
        rating: 5,
        text: "La atención al cliente es excepcional. Me explicaron cada paso del tratamiento de limpieza y me sentí muy cómoda.",
        avatarColor: "bg-rose-100 text-rose-600",
        source: 'google'
    },
    {
        id: 7,
        name: "Marc Vila",
        time: "hace 3 semanas",
        rating: 5,
        text: "Gran equipo de profesionales. Fui por una urgencia y me atendieron rápido y con mucha delicadeza. ¡Muy recomendables!",
        avatarColor: "bg-indigo-100 text-indigo-600",
        source: 'google'
    },
    {
        id: 8,
        name: "Laura Martínez",
        time: "hace 4 meses",
        rating: 5,
        text: "Llevo a mis hijos aquí y el trato con los niños es maravilloso. Han perdido el miedo al dentista gracias a la paciencia de las doctoras.",
        avatarColor: "bg-orange-100 text-orange-600",
        source: 'google'
    },
    {
        id: 9,
        name: "Jordi P.",
        time: "hace 6 meses",
        rating: 5,
        text: "Instalaciones modernas y limpieza impecable. El tratamiento de blanqueamiento superó mis expectativas. ¡Mis dientes brillan!",
        avatarColor: "bg-cyan-100 text-cyan-600",
        source: 'google'
    },
    {
        id: 10,
        name: "Elena G.",
        time: "hace 2 meses",
        rating: 5,
        text: "Desde que vengo a Mi Dentista, mi salud bucal ha mejorado muchísimo. Son honestos con los diagnósticos y no intentan venderte lo que no necesitas.",
        avatarColor: "bg-green-100 text-green-600",
        source: 'google'
    },
    {
        id: 11,
        name: "David Ruiz",
        time: "hace 9 meses",
        rating: 5,
        text: "La mejor clínica dental de Barcelona. Puntualidad, higiene y un trato humano que ya no se encuentra fácilmente. Un 10 rotundo.",
        avatarColor: "bg-sky-100 text-sky-600",
        source: 'google'
    },
    {
        id: 12,
        name: "Anna Serra",
        time: "hace 1 año",
        rating: 5,
        text: "Me puse carillas y el cambio ha sido espectacular. Muy naturales y el proceso fue indoloro. ¡Gracias equipo!",
        avatarColor: "bg-amber-100 text-amber-600",
        source: 'google'
    },
    {
        id: 13,
        name: "Pablo Moix",
        time: "hace 7 meses",
        rating: 5,
        text: "Fui para una extracción de muela del juicio y estaba muy nervioso. Me tranquilizaron y no sentí absolutamente nada. Muy cracks.",
        avatarColor: "bg-emerald-100 text-emerald-600",
        source: 'google'
    },
    {
        id: 14,
        name: "Cristina B.",
        time: "hace 2 semanas",
        rating: 5,
        text: "La doctora es una artista con la estética dental. Me arregló un diente roto y parece que nunca hubiera pasado nada. Increíble.",
        avatarColor: "bg-violet-100 text-violet-600",
        source: 'google'
    },
    {
        id: 15,
        name: "Marc J.",
        time: "hace 5 meses",
        rating: 5,
        text: "Precios competitivos y calidad superior. Se nota que les apasiona su trabajo. Volveré sin duda para mis revisiones periódicas.",
        avatarColor: "bg-fuchsia-100 text-fuchsia-600",
        source: 'google'
    },
    {
        id: 16,
        name: "Nuria T.",
        time: "hace 3 meses",
        rating: 5,
        text: "Trato exquisito desde que entras por la puerta. La recepcionista es encantadora y el equipo médico inmejorable.",
        avatarColor: "bg-lime-100 text-lime-600",
        source: 'google'
    },
    {
        id: 17,
        name: "Albert F.",
        time: "hace 8 meses",
        rating: 5,
        text: "Hacía años que no iba al dentista por miedo, pero aquí me sentí como en casa. Ya no cambio de clínica por nada del mundo.",
        avatarColor: "bg-yellow-100 text-yellow-600",
        source: 'google'
    },
    {
        id: 18,
        name: "Mireia S.",
        time: "hace 10 meses",
        rating: 5,
        text: "Excelente para toda la familia. Mi hija de 5 años salió feliz con su 'regalito' y sus dientes limpios. ¡Sois los mejores!",
        avatarColor: "bg-red-100 text-red-600",
        source: 'google'
    },
    {
        id: 19,
        name: "Sergi L.",
        time: "hace 4 meses",
        rating: 5,
        text: "Muy profesionales. Te explican todo con detalle para que entiendas tu situación. Transparencia total en el presupuesto.",
        avatarColor: "bg-slate-100 text-slate-600",
        source: 'google'
    },
    {
        id: 20,
        name: "Paula R.",
        time: "hace 6 semanas",
        rating: 5,
        text: "Me encanta el diseño de la clínica, transmite mucha paz. Y el tratamiento de ortodoncia invisible va viento en popa. ¡Muy feliz!",
        avatarColor: "bg-pink-100 text-pink-600",
        source: 'google'
    },
    {
        id: 21,
        name: "Joan V.",
        time: "hace 11 meses",
        rating: 5,
        text: "Calidad humana y técnica. Me salvaron una pieza dental que en otros sitios me querían quitar. Honestidad pura.",
        avatarColor: "bg-teal-100 text-teal-600",
        source: 'google'
    },
    {
        id: 22,
        name: "Marta C.",
        time: "hace 2 meses",
        rating: 5,
        text: "Rapidez y eficacia. Tuve un problema con un puente y me lo solucionaron en el mismo día. Servicio de primera.",
        avatarColor: "bg-purple-100 text-purple-600",
        source: 'google'
    },
    {
        id: 23,
        name: "Xavi G.",
        time: "hace 5 meses",
        rating: 5,
        text: "Personal muy cualificado. Se nota que están a la última en tecnología dental. Los resultados hablan por sí solos.",
        avatarColor: "bg-blue-100 text-blue-600",
        source: 'google'
    },
    {
        id: 24,
        name: "Sonia M.",
        time: "hace 1 mes",
        rating: 5,
        text: "La mejor inversión que he hecho ha sido mi sonrisa en esta clínica. Aumentó mi confianza muchísimo. Gracias a todo el equipo.",
        avatarColor: "bg-rose-100 text-rose-600",
        source: 'google'
    },
    {
        id: 25,
        name: "Dani P.",
        time: "hace 7 meses",
        rating: 5,
        text: "Muy recomendable. No he tenido que esperar ni 5 minutos en la sala de espera. Puntualidad británica.",
        avatarColor: "bg-indigo-100 text-indigo-600",
        source: 'google'
    },
    // Doctoralia Reviews
    {
        id: 26,
        name: "Noe",
        time: "3 de marzo de 2025",
        rating: 5,
        text: "Persona eficaz en su trabajo, atenta con los niños",
        treatment: "Visitas sucesivas Odontología",
        avatarColor: "bg-green-100 text-green-700",
        source: 'doctoralia'
    },
    {
        id: 27,
        name: "Adonis Santana",
        time: "18 de septiembre de 2024",
        rating: 5,
        text: "Muy rapido y efectivo todo, contento con el tratamiento",
        treatment: "Visita Odontología",
        avatarColor: "bg-blue-100 text-blue-700",
        source: 'doctoralia'
    },
    {
        id: 28,
        name: "MS",
        time: "19 de agosto de 2024",
        rating: 5,
        text: "Profesionales con Amabilidad y buen trato. Buenos precios",
        treatment: "Primera visita Odontología",
        avatarColor: "bg-yellow-100 text-yellow-700",
        source: 'doctoralia'
    },
    {
        id: 29,
        name: "Victoria",
        time: "19 de agosto de 2024",
        rating: 5,
        text: "Todo bien, la explicación del problema, y como solucionar",
        treatment: "Primera visita Odontología",
        avatarColor: "bg-purple-100 text-purple-700",
        source: 'doctoralia'
    },
    {
        id: 30,
        name: "Jose Antonio",
        time: "5 de agosto de 2024",
        rating: 5,
        text: "En general el centro esta muy bien, tanto la dentista como higienista, anestesista. Trato excelente y precios contenidos.",
        treatment: "Primera visita Odontología",
        avatarColor: "bg-red-100 text-red-700",
        source: 'doctoralia'
    },
    {
        id: 31,
        name: "Miguel",
        time: "4 de julio de 2024",
        rating: 5,
        text: "Todo perfecto, trato personal, tratamiento etc... Muy contento y muy recomendables. Gracias",
        treatment: "Visitas sucesivas Odontología",
        avatarColor: "bg-indigo-100 text-indigo-700",
        source: 'doctoralia'
    },
    {
        id: 32,
        name: "Mónica",
        time: "2 de julio de 2024",
        rating: 5,
        text: "Me han tratado muy bien, trabajo realizado con eficacia.",
        treatment: "Primera visita Odontología",
        avatarColor: "bg-orange-100 text-orange-700",
        source: 'doctoralia'
    },
    {
        id: 33,
        name: "Montserrat Caballero",
        time: "3 de junio de 2024",
        rating: 5,
        text: "Genial como siempre muy amables y profesionales gracias.",
        treatment: "Primera visita Odontología",
        avatarColor: "bg-teal-100 text-teal-700",
        source: 'doctoralia'
    },
    {
        id: 34,
        name: "D.P",
        time: "29 de abril de 2024",
        rating: 5,
        text: "La experiencia fue excelente!!!! Recomendable! :))",
        treatment: "Primera visita Odontología",
        avatarColor: "bg-pink-100 text-pink-700",
        source: 'doctoralia'
    },
    {
        id: 35,
        name: "Miguel",
        time: "15 de abril de 2024",
        rating: 5,
        text: "Cómo siempre perfecto tiene buenas manos y igual que su compañera",
        treatment: "Visitas sucesivas Odontología",
        avatarColor: "bg-cyan-100 text-cyan-700",
        source: 'doctoralia'
    }
];
