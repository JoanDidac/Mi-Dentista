
import {
    Baby,
    Smile,
    Stethoscope,
    Syringe,
    Scissors,
    Activity,
    Sparkles
} from "lucide-react";

import defaultHero from "../assets/hero-image.png";
import orthoHero from "../assets/orthodoncia-invisible.png";
import implantHero from "../assets/implantes-dentales.png";
import pedsHero from "../assets/odontopediatria.png";
import orthoConvHero from "../assets/ortodoncia-convencional.png";
import endoHero from "../assets/endodoncia-trial.png";
import endoHeroReal from "../assets/endodoncia-hero.png";
import perioHeroReal from "../assets/periodoncia-hero.png";
import surgeryHeroReal from "../assets/cirugia-oral-hero.png";

export interface ServiceData {
    slug: string;
    icon: any;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    process: { title: string; desc: string }[];
    imagePrompt: string;
    techSpecs: { label: string; value: string }[];
    image: string;
    videogram?: string;
}

export const servicesData: ServiceData[] = [
    {
        slug: "odontopediatria-barcelona",
        icon: Baby,
        title: "Odontopediatría",
        subtitle: "Experiencia y ternura para cuidar lo que más quieres",
        description: "Cuidar la sonrisa comienza en los primeros años. Creamos un entorno donde la salud bucodental se aprende jugando, fomentando hábitos positivos desde la infancia. Tu hijo se sentirá seguro y feliz, transformando la visita al dentista en una experiencia de confianza y crecimiento.",
        benefits: [
            "Prevención temprana de problemas dentales",
            "Promoción de hábitos saludables desde la infancia",
            "Reducción del miedo al dentista (Ansiedad dental)",
            "Monitorización del crecimiento dental saludable",
            "Protección contra caries infantiles mediante selladores",
        ],
        process: [
            { title: "Primera Cita y Evaluación", desc: "Evaluamos la salud bucal completa y los hábitos de tu hijo en un entorno de juego, detectando cualquier necesidad de forma temprana y relajada." },
            { title: "Prevención y Educación", desc: "Enseñamos técnicas de higiene divertidas y aplicamos selladores o flúor, protegiendo sus dientes mientras aprenden a cuidar su sonrisa." },
            { title: "Tratamiento Personalizado", desc: "Diseñamos planes adaptados a su edad, desde limpiezas hasta ortodoncia interceptiva, utilizando tecnología avanzada para intervenciones mínimas." },
            { title: "Experiencia Positiva", desc: "Creamos un ambiente seguro y feliz para eliminar el miedo al dentista, asegurando que tu hijo crezca con confianza y una salud oral perfecta." },
        ],
        imagePrompt: "A friendly pediatric dentist showing a large toothbrush model to a laughing child in a colorful, warm dental office. Soft purple accent lighting. High quality photography.",
        techSpecs: [
            { label: "Edad Recomendada", value: "Desde el primer diente" },
            { label: "Sedación", value: "Óxido Nitroso (Gas de la Risa) disponible" },
            { label: "Tecnología", value: "Cámaras intraorales pediátricas" },
        ],
        image: pedsHero,
        videogram: "Odontopediatria%20Videogram%20Mi%20Dentista.mp4"
    },
    {
        slug: "ortodoncia-invisible-barcelona",
        icon: Smile,
        title: "Ortodoncia Invisible",
        subtitle: "Estética y eficacia: tu sonrisa perfecta, en secreto",
        description: "La ortodoncia invisible utiliza alineadores transparentes hechos a medida para corregir la posición de los dientes. Es la alternativa cómoda y estética a los brackets tradicionales, permitiéndote comer y cepillarte con total libertad.",
        benefits: [
            "Estética y discreción total (casi invisibles)",
            "Mayor comodidad sin alambres ni llagas",
            "Extraíbles para comer y cepillarse",
            "Menos visitas de urgencia",
            "Visualización del resultado final antes de empezar",
        ],
        process: [
            { title: "Diagnóstico y Escáner 3D", desc: "Realizamos un escáner intraoral 3D completo y fotos para evaluar tu caso y diseñar tu sonrisa digitalmente con máxima precisión." },
            { title: "Planificación Digital", desc: "Visualizarás el resultado final antes de empezar gracias a nuestro software avanzado que simula cada movimiento dental de tu tratamiento." },
            { title: "Tus Alineadores", desc: "Te entregamos tus férulas transparentes a medida, cómodas y removibles, explicándote cómo cambiarlas y mantener una higiene perfecta." },
            { title: "Retención Invisible", desc: "Al finalizar, aseguramos tu nueva sonrisa con retenedores transparentes y revisiones periódicas para garantizar resultados estables de por vida." },
        ],
        imagePrompt: "Close up of a smiling young woman holding a clear aligner case. Natural lighting, confident smile. Background soft blur of a modern clinic using colors #8C3573.",
        techSpecs: [
            { label: "Tecnología", value: "Escáner Intraoral 3D iTero" },
            { label: "Material", value: "Polímero termoplástico médico" },
            { label: "Duración Media", value: "12 - 18 meses" },
        ],
        image: orthoHero,
        videogram: "Mi%20Dentista%20Ortodoncia%20Invisible%20.mp4"
    },
    {
        slug: "ortodoncia-convencional-barcelona",
        icon: Activity,
        title: "Ortodoncia Convencional",
        subtitle: "La solución clásica y robusta para cualquier sonrisa",
        description: "Los brackets metálicos o estéticos siguen siendo uno de los métodos más efectivos para corregir maloclusiones complejas. Son resistentes, precisos y ofrecen un control total sobre el movimiento dental.",
        benefits: [
            "Alta efectividad en casos complejos",
            "Opción más económica",
            "Resistencia asegurada",
            "No dependen de la colaboración del paciente (no se pierden)",
            "Resultados estables y duraderos",
        ],
        process: [
            { title: "Diagnóstico y Selección", desc: "Elegimos entre brackets metálicos (resistencia probada) o estéticos de zafiro (discreción total), según tus prioridades estéticas y funcionales." },
            { title: "Colocación Precisa", desc: "Cementamos los brackets con precisión milimétrica para garantizar un movimiento dental controlado y eficaz desde el primer día." },
            { title: "Ajustes Progresivos", desc: "Realizamos revisiones cada 4-6 semanas para ajustar la tensión del arco, asegurando un progreso constante hacia tu sonrisa ideal." },
            { title: "Retención y Sonrisa", desc: "Al finalizar, retiramos la aparatología y colocamos retenedores fijos o removibles para preservar tu nueva sonrisa de por vida." },
        ],
        imagePrompt: "Teenager smiling with braces, looking happy and confident. Warm lighting, modern style. Subtle purple branding elements.",
        techSpecs: [
            { label: "Tipos", value: "Metálicos, Zafiro (Estéticos)" },
            { label: "Precisión", value: "Control radicular milimétrico" },
            { label: "Mantenimiento", value: "Revisiones cada 4-6 semanas" },
        ],
        image: orthoConvHero,
        videogram: "Ortodoncia%20convencional%20Videograma%20Mi%20DEntista.mp4"
    },
    {
        slug: "implantes-dentales-barcelona",
        icon: Syringe,
        title: "Implantes Dentales",
        subtitle: "Recupera la funcionalidad y estética de tu boca",
        description: "Los implantes dentales son raíces artificiales de titanio que sustituyen a los dientes perdidos. Se integran con el hueso para proporcionar una base sólida para coronas o prótesis, devolviéndote la capacidad de masticar y sonreír con seguridad.",
        benefits: [
            "Sensación y aspecto de diente natural",
            "Prevención de la pérdida ósea",
            "Solución permanente y duradera",
            "No daña los dientes adyacentes",
            "Mejora la autoestima y la fonética",
        ],
        process: [
            { title: "Diagnóstico 3D", desc: "Valoramos tu caso con tecnología digital de última generación para planificar el tratamiento más adecuado y seguro." },
            { title: "Colocación", desc: "Utilizamos implantes de titanio o zirconio según tu necesidad, aplicando técnicas avanzadas como la carga inmediata." },
            { title: "Integración", desc: "Respetamos los tiempos biológicos de cicatrización para asegurar una base sólida, biocompatible y duradera." },
            { title: "Diente Final", desc: "Diseñamos tu nueva sonrisa con una estética natural y funcionalidad perfecta, indistinguible de tus dientes reales." },
        ],
        imagePrompt: "Macro shot of a high-quality dental implant model on a clean reflective surface. Professional, medical, sterile but warm lighting. Purple accent.",
        techSpecs: [
            { label: "Material", value: "Titanio Grado 5 / Zirconio" },
            { label: "Garantía", value: "De por vida (Implant System)" },
            { label: "Técnica", value: "Cirugía Guiada por Ordenador" },
        ],
        image: implantHero,
        videogram: "Implantes%20videograma%20Mi%20Dentista.mp4"
    },
    {
        slug: "endodoncia-barcelona",
        icon: Stethoscope,
        title: "Endodoncia",
        subtitle: "Salvamos tus dientes, eliminamos el dolor",
        description: "Conocida como 'matar el nervio', la endodoncia consiste en eliminar la pulpa infectada del interior del diente para limpiarlo y sellarlo. Es el tratamiento clave para evitar la extracción de piezas muy dañadas por caries profundas.",
        benefits: [
            "Alivio inmediato del dolor dental",
            "Conservación del diente natural",
            "Detiene la infección",
            "Recupera la funcionalidad masticatoria",
            "Tratamiento seguro y predecible",
        ],
        process: [
            { title: "Diagnóstico y Acceso", desc: "Examinamos tu caso para salvar el diente original, evitando la extracción y preservando al máximo su estructura natural." },
            { title: "Desinfección", desc: "Tratamos la infección desde la raíz, eliminando bacterias para evitar su propagación al hueso maxilar o tejidos cercanos." },
            { title: "Sellado", desc: "Realizamos un sellado hermético de los conductos que protege el diente y evita futuras reinfecciones." },
            { title: "Restauración", desc: "Recuperamos la funcionalidad y estética natural mediante una reconstrucción o corona que se integra perfectamente en tu boca." },
        ],
        imagePrompt: "Digital illustration or close-up photo representing dental precision. Microscope view concept. Clean, technological feel with purple tones.",
        techSpecs: [
            { label: "Instrumentación", value: "Limas Rotatorias NiTi" },
            { label: "Visualización", value: "Microscopio Dental" },
            { label: "Precisión", value: "Localizador de Ápices Electrónico" },
        ],
        image: endoHeroReal,
        videogram: "Endodoncia%20Videograma%20Mi%20Dentista%20.mp4"

    },
    {
        slug: "periodoncia-barcelona",
        icon: Activity,
        title: "Periodoncia",
        subtitle: "Cuidado integral para unas encías sanas",
        description: "La periodoncia trata las enfermedades de las encías (gingivitis y periodontitis) que soportan los dientes. Unas encías sanas son fundamentales para no perder piezas dentales y mantener la salud sistémica del cuerpo.",
        benefits: [
            "Detiene el sangrado de encías",
            "Elimina el mal aliento (Halitosis)",
            "Evita la movilidad y pérdida de dientes",
            "Mejora la estética (encías retraídas)",
            "Relación directa con la salud cardiovascular",
        ],
        process: [
            { title: "Sondaje", desc: "Medición de las bolsas periodontales." },
            { title: "Raspado", desc: "Limpieza profunda bajo la encía." },
            { title: "Mantenimiento", desc: "Revisiones periódicas para controlar bacterias." },
        ],
        imagePrompt: "Healthy smile close up showing pink gums and white teeth. Bright, clean, healthy aesthetic.",
        techSpecs: [
            { label: "Diagnóstico", value: "Sondaje Digital" },
            { label: "Tratamiento", value: "Ultrasonidos y Air-Flow" },
            { label: "Seguimiento", value: "Protocolo EMS" },
        ],
        image: perioHeroReal,
        videogram: "Periodoncia%20videograma%20Mi%20DEntista.mp4"
    },
    {
        slug: "cirugia-oral-barcelona",
        icon: Scissors,
        title: "Cirugía Oral",
        subtitle: "Soluciones quirúrgicas seguras y eficaces",
        description: "Desde la extracción de muelas del juicio hasta regeneraciones óseas. Nuestra unidad de cirugía oral aborda procedimientos complejos con la máxima seguridad y confort para el paciente.",
        benefits: [
            "Resolución de problemas complejos (ej. cordales incluidos)",
            "Preparación de la boca para implantes",
            "Eliminación de quistes o infecciones",
            "Recuperación rápida con técnicas modernas",
            "Sedación disponible para tu tranquilidad",
        ],
        process: [
            { title: "Diagnóstico Avanzado", desc: "Utilizamos escáneres 3D y CBCT para evaluar la anatomía exacta y diseñar un plan quirúrgico preciso y personalizado." },
            { title: "Preparación y Confort", desc: "Priorizamos tu tranquilidad aplicando la anestesia más adecuada y resolviendo todas tus dudas antes de iniciar." },
            { title: "Intervención Segura", desc: "Ejecutamos el procedimiento bajo estrictos protocolos estériles para eliminar patologías o preparar tu boca para futuros tratamientos." },
            { title: "Cura y Seguimiento", desc: "Aseguramos una recuperación rápida con instrucciones detalladas, medicación específica y revisiones de control postoperatorias." },
        ],
        imagePrompt: "Modern dental surgical suite. Clean, sterile, reassuring atmosphere. Not scary. Professional equipment in background.",
        techSpecs: [
            { label: "Seguridad", value: "Quirófano esterilizado" },
            { label: "Diagnóstico", value: "CBCT 3D" },
            { label: "Confort", value: "Sedación Consciente" },
        ],
        image: surgeryHeroReal,
        videogram: "Cirugia%20Oral%20Videograma%20Mi%20Dentista.mp4"
    },
];
