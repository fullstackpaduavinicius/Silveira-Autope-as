// src/components/TrabalheConosco.jsx
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

export default function TrabalheConosco() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await emailjs.sendForm(
        'service_your_service_id', // Substitua pelo seu service ID do EmailJS
        'template_your_template_id', // Substitua pelo seu template ID
        formRef.current,
        'your_user_id' // Substitua pelo seu user ID do EmailJS
      );
      
      setSubmitStatus({ success: true, message: 'Currículo enviado com sucesso!' });
      reset();
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setSubmitStatus({ success: false, message: 'Erro ao enviar currículo. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-prataProfissional/10 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Trabalhe Conosco - Silveira Auto Peças</title>
        <meta name="description" content="Envie seu currículo para fazer parte da equipe Silveira Auto Peças." />
      </Helmet>
      
      <div className="max-w-3xl mx-auto bg-brancoTecnico rounded-xl shadow-lg overflow-hidden">
        <div className="bg-azulConfianca py-6 px-6 sm:px-10">
          <h1 className="text-3xl font-bold text-brancoTecnico">Trabalhe Conosco</h1>
          <p className="mt-2 text-prataProfissional">
            Faça parte do nosso time! Envie seu currículo e vamos avaliar sua candidatura.
          </p>
        </div>
        
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="py-8 px-6 sm:px-10 space-y-6"
        >
          {submitStatus && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.success
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-cinzaEngenharia">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                {...register('nome', { required: 'Nome é obrigatório' })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azulTecnicoClaro focus:ring focus:ring-azulTecnicoClaro/50 ${
                  errors.nome ? 'border-red-500' : ''
                }`}
              />
              {errors.nome && (
                <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cinzaEngenharia">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register('email', {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'E-mail inválido',
                  },
                })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azulTecnicoClaro focus:ring focus:ring-azulTecnicoClaro/50 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-cinzaEngenharia">
                Telefone *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                {...register('telefone', { required: 'Telefone é obrigatório' })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azulTecnicoClaro focus:ring focus:ring-azulTecnicoClaro/50 ${
                  errors.telefone ? 'border-red-500' : ''
                }`}
              />
              {errors.telefone && (
                <p className="mt-1 text-sm text-red-600">{errors.telefone.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="cargo" className="block text-sm font-medium text-cinzaEngenharia">
                Cargo de Interesse *
              </label>
              <select
                id="cargo"
                name="cargo"
                {...register('cargo', { required: 'Selecione um cargo' })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azulTecnicoClaro focus:ring focus:ring-azulTecnicoClaro/50 ${
                  errors.cargo ? 'border-red-500' : ''
                }`}
              >
                <option value="">Selecione...</option>
                <option value="Vendedor">Vendedor</option>
                <option value="Mecânico">Mecânico</option>
                <option value="Atendente">Atendente</option>
                <option value="Gerente">Gerente</option>
                <option value="Estoquista">Estoquista</option>
                <option value="Outro">Outro</option>
              </select>
              {errors.cargo && (
                <p className="mt-1 text-sm text-red-600">{errors.cargo.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-cinzaEngenharia">
              Mensagem/Carta de Apresentação
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              {...register('mensagem')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azulTecnicoClaro focus:ring focus:ring-azulTecnicoClaro/50"
              placeholder="Conte um pouco sobre você e suas qualificações..."
            />
          </div>
          
          <div>
            <label htmlFor="curriculo" className="block text-sm font-medium text-cinzaEngenharia">
              Anexar Currículo (PDF ou DOC) *
            </label>
            <input
              type="file"
              id="curriculo"
              name="curriculo"
              accept=".pdf,.doc,.docx"
              {...register('curriculo', { required: 'Currículo é obrigatório' })}
              className={`mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-azulTecnicoClaro file:text-brancoTecnico hover:file:bg-azulConfianca ${
                errors.curriculo ? 'border-red-500' : ''
              }`}
            />
            {errors.curriculo && (
              <p className="mt-1 text-sm text-red-600">{errors.curriculo.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Tamanho máximo: 5MB. Formatos aceitos: PDF, DOC, DOCX.
            </p>
          </div>
          
          <div className="flex items-center">
            <input
              id="consentimento"
              name="consentimento"
              type="checkbox"
              {...register('consentimento', {
                required: 'Você deve concordar com o tratamento de dados',
              })}
              className="h-4 w-4 rounded border-gray-300 text-azulTecnicoClaro focus:ring-azulTecnicoClaro"
            />
            <label htmlFor="consentimento" className="ml-2 block text-sm text-cinzaEngenharia">
              Concordo com o tratamento dos meus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD). *
            </label>
          </div>
          {errors.consentimento && (
            <p className="text-sm text-red-600">{errors.consentimento.message}</p>
          )}
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-brancoTecnico bg-azulConfianca hover:bg-azulTecnicoClaro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azulTecnicoClaro disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : 'Enviar Currículo'}
            </button>
          </div>
        </form>
      </div>
      
      <div className="max-w-3xl mx-auto mt-8 bg-brancoTecnico rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-azulConfianca">Por que trabalhar na Silveira Auto Peças?</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-azulTecnicoClaro/10 p-2 rounded-full">
                <svg className="h-6 w-6 text-azulTecnicoClaro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-cinzaEngenharia">Ambiente de Trabalho</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Oferecemos um ambiente profissional e acolhedor, com oportunidades de crescimento contínuo.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-azulTecnicoClaro/10 p-2 rounded-full">
                <svg className="h-6 w-6 text-azulTecnicoClaro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-cinzaEngenharia">Benefícios</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Pacote de benefícios competitivo, incluindo vale-refeição, plano de saúde e bonificações.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-azulTecnicoClaro/10 p-2 rounded-full">
                <svg className="h-6 w-6 text-azulTecnicoClaro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-cinzaEngenharia">Desenvolvimento</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Programas de treinamento e desenvolvimento profissional para impulsionar sua carreira.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}