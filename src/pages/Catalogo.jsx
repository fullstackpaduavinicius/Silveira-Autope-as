import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Array de produtos - substitua por seus dados reais
const products = [
  { id: 1, name: 'Pastilha de Freio', category: 'Freios' },
  { id: 2, name: 'Filtro de Óleo', category: 'Filtros' },
  { id: 3, name: 'Amortecedor', category: 'Suspensão' },
  // Adicione mais produtos conforme necessário
];

const Catalogo = () => {
  return (
    <>
      <Helmet>
        <title>Catálogo de Produtos - Silveira Auto Peças</title>
        <meta name="description" content="Catálogo completo de peças automotivas da Silveira Auto Peças." />
      </Helmet>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-title">Catálogo de Produtos</h1>
          
          <div className="mb-8 flex justify-between items-center">
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Buscar peça..." 
                className="input-field pl-10"
              />
              <svg className="absolute left-3 top-3 h-5 w-5 text-prataProfissional" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <select className="input-field ml-4 w-full md:w-48">
              <option value="">Todas categorias</option>
              <option value="Freios">Freios</option>
              <option value="Motor">Motor</option>
              <option value="Suspensão">Suspensão</option>
              <option value="Elétrica">Elétrica</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 bg-prataProfissional bg-opacity-20 flex items-center justify-center">
                  {/* Adicione aqui a imagem do produto */}
                  <span className="text-cinzaEngenharia">Imagem do {product.name}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-azulTécnicoClaro bg-opacity-10 text-azulTécnicoClaro text-xs rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-cinzaEngenharia mb-2">{product.name}</h3>
                  <Link 
                    to={`/produto/${product.id}`} 
                    className="text-azulTécnicoClaro hover:underline font-medium"
                  >
                    Ver detalhes →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-cinzaEngenharia mb-4">
              Não encontrou o que procura? Entre em contato conosco!
            </p>
            <Link to="/contato" className="btn-primary inline-block">Solicitar Orçamento</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalogo;