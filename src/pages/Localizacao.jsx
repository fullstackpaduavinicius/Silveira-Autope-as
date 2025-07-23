import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaCar } from 'react-icons/fa';

const Localizacao = () => {
  return (
    <section className="py-16 bg-cinzaEngenharia/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-azulConfianca mb-2 text-center">Nossa Localização</h2>
        <p className="text-lg text-cinzaEngenharia mb-12 text-center max-w-2xl mx-auto">
          Visite nossa loja física e conheça nosso amplo estoque de peças automotivas
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Informações da Loja */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start mb-6">
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

              <div className="flex items-start mb-6">
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
                    className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    <FaWhatsapp className="mr-2" /> Chat pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Destaque */}
            <div className="bg-azulConfianca text-white p-6 rounded-xl shadow-lg flex items-start">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <FaCar className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Estacionamento Gratuito</h3>
                <p className="opacity-90">
                  Oferecemos área exclusiva para estacionamento de clientes. Traga seu veículo e conte com nossa equipe especializada.
                </p>
              </div>
            </div>

            {/* Imagem da Loja (placeholder - substitua pela imagem real) */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600187102691-1d90c6f2a2b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Fachada da Silveira Auto Peças"
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4">
                <p className="text-sm text-cinzaEngenharia italic">
                  * Imagem ilustrativa - Fachada da nossa loja
                </p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="h-full">
            <div className="bg-white p-6 rounded-xl shadow-lg h-full">
              <div className="aspect-w-16 aspect-h-9 h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1339046995354!2d-37.07953822511533!3d-10.877418521231979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7054cd34277714f%3A0xaca59d33347d01c6!2sAv.%20Gen.%20Eucl%C3%ADdes%20Figueiredo%2C%20105%20-%20Dom%20Luciano%2C%20Aracaju%20-%20SE%2C%2049088-245!5e0!3m2!1spt-BR!2sbr!4v1752698394862!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '500px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <a 
                  href="https://www.google.com/maps/dir//Av.+Gen.+Eucl%C3%ADdes+Figueiredo,+105+-+Dom+Luciano,+Aracaju+-+SE,+49088-245/@-10.8774185,-37.0795382,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7054cd34277714f:0xaca59d33347d01c6!2m2!1d-37.0795382!2d-10.8774185" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-azulTecnicoClaro hover:text-azulConfianca flex items-center transition"
                >
                  <FaMapMarkerAlt className="mr-2" /> Obter rotas
                </a>
                <span className="text-sm text-cinzaEngenharia">
                  Estamos no Dom Luciano, Aracaju/SE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;