import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const Contato = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const formatPhoneNumber = (phone) => {
    // Remove tudo que não é dígito
    const cleaned = ('' + phone).replace(/\D/g, '');
    
    // Formatação básica para números brasileiros
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `
*Nova mensagem de contato - Silveira Auto Peças*

*Nome:* ${data.name}
*E-mail:* ${data.email}
${data.phone ? `*Telefone:* ${formatPhoneNumber(data.phone)}\n` : ''}
*Assunto:* ${data.subject}
    
*Mensagem:*
${data.message}
    
_Esta mensagem foi enviada através do formulário de contato do site._
    `.trim();

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número de WhatsApp da empresa
    const whatsappNumber = '5579998354485';
    
    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    // Simula o envio (você pode remover isso em produção)
    setTimeout(() => {
      setSubmitStatus('success');
      reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contato - Silveira Auto Peças</title>
        <meta name="description" content="Entre em contato com a Silveira Auto Peças para orçamentos e informações sobre peças automotivas." />
      </Helmet>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-title">Entre em Contato</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-azulConfianca mb-6">Formulário de Contato</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-cinzaEngenharia mb-1">Nome Completo</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    className="input-field"
                  />
                  {errors.name && <p className="text-vermelhoPerformance text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-cinzaEngenharia mb-1">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido'
                      }
                    })}
                    className="input-field"
                  />
                  {errors.email && <p className="text-vermelhoPerformance text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-cinzaEngenharia mb-1">Telefone (com DDD)</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      pattern: {
                        value: /^(\d{10,11})$/,
                        message: 'Digite um telefone válido com DDD (10 ou 11 dígitos)'
                      }
                    })}
                    className="input-field"
                    placeholder="(79) 99999-9999"
                  />
                  {errors.phone && <p className="text-vermelhoPerformance text-sm mt-1">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-cinzaEngenharia mb-1">Assunto</label>
                  <select
                    id="subject"
                    {...register('subject', { required: 'Assunto é obrigatório' })}
                    className="input-field"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Orçamento">Solicitar Orçamento</option>
                    <option value="Dúvida">Tirar Dúvidas</option>
                    <option value="Reclamação">Reclamação</option>
                    <option value="Elogio">Elogio</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {errors.subject && <p className="text-vermelhoPerformance text-sm mt-1">{errors.subject.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-cinzaEngenharia mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    className="input-field"
                    placeholder="Descreva aqui sua solicitação com detalhes..."
                  ></textarea>
                  {errors.message && <p className="text-vermelhoPerformance text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 2.396 0 4.6-1.08 6.06-2.983s2.204-4.394 2.203-7.175c0-2.781-1.08-5.337-2.943-7.082-1.862-1.745-4.307-2.672-6.829-2.672-2.532 0-4.971.932-6.828 2.672-1.869 1.754-2.871 4.293-2.871 7.069 0 1.475.302 2.88.899 4.282l.784-2.821.054-.225.145-.576.195-.744.24-.896.113-.432c.04-.155.08-.31.119-.466.176-.676.37-1.418.635-2.178l1.588 5.911z"/>
                      </svg>
                      Enviar via WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-azulConfianca mb-6">Informações de Contato</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-cinzaEngenharia mb-4">Dados da Empresa</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <svg className="h-6 w-6 text-azulTecnicoClaro mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(79) 99835-4485</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-azulTecnicoClaro mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>ecommerce.silveira@gmail.com</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-azulTecnicoClaro mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>CNPJ: 11.071.251/0001-83</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-cinzaEngenharia mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/silveiraautopecas" target="_blank" rel="noopener noreferrer" className="bg-azulConfianca text-white p-3 rounded-full hover:bg-azulTecnicoClaro transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-cinzaEngenharia mb-4">Localização</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1339046995354!2d-37.07953822511533!3d-10.877418521231979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7054cd34277714f%3A0xaca59d33347d01c6!2sAv.%20Gen.%20Eucl%C3%ADdes%20Figueiredo%2C%20105%20-%20Dom%20Luciano%2C%20Aracaju%20-%20SE%2C%2049088-245!5e0!3m2!1spt-BR!2sbr!4v1752698394862!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;