import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// Array de produtos - substitua por seus dados reais
const products = [
  { id: 1, name: 'Pastilha de Freio', category: 'Freios' },
  { id: 2, name: 'Filtro de Óleo', category: 'Filtros' },
  { id: 3, name: 'Amortecedor', category: 'Suspensão' },
  // Adicione mais produtos conforme necessário
];

const Catalogo = () => {
  // Efeito para rolar até o topo quando a página carregar
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Catálogo de Produtos - Silveira Auto Peças</title>
        <meta name="description" content="Catálogo completo de peças automotivas da Silveira Auto Peças." />
      </Helmet>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Catálogo de Produtos</h1>

          {/* Filtros e busca */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Buscar peça..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <select className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Todas categorias</option>
              <option value="Freios">Freios</option>
              <option value="Motor">Motor</option>
              <option value="Suspensão">Suspensão</option>
              <option value="Elétrica">Elétrica</option>
            </select>
          </div>
          
          {/* Lista de todos os produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500">Imagem do {product.name}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <Link 
                    to={`/produto/${product.id}`} 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Ver detalhes →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Não encontrou o que procura? Entre em contato conosco!
            </p>
            <Link to="/contato" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition">
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogo;