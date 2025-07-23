import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Catalogo from "./pages/Catalogo";
import Contato from "./pages/Contato";
import TrabalheConosco from "./pages/TrabalheConosco";
import Localizacao from "./pages/Localizacao";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop"; // Novo componente importado

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <ScrollToTop /> {/* Adicionado aqui */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/TrabalheConosco" element={<TrabalheConosco />} />
          <Route path="/Localizacao" element={<Localizacao />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;