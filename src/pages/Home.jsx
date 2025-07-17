import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import bannerHome from '../assets/images/banner-home.jpeg';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Silveira Auto Peças - Peças Automotivas de Qualidade</title>
        <meta
          name="description"
          content="Comércio de peças e acessórios automotivos desde 2009. Excelência no atendimento e produtos de alta qualidade."
        />
      </Helmet>

      {/* Banner Hero com imagem alta e responsiva */}
      <div className="relative">
        <div className="h-[75vh] w-full overflow-hidden">
          <img
            src={bannerHome}
            alt="Silveira Auto Peças - Melhores peças automotivas"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conteúdo sobreposto centralizado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg leading-tight">
              Peças Automotivas de Qualidade
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-white drop-shadow-md">
              Desde 2009 fornecendo as melhores peças para seu veículo
            </p>
            <Link
              to="/catalogo"
              className="inline-block bg-vermelhoPerformance hover:bg-vermelhoPerformance/90 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>

      {/* Diferenciais */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Nossos Diferenciais</h2>
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
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
              >
                <div className="text-vermelhoPerformance text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-cinzaEngenharia text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de contato */}
      <section className="bg-prataProfissional bg-opacity-20 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Precisa de Ajuda?</h2>
          <p className="text-lg mb-8">
            Nossa equipe está pronta para te ajudar a encontrar a peça certa para seu veículo.
          </p>
          <Link
            to="/contato"
            className="inline-block bg-vermelhoPerformance hover:bg-vermelhoPerformance/90 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
