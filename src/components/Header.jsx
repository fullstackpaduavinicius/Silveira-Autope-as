import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Logo from '../assets/images/LOGO_SILVEIRA.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-azulConfianca text-brancoTecnico shadow-md">
      <Helmet>
        <title>Silveira Auto Peças - Peças Automotivas de Qualidade</title>
        <meta name="description" content="Comércio de peças e acessórios automotivos desde 2009. Excelência no atendimento e produtos de alta qualidade." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={Logo} 
            alt="Silveira Auto Peças" 
            className="h-16 md:h-20"
          />
        </Link>
        
        {/* Menu Desktop - hidden em mobile */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-prataProfissional transition">Home</Link></li>
            <li><Link to="/sobre" className="hover:text-prataProfissional transition">Sobre Nós</Link></li>
            <li><Link to="/catalogo" className="hover:text-prataProfissional transition">Catálogo</Link></li>
            <li><Link to="/contato" className="hover:text-prataProfissional transition">Contato</Link></li>
            <li><Link to="/TrabalheConosco" className="hover:text-prataProfissional transition">Trabalhe Conosco</Link></li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
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
        <div className="md:hidden bg-azulConfiancaDarker">
          <nav className="container mx-auto px-4 py-2">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 hover:text-prataProfissional transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="block py-2 hover:text-prataProfissional transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link 
                  to="/catalogo" 
                  className="block py-2 hover:text-prataProfissional transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="block py-2 hover:text-prataProfissional transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link 
                  to="/TrabalheConosco" 
                  className="block py-2 hover:text-prataProfissional transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trabalhe Conosco
                </Link>
              </li>
              <li className="pt-2 border-t border-azulConfianca">
                <a 
                  href="https://www.instagram.com/silveiraautopecas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center py-2 hover:text-prataProfissional transition"
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
  );
};

export default Header;