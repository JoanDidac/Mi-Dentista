
const Footer = () => {
  return (
    <footer className="bg-brand-darkest text-white py-12 border-t border-brand-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold font-montserrat mb-4">Mi Dentista</h2>
            <p className="text-gray-300 max-w-sm">
              Cuidando sonrisas en Barcelona con tecnología avanzada y un trato cercano. Especialistas en hacer que los niños amen ir al dentista.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-brand-light transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-light transition-colors">Tratamientos</a></li>
              <li><a href="#nosotros" className="hover:text-brand-light transition-colors">Equipo</a></li>
              <li><a href="#contacto" className="hover:text-brand-light transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Horario</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between"><span>Lun - Vie</span> <span>9:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Sábados</span> <span>10:00 - 14:00</span></li>
              <li className="flex justify-between text-gray-500"><span>Domingos</span> <span>Cerrado</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2024 Mi Dentista Barcelona. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
