
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
        name: "Joan Didac Hernandez",
        time: "hace 2 meses",
        rating: 5,
        text: "Experiencia positiva, recomendable sin duda. Tenia fobias de algunas experiencias previas que no habian ido bien en otros centros y aqui me han dado mucha confianza. Me he hecho una higiene y me han explicado todo fenomenal y con mucha paciencia. Sin duda volvere!",
        avatarColor: "bg-blue-100 text-blue-600",
        source: 'google'
    },
    {
        id: 2,
        name: "Edu Caicedo",
        time: "hace 2 meses",
        rating: 5,
        text: "Me atendió Melany, un trato increíble, muy amable y atenta! 🙌🏽",
        avatarColor: "bg-teal-100 text-teal-600",
        source: 'google'
    },
    {
        id: 3,
        name: "Jorge García Cubero",
        time: "hace 2 meses",
        rating: 5,
        text: "Dentista fenomenal. Me atendieron rápido y bien. Muy bien de precio. Me atendió Melany, una chica muy amable, simpática y profesional.",
        avatarColor: "bg-orange-100 text-orange-600",
        source: 'google'
    },
    {
        id: 4,
        name: "Silvia Perolet",
        time: "hace 2 meses",
        rating: 5,
        text: "Siempre tenía mucho miedo a ir al dentista hasta que he conocido a Fátima y su equipo, son todas encantadoras y muy cariñosas!! Me he hecho bastantes cosas con ellas y todo genial!",
        avatarColor: "bg-pink-100 text-pink-600",
        source: 'google'
    },
    {
        id: 5,
        name: "Sonia Tres",
        time: "hace 5 meses",
        rating: 5,
        text: "Llevo más de seis años visitando para diversos tratamientos, desde limpiezas y caries hasta ortodoncia e implantes. El equipo me ayudó a evitar una operación maxilofacial con un tratamiento clínico preventivo y correctivo excelente.",
        avatarColor: "bg-indigo-100 text-indigo-600",
        source: 'google'
    },
    {
        id: 6,
        name: "Fernando Gil",
        time: "hace 1 año",
        rating: 5,
        text: "Buen equipo con atención integral.",
        avatarColor: "bg-emerald-100 text-emerald-600",
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
