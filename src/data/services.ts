
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
}

export const servicesData: ServiceData[] = [
    {
        slug: "odontopediatria-barcelona",
        icon: Baby,
        title: "Odontopediatría",
        subtitle: "Experiencia y ternura para cuidar lo que más quieres",
        description: "La odontopediatría es la rama de la odontología dedicada a la salud bucodental de niños y adolescentes. En Mi Dentista, creamos un entorno seguro y divertido donde los más pequeños aprenden a cuidar su sonrisa sin miedos.",
        benefits: [
            "Prevención temprana de problemas dentales",
            "Promoción de hábitos saludables desde la infancia",
            "Reducción del miedo al dentista (Ansiedad dental)",
            "Monitorización del crecimiento dental saludable",
            "Protección contra caries infantiles mediante selladores",
        ],
        process: [
            { title: "Primera Visita", desc: "Evaluación inicial suave en un ambiente de juego." },
            { title: "Educación", desc: "Enseñamos técnicas de cepillado divertidas." },
            { title: "Diagnóstico", desc: "Revisión completa para detectar posibles anomalías." },
            { title: "Tratamiento", desc: "Resolución de problemas con técnicas mínimamente invasivas." },
        ],
        imagePrompt: "A friendly pediatric dentist showing a large toothbrush model to a laughing child in a colorful, warm dental office. Soft purple accent lighting. High quality photography.",
        techSpecs: [
            { label: "Edad Recomendada", value: "Desde el primer diente" },
            { label: "Sedación", value: "Óxido Nitroso (Gas de la Risa) disponible" },
            { label: "Tecnología", value: "Cámaras intraorales pediátricas" },
        ],
        image: pedsHero
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
            { title: "Escáner 3D", desc: "Digitalizamos tu boca sin pastas molestas." },
            { title: "Planificación", desc: "Diseñamos tu sonrisa movimiento a movimiento." },
            { title: "Alineadores", desc: "Recibes tu set de férulas personalizadas." },
            { title: "Progreso", desc: "Cambias de alineadores cada 1-2 semanas." },
        ],
        imagePrompt: "Close up of a smiling young woman holding a clear aligner case. Natural lighting, confident smile. Background soft blur of a modern clinic using colors #8C3573.",
        techSpecs: [
            { label: "Tecnología", value: "Escáner Intraoral 3D iTero" },
            { label: "Material", value: "Polímero termoplástico médico" },
            { label: "Duración Media", value: "12 - 18 meses" },
        ],
        image: orthoHero
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
            { title: "Estudio", desc: "Radiografías y fotos para el diagnóstico." },
            { title: "Colocación", desc: "Cementado de los brackets en una sesión." },
            { title: "Ajustes", desc: "Revisiones mensuales para activar el movimiento." },
            { title: "Retención", desc: "Mantenedores para fijar el resultado final." },
        ],
        imagePrompt: "Teenager smiling with braces, looking happy and confident. Warm lighting, modern style. Subtle purple branding elements.",
        techSpecs: [
            { label: "Tipos", value: "Metálicos, Zafiro (Estéticos)" },
            { label: "Precisión", value: "Control radicular milimétrico" },
            { label: "Mantenimiento", value: "Revisiones cada 4-6 semanas" },
        ],
        image: orthoConvHero
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
            { title: "Diagnóstico 3D", desc: "CBCT para evaluar el hueso disponible." },
            { title: "Colocación", desc: "Intervención indolora con anestesia local." },
            { title: "Integración", desc: "Periodo de curación (3-4 meses)." },
            { title: "Diente Final", desc: "Colocación de la corona de cerámica." },
        ],
        imagePrompt: "Macro shot of a high-quality dental implant model on a clean reflective surface. Professional, medical, sterile but warm lighting. Purple accent.",
        techSpecs: [
            { label: "Material", value: "Titanio Grado 5 / Zirconio" },
            { label: "Garantía", value: "De por vida (Implant System)" },
            { label: "Técnica", value: "Cirugía Guiada por Ordenador" },
        ],
        image: implantHero
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
            { title: "Apertura", desc: "Acceso a la cámara pulpar bajo anestesia." },
            { title: "Limpieza", desc: "Instrumentación y desinfección de conductos." },
            { title: "Sellado", desc: "Relleno termoplástico para evitar reinfecciones." },
            { title: "Reconstrucción", desc: "Restauración de la forma del diente." },
        ],
        imagePrompt: "Digital illustration or close-up photo representing dental precision. Microscope view concept. Clean, technological feel with purple tones.",
        techSpecs: [
            { label: "Instrumentación", value: "Limas Rotatorias NiTi" },
            { label: "Visualización", value: "Microscopio Dental" },
            { label: "Precisión", value: "Localizador de Ápices Electrónico" },
        ],
        image: endoHero

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
        image: defaultHero
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
            { title: "Planificación", desc: "Estudio radiológico 3D." },
            { title: "Intervención", desc: "Procedimiento estéril y controlado." },
            { title: "Postoperatorio", desc: "Seguimiento cercano y medicación." },
        ],
        imagePrompt: "Modern dental surgical suite. Clean, sterile, reassuring atmosphere. Not scary. Professional equipment in background.",
        techSpecs: [
            { label: "Seguridad", value: "Quirófano esterilizado" },
            { label: "Diagnóstico", value: "CBCT 3D" },
            { label: "Confort", value: "Sedación Consciente" },
        ],
        image: defaultHero
    },
];
