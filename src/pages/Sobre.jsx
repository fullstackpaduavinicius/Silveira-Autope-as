import { Helmet } from 'react-helmet';

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - Silveira Auto Peças</title>
        <meta name="description" content="Conheça a história da Silveira Auto Peças, sua missão e valores." />
      </Helmet>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-title">Sobre Nós</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-azulConfianca mb-4">Nossa História</h2>
              <p className="text-lg text-cinzaEngenharia mb-4">
                Fundada em 01 de outubro de 2009, a Silveira Auto Peças LTDA vem se destacando no mercado de peças automotivas com um compromisso inabalável com a qualidade e atendimento.
              </p>
              <p className="text-lg text-cinzaEngenharia">
                Ao longo dos anos, construímos uma reputação sólida baseada na confiança e satisfação de nossos clientes.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-azulConfianca mb-4">Missão</h2>
              <p className="text-lg text-cinzaEngenharia">
                Buscar constantemente a evolução, proporcionando excelência no atendimento e oferecendo produtos de alta qualidade.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-azulConfianca mb-4">Valores</h2>
              <ul className="list-disc pl-6 text-lg text-cinzaEngenharia space-y-2">
                <li>Compromisso com a ética e a transparência nos negócios</li>
                <li>Valorização dos colaboradores</li>
                <li>Qualidade em produtos e serviços</li>
                <li>Satisfação total do cliente</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-azulConfianca mb-4">Dados da Empresa</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-bold w-32">CNPJ:</span>
                    <span>11.071.251/0001-83</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold w-32">Telefone:</span>
                    <span>(79) 99835-4485</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold w-32">E-mail:</span>
                    <span>ecommerce.silveira@gmail.com</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold w-32">Instagram:</span>
                    <a href="https://www.instagram.com/silveiraautopecas" target="_blank" rel="noopener noreferrer" className="text-azulTecnicoClaro hover:underline">@silveiraautopecas</a>
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