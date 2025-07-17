import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cinzaEngenharia text-brancoTecnico py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Silveira Auto Peças</h3>
            <p className="text-prataProfissional">
              Comércio de peças e acessórios automotivos desde 2009.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-prataProfissional hover:text-white transition">Home</Link></li>
              <li><Link to="/sobre" className="text-prataProfissional hover:text-white transition">Sobre Nós</Link></li>
              <li><Link to="/catalogo" className="text-prataProfissional hover:text-white transition">Catálogo</Link></li>
              <li><Link to="/contato" className="text-prataProfissional hover:text-white transition">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="text-prataProfissional space-y-2">
              <li>E-mail: ecommerce.silveira@gmail.com</li>
              <li>Telefone: (79) 99835-4485</li>
              <li>CNPJ: 11.071.251/0001-83</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-prataProfissional mt-8 pt-6 text-center text-prataProfissional">
          <p>&copy; {new Date().getFullYear()} Silveira Auto Peças LTDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;