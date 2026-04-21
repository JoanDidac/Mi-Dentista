import endoHero from "../assets/endodoncia-hero.png";
import perioHero from "../assets/periodoncia-hero.png";
import implantHero from "../assets/implantes-dentales.png";
import esteticaSoft from "../assets/estetica-dental-soft.png";
import blanqueamientoHero from "../assets/blanqueamiento-hero.png";
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
    author: "Dra. Fatima Al Daifi",
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
    author: "Dra. Fatima Al Daifi",
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
    author: "Dra. Fatima Al Daifi",
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
  },
  {
    slug: "nueva-estetica-dental-natural",
    title: "La nueva estética dental natural: por qué cada vez más personas quieren “mejorar” su sonrisa sin que se note",
    excerpt: "La estética dental moderna ya no trata de cambiar tu sonrisa, sino de hacer que parezca tu mejor versión. Descubre por qué menos es más.",
    date: "25 de Abril, 2026",
    author: "Dra. Fatima Al Daifi",
    category: "Estética Dental",
    readTime: "4 min",
    image: esteticaSoft,
    content: `
      <p class="mb-4">Durante años la estética dental se asociaba a dientes extremadamente blancos y perfectos. Hoy la tendencia ha cambiado radicalmente: cada vez más pacientes buscan mejorar su sonrisa sin que nadie note que han realizado un tratamiento.</p>
      <p class="mb-4 text-xl font-medium text-brand-primary">La estética dental moderna ya no trata de cambiar tu sonrisa, sino de hacer que parezca tu mejor versión.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">¿Qué está cambiando en la estética dental?</h2>
      <p class="mb-4">La tendencia actual se basa en tres conceptos:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Naturalidad</strong></li>
        <li><strong>Armonía facial</strong></li>
        <li><strong>Salud antes que estética</strong></li>
      </ul>
      <p class="mb-6">Los pacientes ya no quieren sonrisas artificiales. Quieren verse bien en fotos, videollamadas y redes sociales sin perder su identidad.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">El error más común</h2>
      <p class="mb-4">Muchas personas creen que la única opción estética son las carillas. En realidad, la mayoría de mejoras estéticas se consiguen con:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Higiene profesional avanzada</strong></li>
        <li><strong>Pequeños ajustes de forma</strong></li>
        <li><strong>Blanqueamientos controlados</strong></li>
        <li><strong>Tratamiento de encías</strong></li>
      </ul>
      <p class="mb-6">A veces, cambios mínimos producen resultados enormes.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">Señales de que podrías beneficiarte de una mejora suave</h2>
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li>Evitas sonreír en fotos</li>
        <li>Notas dientes amarillentos pese a cuidarte</li>
        <li>Tus dientes parecen más cortos</li>
        <li>Tu sonrisa no refleja cómo te sientes</li>
      </ul>

      <div class="bg-brand-bg/50 p-6 rounded-xl border border-brand-light/30 my-8">
        <h3 class="font-bold text-lg mb-2">Qué puedes empezar a hacer hoy</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Cambiar a cepillo eléctrico si no lo usas</li>
          <li>Reducir café + vino sin higiene posterior</li>
          <li>Usar hilo dental (clave estética, no solo salud)</li>
        </ul>
      </div>

      <p class="mb-4"><strong>Conclusión:</strong> La mejor estética dental es la que nadie detecta, pero todo el mundo percibe. Y muchas veces empieza con algo tan sencillo como una revisión personalizada.</p>
      <h3 class="font-bold text-lg text-brand-primary mt-6 mb-2">¿Quieres descubrir tu mejor sonrisa?</h3>
      <p>Solicita hoy mismo tu <a href="#contacto" class="text-brand-primary font-bold hover:underline">primera visita gratuita</a> y estudiaremos tu caso sin compromiso.</p>
    `
  },
  {
    slug: "dientes-amarillos-cepillado-explicacion",
    title: "¿Te cepillas bien los dientes pero siguen amarillos? Lo que casi nadie explica",
    excerpt: "Descubrimos por qué el cepillado no siempre blanquea los dientes y los cinco hábitos diarios que amarillean tu sonrisa sin darte cuenta.",
    date: "20 de Abril, 2026",
    author: "Dra. Fatima Al Daifi",
    category: "Estética Dental",
    readTime: "3 min",
    image: blanqueamientoHero,
    content: `
      <p class="mb-4">Una de las frases más escuchadas en consulta es: <em>“Me lavo los dientes todos los días y aun así no están blancos.”</em> Y tiene su explicación.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">El color dental NO depende solo del cepillado</h2>
      <p class="mb-4">El tono de los dientes está influido por:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Genética</li>
        <li>Grosor del esmalte</li>
        <li>Alimentación</li>
        <li>Medicamentos antiguos</li>
        <li>Edad</li>
      </ul>
      <p class="mb-6 text-lg font-medium text-brand-primary">El cepillado limpia, pero no cambia el color interno del diente.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">5 hábitos diarios que amarillean sin darte cuenta</h2>
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li>Café prolongado durante horas</li>
        <li>Té oscuro</li>
        <li>Enjuagues muy pigmentados</li>
        <li>Cepillado inmediato tras comer ácido</li>
        <li>Falta de limpiezas profesionales</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">El gran mito del blanqueamiento</h2>
      <p class="mb-4">No todos los dientes se vuelven “blanco Hollywood”. El objetivo real es conseguir <strong>un tono más luminoso y saludable</strong>. Los productos virales de internet rara vez ofrecen resultados reales e incluso pueden dañar tu esmalte.</p>

      <div class="bg-brand-bg/50 p-6 rounded-xl border border-brand-light/30 my-8">
        <h3 class="font-bold text-lg mb-2">Qué funciona realmente</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Una higiene profesional previa a cualquier tratamiento</li>
          <li>Un diagnóstico personalizado en clínica</li>
          <li>Blanqueamiento dental controlado por profesionales</li>
        </ul>
      </div>

      <p class="mb-4"><strong>Conclusión:</strong> No es que te cepilles mal. Simplemente tu sonrisa necesita algo más que pasta dental.</p>
      <p>Si quieres recuperar la frescura y luminosidad natural de tus dientes, <a href="#contacto" class="text-brand-primary font-bold hover:underline">agenda tu primera visita gratuita</a> hoy mismo. Evaluaremos tu caso de forma personalizada.</p>
    `
  },
  {
    slug: "enemigo-invisible-sonrisa-biofilm-dental",
    title: "El enemigo invisible de tu sonrisa: el biofilm dental",
    excerpt: "La odontología actual ha descubierto que las manchas, mal aliento y sangrado tienen un origen común: el biofilm dental.",
    date: "15 de Abril, 2026",
    author: "Dra. Fatima Al Daifi",
    category: "Salud Bucal",
    readTime: "4 min",
    image: perioHero,
    content: `
      <p class="mb-4 text-gray-500 font-semibold italic">(Tema MUY trending en odontología actual)</p>
      <p class="mb-4">Durante años hablamos de placa bacteriana. Hoy sabemos que existe algo más complejo: <strong>el biofilm dental</strong>. Es una comunidad bacteriana organizada que no desaparece solo con el cepillado tradicional.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">Qué es el biofilm</h2>
      <p class="mb-4">Es una capa microscópica de bacterias fuertemente adherida a los dientes y encías. Es el responsable oculto de:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Gingivitis (inflamación de encías)</li>
        <li>Mal aliento constante</li>
        <li>Manchas persistentes</li>
        <li>Inflamación crónica</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">Por qué el cepillado no siempre basta</h2>
      <p class="mb-4">El biofilm madura y se atrinchera en zonas donde el cepillo manual o eléctrico casi no llega: entre los dientes, debajo de la línea de la encía y en las zonas muy posteriores. Por eso muchas personas con buena higiene siguen teniendo problemas bucodentales recurrentes.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-brand-darkest">La revolución actual en higiene dental</h2>
      <p class="mb-4">La odontología moderna intenta evitar problemas mediante la prevención proactiva en lugar de la reparación reactiva. Las nuevas limpiezas profesionales se enfocan en:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Eliminar el biofilm guiado:</strong> Detectar y destruir estas colonias destructivas</li>
        <li><strong>Tratamientos más cómodos:</strong> Usar tecnologías menos invasivas</li>
        <li><strong>Prevención estructural:</strong> Evitar la formación de nidos de infección en el futuro</li>
      </ul>

      <div class="bg-brand-bg/50 p-6 rounded-xl border border-brand-light/30 my-8">
        <h3 class="font-bold text-lg mb-2">Hábitos que lo cambian todo</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>El uso del hilo interdental diario</li>
          <li>La incorporación de un irrigador oral</li>
          <li>Las revisiones periódicas anuales</li>
          <li>Una higiene profesional personalizada en clínica</li>
        </ul>
      </div>

      <p class="mb-4"><strong>Conclusión:</strong> La higiene dental del futuro no trata de limpiar más fuerte. Trata de limpiar mejor.</p>

      <p>No dejes que el biofilm progrese. Ven a vernos para una profunda <a href="/tratamientos/periodoncia-barcelona" class="text-brand-primary font-bold hover:underline">revisión dental completa (1ª visita gratis)</a> y protege tu salud a futuro.</p>
    `
  }
];
