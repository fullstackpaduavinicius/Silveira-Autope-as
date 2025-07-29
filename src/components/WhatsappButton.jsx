import { useState, useEffect } from 'react';

const WhatsappButton = () => {
  const phoneNumber = "55079998354485";
  const message = "Olá, gostaria de mais informações sobre os produtos da Silveira Auto Peças.";
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // First show after 1 minute (60000ms)
    const initialTimeout = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 10000);
    }, 60000);

    // Then every 1 minute (60000ms)
    const interval = setInterval(() => {
      setShowTooltip(true);
      const timeout = setTimeout(() => {
        setShowTooltip(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }, 60000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative mr-3 w-56 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-3 animate-fadeInOut">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.515 5.132 1.521 5.403.005 9.802-4.4 9.807-9.805.005-5.403-4.4-9.801-9.804-9.801-5.403 0-9.801 4.4-9.806 9.805-.001 2.031.69 3.991 1.946 5.532l-.999 3.648 3.742-.981zm11.43-7.418c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Alguma dúvida? Nos chame no WhatsApp</span>
          </div>
          <div className="absolute right-0 top-1/2 w-4 h-4 bg-white transform -rotate-45 -translate-y-1/2 translate-x-1"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.515 5.132 1.521 5.403.005 9.802-4.4 9.807-9.805.005-5.403-4.4-9.801-9.804-9.801-5.403 0-9.801 4.4-9.806 9.805-.001 2.031.69 3.991 1.946 5.532l-.999 3.648 3.742-.981zm11.43-7.418c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  );
};

export default WhatsappButton;