import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import FicheLogement from './components/FicheLogement';
import './sass/main.scss';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
          </Routes>
        </main>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;