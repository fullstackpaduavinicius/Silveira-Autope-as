import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FiMapPin, FiBriefcase, FiTag } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerHome from '../assets/images/banner-home.jpeg';
import carrossel1 from '../assets/images/carrosselhome1.jpeg';
import carrossel2 from '../assets/images/carrosselhome2.jpeg';
import carrossel3 from '../assets/images/carrosselhome3.jpeg';

const Home = () => {
  const handleOfertasClick = () => {
    sessionStorage.setItem('scrollToOfertas', 'true');
  };

  return (
    <>
      <Helmet>
        <title>Silveira Auto Peças - Peças Automotivas de Qualidade</title>
        <meta
          name="description"
          content="Comércio de peças e acessórios automotivos desde 2009. Excelência no atendimento e produtos de alta qualidade."
        />
      </Helmet>

      {/* Banner Hero */}
      <div className="relative">
        <div className="h-[75vh] w-full overflow-hidden">
          <img
            src={bannerHome}
            alt="Silveira Auto Peças"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center px-4 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Peças Automotivas de Qualidade
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-white">
              Desde 2009 fornecendo as melhores peças para seu veículo
            </p>
            <Link
              to="/catalogo"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>

      {/* Seção principal com carrossel e cards ajustados */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Carrossel */}
          <div className="w-full lg:w-1/2 h-[600px]">
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              className="h-full"
            >
              <div className="h-[600px]">
                <img 
                  src={carrossel1} 
                  alt="Nossas instalações modernas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[600px]">
                <img 
                  src={carrossel2} 
                  alt="Nosso estoque completo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[600px]">
                <img 
                  src={carrossel3} 
                  alt="Equipe especializada"
                  className="w-full h-full object-cover"
                />
              </div>
            </Carousel>
          </div>

          {/* Cards de ação */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <Link
              to="/localizacao"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col transition-all hover:shadow-lg hover:border-blue-500 group"
            >
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center">
                  <FiMapPin className="text-2xl text-blue-600 mr-3 group-hover:text-blue-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">Encontre sua loja</h3>
                    <p className="text-gray-600 mt-1">
                      A maior variedade de peças e acessórios para você
                    </p>
                  </div>
                </div>
                <span className="text-2xl text-gray-400 group-hover:text-blue-500">→</span>
              </div>
            </Link>

            <Link
              to="/trabalheconosco"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col transition-all hover:shadow-lg hover:border-blue-500 group"
            >
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center">
                  <FiBriefcase className="text-2xl text-blue-600 mr-3 group-hover:text-blue-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">Trabalhe conosco</h3>
                    <p className="text-gray-600 mt-1">
                      Faça parte do time de autopeças que mais cresce no Brasil
                    </p>
                  </div>
                </div>
                <span className="text-2xl text-gray-400 group-hover:text-blue-500">→</span>
              </div>
            </Link>

            <Link
              to="/catalogo#ofertas"
              onClick={handleOfertasClick}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col transition-all hover:shadow-lg hover:border-blue-500 group"
            >
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center">
                  <FiTag className="text-2xl text-blue-600 mr-3 group-hover:text-blue-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">Confira nossas ofertas</h3>
                    <p className="text-gray-600 mt-1">
                      Veja nosso folheto promocional
                    </p>
                  </div>
                </div>
                <span className="text-2xl text-gray-400 group-hover:text-blue-500">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de Super Ofertas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            Super Ofertas Silveira Autopeças
          </h2>
          
          {/* Grid de 9 imagens horizontais (3x3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg overflow-hidden h-48">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span>Imagem de Oferta {item}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carrossel de banners (3 banners) */}
          <div className="mb-12">
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={6000}
            >
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-100 rounded-lg overflow-hidden h-64">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span>Banner Promocional {item}</span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Diferenciais - Versão Modernizada */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-[#00AEEF] bg-[#00AEEF]/10 rounded-full mb-4">
              POR QUE ESCOLHER NOSSA LOJA?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-[#00AEEF]">Diferenciais</span> Exclusivos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os benefícios que só a Silveira Auto Peças oferece para você e seu veículo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cartão 1 - Qualidade */}
            <div className="group relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-[#00AEEF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00AEEF]/20 transition-colors">
                  <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Qualidade Garantida</h3>
                <p className="text-gray-600">
                  Todos os nossos produtos passam por rigorosos testes de qualidade e são certificados pelos principais fabricantes.
                </p>
              </div>
            </div>

            {/* Cartão 2 - Atendimento */}
            <div className="group relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-[#00AEEF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00AEEF]/20 transition-colors">
                  <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento Expert</h3>
                <p className="text-gray-600">
                  Nossa equipe especializada oferece consultoria técnica gratuita para ajudar você a escolher a peça perfeita.
                </p>
              </div>
            </div>

            {/* Cartão 3 - Entrega */}
            <div className="group relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-[#00AEEF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00AEEF]/20 transition-colors">
                  <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Logística Rápida</h3>
                <p className="text-gray-600">
                  Entregamos em todo o Brasil com prazos recordes e rastreamento em tempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de contato */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Precisa de Ajuda?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Nossa equipe está pronta para te ajudar a encontrar a peça certa para seu veículo.
          </p>
          <a
  href="https://wa.me/5579998354485?text=Olá,%20tudo%20bem?%20Estou%20precisando%20de%20ajuda%20com%20peças%20automotivas.%20Poderia%20me%20ajudar?"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition"
>
  Entre em Contato
</a>
        </div>
      </section>

      {/* CSS personalizado para o carrossel */}
      <style jsx global>{`
        .carousel,
        .carousel .slider-wrapper,
        .carousel .slider {
          height: 100%;
        }
        
        .carousel .slide {
          background: transparent;
          height: 100%;
        }
        
        .carousel .control-arrow {
          background: rgba(0,0,0,0.2) !important;
          height: 50px;
          margin-top: -25px;
          top: 50%;
        }
      `}</style>
    </>
  );
};

export default Home;