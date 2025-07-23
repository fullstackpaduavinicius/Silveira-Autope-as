import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaCar } from 'react-icons/fa';
import bannerHome from '../assets/images/banner-localizacao.png'; // Ajuste o caminho conforme necessário

const Localizacao = () => {
  return (
    <section className="py-12 bg-cinzaEngenharia/10">
      {/* Banner Superior com imagem */}
      <div className="w-full h-64 overflow-hidden mb-8">
        <img 
          src={bannerHome} 
          alt="Banner Silveira Auto Peças" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-azulConfianca mb-2 text-center">Nossa Localização</h1>
        <p className="text-lg text-cinzaEngenharia mb-8 text-center max-w-2xl mx-auto">
          Visite nossa loja física e conheça nosso amplo estoque de peças automotivas
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Informações da Loja */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-azulConfianca/10 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-azulConfianca text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cinzaEngenharia mb-1">Endereço</h3>
                  <p className="text-cinzaEngenharia">
                    Av. Gen. Euclídes Figueiredo, 105 - Dom Luciano<br />
                    Aracaju - SE, 49088-245
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <div className="bg-azulConfianca/10 p-3 rounded-full mr-4">
                  <FaClock className="text-azulConfianca text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cinzaEngenharia mb-1">Horário de Funcionamento</h3>
                  <p className="text-cinzaEngenharia">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-azulConfianca/10 p-3 rounded-full mr-4">
                  <FaPhone className="text-azulConfianca text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cinzaEngenharia mb-1">Contato</h3>
                  <p className="text-cinzaEngenharia mb-2">
                    <a href="tel:+5579998354485" className="hover:text-azulTecnicoClaro transition">(79) 99835-4485</a>
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
            <div className="bg-azulConfianca text-white p-5 rounded-lg shadow-md flex items-start">
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

            {/* Foto adicional da loja */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={bannerHome} 
                alt="Interior da Loja Silveira Auto Peças"
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-3 text-center">
                <p className="text-sm text-cinzaEngenharia">Nossa estrutura preparada para melhor atendê-lo</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-white p-4 rounded-lg shadow-md h-full">
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
                className="text-azulTecnicoClaro hover:text-azulConfianca flex items-center transition"
              >
                <FaMapMarkerAlt className="mr-1" /> Obter rotas
              </a>
              <span className="text-cinzaEngenharia">
                Dom Luciano, Aracaju/SE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;