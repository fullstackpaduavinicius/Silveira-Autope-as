import { Helmet } from 'react-helmet';
import { FaHistory, FaBullseye, FaHandshake, FaChartLine, FaUsers, FaShieldAlt, FaPhone, FaEnvelope, FaInstagram, FaBuilding } from 'react-icons/fa';

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - Silveira Auto Peças</title>
        <meta name="description" content="Conheça a história da Silveira Auto Peças, sua missão, valores e compromisso com excelência no mercado automotivo desde 2009." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-azulConfianca text-brancoTecnico py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Nossa História, Sua Confiança</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Há mais de 15 anos fornecendo qualidade e excelência no mercado de peças automotivas
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* História */}
          <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-azulConfianca/10 p-3 rounded-full mr-4">
                  <FaHistory className="text-azulConfianca text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-azulConfianca">Nossa História</h2>
              </div>
              <p className="text-lg text-cinzaEngenharia mb-6 leading-relaxed">
                Fundada em <span className="font-semibold">01 de outubro de 2009</span>, a Silveira Auto Peças LTDA surgiu com o propósito de revolucionar o mercado de peças automotivas, trazendo um compromisso inabalável com qualidade e atendimento personalizado.
              </p>
              <p className="text-lg text-cinzaEngenharia mb-6 leading-relaxed">
                Ao longo de mais de uma década, construímos uma reputação sólida baseada na confiança mútua e satisfação de nossos clientes, tornando-nos referência no segmento.
              </p>
              <div className="bg-azulConfianca/5 p-6 rounded-lg border-l-4 border-azulConfianca">
                <p className="italic text-cinzaEngenharia">
                  "Na Silveira Auto Peças, cada peça vendida carrega nossa garantia de qualidade e o compromisso com a satisfação do cliente."
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="bg-prataProfissional/20 rounded-xl h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-azulConfianca/10 to-transparent"></div>
                <div className="h-full flex items-center justify-center">
                  <FaBuilding className="text-azulConfianca/30 text-9xl" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-vermelhoPerformance text-brancoTecnico p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">+15 anos</p>
                <p className="text-sm">no mercado</p>
              </div>
            </div>
          </div>

          {/* Missão e Valores */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
            {/* Missão */}
            <div className="bg-azulConfianca/5 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="bg-azulConfianca/10 p-3 rounded-full mr-4">
                  <FaBullseye className="text-azulConfianca text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-azulConfianca">Missão</h2>
              </div>
              <p className="text-lg text-cinzaEngenharia leading-relaxed">
                Buscar constantemente a evolução, proporcionando excelência no atendimento e oferecendo produtos de <span className="font-semibold text-azulConfianca">alta qualidade</span> que superem as expectativas dos nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-azulConfianca/10 p-3 rounded-full mr-4">
                  <FaHandshake className="text-azulConfianca text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-azulConfianca">Nossos Valores</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-azulTecnicoClaro/10 p-2 rounded-full mr-4 mt-1">
                    <FaChartLine className="text-azulTecnicoClaro" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-cinzaEngenharia">Ética e Transparência</h3>
                    <p className="text-cinzaEngenharia">Base de todos os nossos relacionamentos comerciais</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-azulTecnicoClaro/10 p-2 rounded-full mr-4 mt-1">
                    <FaUsers className="text-azulTecnicoClaro" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-cinzaEngenharia">Valorização dos Colaboradores</h3>
                    <p className="text-cinzaEngenharia">Nossa equipe é nosso maior patrimônio</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-azulTecnicoClaro/10 p-2 rounded-full mr-4 mt-1">
                    <FaShieldAlt className="text-azulTecnicoClaro" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-cinzaEngenharia">Qualidade Garantida</h3>
                    <p className="text-cinzaEngenharia">Produtos e serviços que atendem aos mais altos padrões</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-azulTecnicoClaro/10 p-2 rounded-full mr-4 mt-1">
                    <FaHandshake className="text-azulTecnicoClaro" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-cinzaEngenharia">Satisfação do Cliente</h3>
                    <p className="text-cinzaEngenharia">Nosso sucesso é medido pelo seu contentamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dados da Empresa */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-azulConfianca mb-4">Entre em Contato</h2>
              <p className="text-lg text-cinzaEngenharia max-w-2xl mx-auto">
                Estamos sempre à disposição para melhor atendê-lo. Conheça nossos canais de comunicação:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-azulConfianca to-azulTecnicoClaro text-brancoTecnico p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Informações Legais</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaBuilding className="mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold block">Razão Social:</span>
                      <span>Silveira Auto Peças LTDA</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaShieldAlt className="mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold block">CNPJ:</span>
                      <span>11.071.251/0001-83</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-prataProfissional/30">
                <h3 className="text-2xl font-bold text-azulConfianca mb-6">Contatos</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaPhone className="text-azulTecnicoClaro mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <a href="tel:79998354485" className="hover:underline">
                        <span className="font-semibold block">Telefone:</span>
                        <span>(79) 99835-4485</span>
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaEnvelope className="text-azulTecnicoClaro mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <a href="mailto:ecommerce.silveira@gmail.com" className="hover:underline">
                        <span className="font-semibold block">E-mail:</span>
                        <span>ecommerce.silveira@gmail.com</span>
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaInstagram className="text-azulTecnicoClaro mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <a href="https://www.instagram.com/silveiraautopecas" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <span className="font-semibold block">Instagram:</span>
                        <span>@silveiraautopecas</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;