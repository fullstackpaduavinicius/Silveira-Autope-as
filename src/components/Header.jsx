import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaCar, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/LOGO_SILVEIRA.png';
import bannerHome from '../assets/images/banner-localizacao.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLocationModal = () => {
    setIsLocationModalOpen(!isLocationModalOpen);
  };

  return (
    <>
      <Helmet>
        <title>Silveira Auto Peças - Peças Automotivas de Qualidade</title>
        <meta name="description" content="Comércio de peças e acessórios automotivos desde 2009. Excelência no atendimento e produtos de alta qualidade." />
      </Helmet>

      <header className="bg-blue-400 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={Logo} 
              alt="Silveira Auto Peças" 
              className="h-12 md:h-14"
            />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-blue-100 transition">Home</Link></li>
              <li className="relative group">
                <button className="hover:text-blue-100 transition flex items-center">
                  Peças <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md p-2 z-10 min-w-[200px] grid grid-cols-2 gap-2">
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Baterias</Link>
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Óleo de Motor</Link>
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Pastilhas de Freio</Link>
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Filtro de Óleo</Link>
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Amortecedores</Link>
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Palhetas</Link>
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Lâmpadas</Link>
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Radiadores</Link>
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Velas Automotivas</Link>
                  <Link to="/catalogo" className="block px-4 py-2 hover:bg-gray-100 rounded">Discos de Freio</Link>
                </div>
              </li>
              <li><Link to="/sobre" className="hover:text-blue-100 transition">Sobre Nós</Link></li>
              <li><Link to="/trabalheconosco" className="text-yellow-300 font-semibold hover:text-yellow-200">Trabalhe Conosco</Link></li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Botão "Encontre nossas lojas" */}
            <button
              onClick={toggleLocationModal}
              className="hidden md:flex items-center space-x-1 bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Lojas</span>
            </button>

            {/* Ícone do Instagram */}
            <a href="https://www.instagram.com/silveiraautopecas" target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Botão do menu mobile */}
            <button 
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-500">
            <nav className="container mx-auto px-4 py-2">
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="block py-2 hover:text-blue-100 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/catalogo" 
                    className="block py-2 hover:text-blue-100 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Todas as Peças
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      toggleLocationModal();
                    }}
                    className="block py-2 hover:text-blue-100 transition flex items-center w-full text-left"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Encontre Nossas Lojas
                  </button>
                </li>
                <li>
                  <Link 
                    to="/sobre" 
                    className="block py-2 hover:text-blue-100 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/trabalheconosco" 
                    className="block py-2 text-yellow-300 font-semibold hover:text-yellow-200 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Trabalhe Conosco
                  </Link>
                </li>
                <li className="pt-2 border-t border-blue-300">
                  <a 
                    href="https://www.instagram.com/silveiraautopecas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center py-2 hover:text-blue-100 transition"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Modal de Localização */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-75" 
              onClick={toggleLocationModal}
              aria-hidden="true"
            ></div>

            {/* Modal Content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
              <div className="bg-white">
                {/* Header do Modal */}
                <div className="flex justify-between items-center border-b border-gray-200 p-4">
                  <h3 className="text-2xl font-bold text-blue-400">Nossa Localização</h3>
                  <button
                    onClick={toggleLocationModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>

                {/* Conteúdo do Modal */}
                <div className="p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Informações da Loja */}
                    <div className="space-y-6">
                      <div className="w-full h-48 overflow-hidden mb-4">
                        <img 
                          src={bannerHome} 
                          alt="Banner Silveira Auto Peças" 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-start mb-4">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <FaMapMarkerAlt className="text-blue-400 text-xl" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Endereço</h3>
                            <p className="text-gray-600">
                              Av. Gen. Euclídes Figueiredo, 105 - Dom Luciano<br />
                              Aracaju - SE, 49088-245
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start mb-4">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <FaClock className="text-blue-400 text-xl" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Horário de Funcionamento</h3>
                            <p className="text-gray-600">
                              Segunda a Sexta: 8h às 18h<br />
                              Sábado: 8h às 12h<br />
                              Domingo: Fechado
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <FaPhone className="text-blue-400 text-xl" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Contato</h3>
                            <p className="text-gray-600 mb-2">
                              <a href="tel:+5579998354485" className="hover:text-blue-400 transition">(79) 99835-4485</a>
                            </p>
                            <a 
                              href="https://wa.me/5579998354485" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm"
                            >
                              <FaWhatsapp className="mr-2" /> Chat pelo WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Destaque */}
                      <div className="bg-blue-400 text-white p-5 rounded-lg flex items-start">
                        <div className="bg-white/20 p-3 rounded-full mr-4">
                          <FaCar className="text-xl" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">Estacionamento Gratuito</h3>
                          <p className="opacity-90 text-sm">
                            Área exclusiva para clientes com segurança e comodidade.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mapa */}
                    <div className="bg-gray-50 p-4 rounded-lg h-full">
                      <div className="aspect-w-16 aspect-h-9 h-full">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1339046995354!2d-37.07953822511533!3d-10.877418521231979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7054cd34277714f%3A0xaca59d33347d01c6!2sAv.%20Gen.%20Eucl%C3%ADdes%20Figueiredo%2C%20105%20-%20Dom%20Luciano%2C%20Aracaju%20-%20SE%2C%2049088-245!5e0!3m2!1spt-BR!2sbr!4v1752698394862!5m2!1spt-BR!2sbr" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0, minHeight: '500px' }} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded-lg"
                          title="Localização da Silveira Auto Peças"
                        ></iframe>
                      </div>
                      <div className="mt-3 flex justify-between items-center text-sm">
                        <a 
                          href="https://www.google.com/maps/dir//Av.+Gen.+Eucl%C3%ADdes+Figueiredo,+105+-+Dom+Luciano,+Aracaju+-+SE,+49088-245/@-10.8774185,-37.0795382,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7054cd34277714f:0xaca59d33347d01c6!2m2!1d-37.0795382!2d-10.8774185" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center transition"
                        >
                          <FaMapMarkerAlt className="mr-1" /> Obter rotas
                        </a>
                        <span className="text-gray-600">
                          Dom Luciano, Aracaju/SE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer do Modal */}
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={toggleLocationModal}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-500 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;