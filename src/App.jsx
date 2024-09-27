import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import FicheLogement from './components/FicheLogement';
import APropos from './components/APropos';
import NotFound from './components/NotFound';
import './sass/main.scss';

function App() {
  return (
    <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;