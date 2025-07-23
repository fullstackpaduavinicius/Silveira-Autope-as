import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Catalogo from "./pages/Catalogo";
import Contato from "./pages/Contato";
import TrabalheConosco from "./pages/TrabalheConosco";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton"; // import correto aqui

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/TrabalheConosco" element={<TrabalheConosco />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton /> {/* Posicionado corretamente aqui */}
    </>
  );
}

export default App;
