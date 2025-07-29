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
    // Armazena a intenção de rolar para ofertas
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
          {/* Carrossel - agora com altura fixa */}
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

          {/* Cards de ação - agora com altura igual ao carrossel */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
              <div className="flex items-center mb-3">
                <FiMapPin className="text-xl text-gray-700 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Encontre sua loja</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A maior variedade de peças e acessórios para você
              </p>
              <div className="mt-auto">
                <Link
                  to="/localizacao"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition w-full text-center"
                >
                  Localizar Lojas
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
              <div className="flex items-center mb-3">
                <FiBriefcase className="text-xl text-gray-700 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Trabalhe conosco</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Faça parte do time de autopeças que mais cresce no Brasil
              </p>
              <div className="mt-auto">
                <Link
                  to="/trabalheconosco"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition w-full text-center"
                >
                  Ver Vagas
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
              <div className="flex items-center mb-3">
                <FiTag className="text-xl text-gray-700 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Confira nossas ofertas</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Veja nosso folheto promocional
              </p>
              <div className="mt-auto">
                <Link
                  to="/catalogo#ofertas"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition w-full text-center"
                  onClick={handleOfertasClick}
                >
                  Ver Ofertas
                </Link>
              </div>
            </div>
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
                  {/* Espaço reservado para imagem de oferta */}
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
                    {/* Espaço reservado para banner promocional */}
                    <span>Banner Promocional {item}</span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Qualidade Garantida',
                text: 'Produtos testados e aprovados pelos melhores mecânicos',
              },
              {
                title: 'Atendimento Personalizado',
                text: 'Profissionais capacitados para entender sua necessidade',
              },
              {
                title: 'Entrega Rápida',
                text: 'Entregamos em todo o país com prazos reduzidos',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200"
              >
                <div className="text-gray-700 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
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
          <Link
            to="/contato"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Entre em Contato
          </Link>
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