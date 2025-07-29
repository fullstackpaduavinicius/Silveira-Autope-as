import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Array de categorias e produtos
const categories = [
  'Baterias',
  'Óleo de Motor',
  'Pastilhas de Freio',
  'Amortecedores',
  'Palhetas',
  'Lâmpadas',
  'Radiadores',
  'Velas Automotivas',
  'Disco de Freio'
];

const products = [
  { 
    id: 1, 
    name: 'Pastilha de Freio Dianteira', 
    category: 'Pastilhas de Freio',
    description: 'Pastilhas de freio de alta qualidade para diversos modelos',
    image: 'https://via.placeholder.com/300x200?text=Pastilha+Freio'
  },
  { 
    id: 2, 
    name: 'Bateria 60Ah', 
    category: 'Baterias',
    description: 'Bateria automotiva 12V 60Ah para carros populares',
    image: 'https://via.placeholder.com/300x200?text=Bateria+60Ah'
  },
  { 
    id: 3, 
    name: 'Óleo Motor 5W30', 
    category: 'Óleo de Motor',
    description: 'Óleo sintético para motor com proteção avançada',
    image: 'https://via.placeholder.com/300x200?text=Oleo+5W30'
  },
  { 
    id: 4, 
    name: 'Amortecedor Dianteiro', 
    category: 'Amortecedores',
    description: 'Amortecedor original para suspensão dianteira',
    image: 'https://via.placeholder.com/300x200?text=Amortecedor'
  },
  { 
    id: 5, 
    name: 'Palheta Limpador', 
    category: 'Palhetas',
    description: 'Palhetas de limpador com borracha de alta durabilidade',
    image: 'https://via.placeholder.com/300x200?text=Palheta'
  },
  { 
    id: 6, 
    name: 'Lâmpada H7', 
    category: 'Lâmpadas',
    description: 'Lâmpada para farol principal 55W',
    image: 'https://via.placeholder.com/300x200?text=Lampada+H7'
  },
  { 
    id: 7, 
    name: 'Radiador Alumínio', 
    category: 'Radiadores',
    description: 'Radiador em alumínio para diversos modelos',
    image: 'https://via.placeholder.com/300x200?text=Radiador'
  },
  { 
    id: 8, 
    name: 'Vela Iridium', 
    category: 'Velas Automotivas',
    description: 'Vela de ignição com tecnologia iridium',
    image: 'https://via.placeholder.com/300x200?text=Vela+Iridium'
  },
  { 
    id: 9, 
    name: 'Disco de Freio', 
    category: 'Disco de Freio',
    description: 'Disco de freio ventilado para maior dissipação de calor',
    image: 'https://via.placeholder.com/300x200?text=Disco+Freio'
  },
];

// Dados para os seletores
const carBrands = ['Volkswagen', 'Fiat', 'Chevrolet', 'Ford', 'Toyota', 'Honda', 'Hyundai'];
const carModels = {
  Volkswagen: ['Gol', 'Polo', 'Virtus', 'T-Cross', 'Nivus'],
  Fiat: ['Argo', 'Mobi', 'Cronos', 'Toro', 'Strada'],
  Chevrolet: ['Onix', 'Prisma', 'Cruze', 'Tracker', 'S10'],
  Ford: ['Ka', 'Fiesta', 'EcoSport', 'Ranger'],
  Toyota: ['Corolla', 'Etios', 'Hilux', 'SW4'],
  Honda: ['Civic', 'Fit', 'HR-V', 'CR-V'],
  Hyundai: ['HB20', 'Creta', 'Tucson', 'Santa Fé']
};
const carYears = {
  Volkswagen: [2023, 2022, 2021, 2020, 2019],
  Fiat: [2023, 2022, 2021, 2020, 2019],
  Chevrolet: [2023, 2022, 2021, 2020, 2019],
  Ford: [2023, 2022, 2021, 2020, 2019],
  Toyota: [2023, 2022, 2021, 2020, 2019],
  Honda: [2023, 2022, 2021, 2020, 2019],
  Hyundai: [2023, 2022, 2021, 2020, 2019]
};

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  
  // Efeito para rolar até o topo quando a página carregar
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Filtrar produtos
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Abrir modal de verificação
  const openCheckModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Impede scroll da página principal
  };

  // Fechar modal
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Restaura scroll da página principal
  };

  // Redirecionar para WhatsApp
  const checkCompatibility = () => {
    if (selectedBrand && selectedModel && selectedYear && selectedProduct) {
      const message = `Oi, tudo bem? Estou procurando ${selectedProduct.name} para meu carro ${selectedBrand} ${selectedModel} ${selectedYear}.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/+5579998354485?text=${encodedMessage}`, '_blank');
      closeModal();
    }
  };

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <select 
              className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Todas categorias</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {/* Lista de produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button 
                    onClick={() => openCheckModal(product)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition mb-2"
                  >
                    Verifique modelo do seu carro
                  </button>
                  <Link 
                    to={`/produto/${product.id}`} 
                    className="text-blue-600 hover:underline font-medium block text-center"
                  >
                    Ver detalhes →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Nenhum produto encontrado com os filtros selecionados.</p>
            </div>
          )}
          
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

      {/* Modal de verificação */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Verificar compatibilidade</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-4">
                <p className="font-medium mb-1">Peça selecionada:</p>
                <p className="text-gray-700">{selectedProduct?.name}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Marca do veículo</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                      setSelectedModel('');
                      setSelectedYear('');
                    }}
                  >
                    <option value="">Selecione a marca</option>
                    {carBrands.map((brand, index) => (
                      <option key={index} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                
                {selectedBrand && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={selectedModel}
                      onChange={(e) => {
                        setSelectedModel(e.target.value);
                        setSelectedYear('');
                      }}
                      disabled={!selectedBrand}
                    >
                      <option value="">Selecione o modelo</option>
                      {carModels[selectedBrand]?.map((model, index) => (
                        <option key={index} value={model}>{model}</option>
                      ))}
                    </select>
                  </div>
                )}
                
                {selectedModel && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ano</label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      disabled={!selectedModel}
                    >
                      <option value="">Selecione o ano</option>
                      {carYears[selectedBrand]?.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                )}
                
                <button 
                  onClick={checkCompatibility}
                  disabled={!selectedBrand || !selectedModel || !selectedYear}
                  className={`w-full py-2 px-4 rounded-lg font-medium ${(!selectedBrand || !selectedModel || !selectedYear) ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'}`}
                >
                  Conferir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Catalogo;