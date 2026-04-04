import endoHero from "../assets/endodoncia-hero.png";
import perioHero from "../assets/periodoncia-hero.png";
import implantHero from "../assets/implantes-dentales.png";

export interface BlogPostData {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    image: string;
    content: string;
}

export const blogPosts: BlogPostData[] = [
    {
        slug: "dolor-muela-masticar-urgencia",
        title: "Me duele una muela al masticar: causas y tratamiento en Barcelona",
        excerpt: "Descubre por qué tienes dolor de muela fuerte al comer y cuándo necesitas visitar a un dentista de urgencia en Barcelona. Diagnóstico digital y sin dolor.",
        date: "15 de Marzo, 2026",
        author: "Dra. Fátima",
        category: "Problemas Dentales",
        readTime: "4 min",
        image: endoHero,
        content: `
      <p class="mb-4">Si te preguntas <strong>"¿por qué me duele una muela al masticar?"</strong>, debes saber que es un síntoma claro de que algo no va bien en tu salud bucodental. Ignorar el dolor al masticar o la sensibilidad al frío en los dientes puede llevar a problemas más severos como una infección dental severa o la pérdida de la pieza.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">Causas principales del dolor de muela fuerte</h2>
      <p class="mb-4">Existen diversas patologías que pueden provocar ese dolor agudo al morder. Como <strong>clínica dental moderna Barcelona</strong>, vemos pacientes todos los días con estas afecciones:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Caries dental profunda:</strong> Cuando la infección llega al nervio dental inflamado, el dolor se vuelve insoportable. Necesitarás una <a href="/tratamientos/endodoncia-barcelona" class="text-brand-primary font-bold hover:underline">endodoncia Barcelona</a> para salvar el diente.</li>
        <li><strong>Muela rota o fracturada:</strong> Un golpe o bruxismo severo puede fisurar una pieza, causando dolor punzante. Dependiendo de la fractura, usamos una reconstrucción dental o coronas estéticas.</li>
        <li><strong>Muela del juicio dolor:</strong> La erupción tardía o impactada de los cordales empuja al resto de dientes. En nuestra área de <a href="/tratamientos/cirugia-oral-barcelona" class="text-brand-primary font-bold hover:underline">cirugía oral Barcelona</a>, evaluamos la viabilidad de la extracción de forma indolora.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">¿Cuándo ir al dentista? Urgencias dentales Barcelona</h2>
      <p class="mb-4">No esperes a que tu cara se hinche o tengas fiebre (infección dental síntomas). Si el dolor interfiere con tu sueño o alimentación, somos tu <strong>dentista urgente Barcelona</strong>. Ofrecemos tratamientos mínimamente invasivos con tecnología dental moderna como el diagnóstico digital dental.</p>
      
      <div class="bg-brand-bg/50 p-6 rounded-xl border border-brand-light/30 my-8">
        <h3 class="font-bold text-lg mb-2">Reserva tu presupuesto dental gratis hoy</h3>
        <p>No busques un <em>"dentista barato Barcelona"</em> a costa de tu salud; elige al <strong>mejor dentista Barcelona</strong> que ofrezca calidad y facilidades. Solicita hoy tu <a href="#contacto" class="text-brand-primary font-bold hover:underline">primera visita gratuita dentista</a> con nosotros.</p>
      </div>

      <p>En Mi Dentista, tu <strong>dentista de confianza Barcelona</strong> y dentista familiar Barcelona, te ofrecemos atención personalizada dental y soluciones definitivas, asegurando que cada intervención sea 100% sin miedo y con los mejores especialistas en odontología del área metropolitana.</p>
    `
    },
    {
        slug: "encias-sangran-cepillarse-causas",
        title: "Encías que sangran al cepillarse: ¿por qué ocurre y solución?",
        excerpt: "El sangrado de encías nunca es normal. Aprende sobre la limpieza dental profesional y cómo tratar la enfermedad periodontal en nuestra clínica de Barcelona.",
        date: "28 de Febrero, 2026",
        author: "Dra. Ángeles",
        category: "Salud Bucal",
        readTime: "5 min",
        image: perioHero,
        content: `
      <p class="mb-4">Si escupes sangre al lavarte los dientes y notas las <strong>encías inflamadas</strong>, tu cuerpo te está avisando. El sangrado al cepillarse es el síntoma principal de la gingivitis y, si no se trata a tiempo, puede derivar en la temida enfermedad periodontal (o piorrea tratamiento).</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">¿Por qué sangran mis encías?</h2>
      <p class="mb-4">La acumulación de placa bacteriana y sarro irrita los tejidos. Muchos pacientes que buscan un <em>dentista cerca de mí</em> o un <em>dentista Eixample / dentista Sants</em> llegan a nuestra consulta preocupados también por el <strong>mal aliento solución</strong> (halitosis) o la movilidad dental.</p>
      
      <p class="mb-4">Para detener este proceso, el primer paso en nuestra clínica es realizar una exhaustiva <a href="/tratamientos/periodoncia-barcelona" class="text-brand-primary font-bold hover:underline">revisión dental y periodoncia</a>. A menudo, una simple <a href="/tratamientos/periodoncia-barcelona" class="text-brand-primary font-bold hover:underline">limpieza dental profesional</a> o una higiene bucal profesional profunda (raspado) salva tus dientes antes de que necesites tratamientos más complejos.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">El enfoque de nuestra Clínica Dental Barcelona Centro</h2>
      <p class="mb-4">Como tu <strong>dentista familiar Barcelona</strong>, utilizamos tratamientos mínimamente invasivos. Nos alejamos de los procedimientos antiguos y dolorosos. Gracias a nuestro uso avanzado del <strong>escáner intraoral</strong> de tecnología dental moderna, evaluamos la pérdida ósea con una radiografía dental digital de alta precisión.</p>

      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Cada cuánto limpiar los dientes:</strong> Como especialistas en odontología, recomendamos venir a vernos 1 o 2 veces al año, dependiendo de tu acidez salival.</li>
        <li><strong>Más allá de las encías:</strong> Curar tus encías también mejora tu estética. Si buscas cómo mejorar la sonrisa general, complementamos la salud gingival con <a href="/tratamientos/blanqueamiento-dental-barcelona" class="text-brand-primary font-bold hover:underline">blanqueamiento dental Barcelona</a> o <a href="/tratamientos/ortodoncia-invisible-barcelona" class="text-brand-primary font-bold hover:underline">ortodoncia invisible</a> para dientes torcidos adultos.</li>
      </ul>

      <p>Es el momento de actuar. Solicita tu <strong>primera visita dental</strong> y un diagnóstico completo para proteger tus dientes originales para siempre.</p>
    `
    },
    {
        slug: "precio-implantes-dentales-barcelona-2026",
        title: "Precio implantes dentales Barcelona 2026: Financiamiento y guía",
        excerpt: "Todo lo que necesitas saber sobre cuánto cuesta un implante dental, la carga inmediata y cómo recuperar los dientes fijos en un día en el centro de Barcelona.",
        date: "10 de Abril, 2026",
        author: "Dra. Fátima",
        category: "Implantología",
        readTime: "6 min",
        image: implantHero,
        content: `
      <p class="mb-4">La <strong>falta de dientes solución</strong> más efectiva y definitiva a largo plazo es, sin duda, la implantología. Sin embargo, muchos pacientes que buscan una <em>clínica odontológica Barcelona</em> tienen tres grandes dudas antes de dar el paso: el <strong>precio implantes dentales</strong>, el miedo al dolor ("<em>duele ponerse implantes</em>"), y la duración del proceso ("<em>cuánto dura un implante dental</em>").</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">Dientes fijos en un día: Implantes sin dolor</h2>
      <p class="mb-4">En nuestra clínica, somos expertos en <a href="/tratamientos/implantes-dentales-barcelona" class="text-brand-primary font-bold hover:underline">implantes dentales Barcelona</a> de altísima calidad. Atrás quedaron las épocas de largos sufrimientos. Gracias al diagnóstico digital dental moderno y sedación, colocar un implante es un proceso rutinario. La técnica de <strong>carga inmediata dental</strong> permite, en muchos casos, que entres sin un diente y salgas el mismo día con una sonrisa nueva.</p>
      
      <p class="mb-4">Si te aterra acudir a una cita médica (<a href="/tratamientos/cirugia-oral-barcelona" class="text-brand-primary font-bold hover:underline">miedo al dentista</a>), te aseguramos que nuestra <strong>atención personalizada dental</strong> te proporcionará un entorno relajado. Nuestros pacientes confirman constantemente que sus tratamientos son <em>implantes sin dolor</em>.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">Opciones de pago dentista y financiación tratamientos dentales</h2>
      <p class="mb-4">Es una realidad que la gente busca un <strong>dentista económico Barcelona</strong> para tratar ausencias múltiples. No obstante, en salud, los materiales baratos terminan saliendo muy caros. Queremos que accedas al <strong>mejor dentista Barcelona</strong> sin que la economía sea un obstáculo.</p>
      
      <div class="bg-brand-bg/50 p-6 rounded-xl border border-brand-light/30 my-8">
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Presupuesto dental gratis:</strong> En tu primera visita gratuita dentista, realizaremos un estudio 3D completo.</li>
          <li><strong>Financiación a tu medida:</strong> Escuchamos tus necesidades y creamos cuotas mensuales que no afecten tu calidad de vida.</li>
          <li><strong>Garantía de calidad:</strong> Solo trabajamos con especialistas en odontología de primer nivel para ofrecerte la mayor durabilidad posible.</li>
        </ul>
      </div>

      <p>Nos encontrarás justo donde lo necesitas, si buscas un <em>dentista en Barcelona centro</em> o un simpático odontólogo cerca tuyo, somos el futuro de la <strong>clínica dental moderna Barcelona</strong> y te estamos esperando. Recupera la capacidad de masticar con fuerza y sonreír sin taparte la boca.</p>
    `
    }
];
