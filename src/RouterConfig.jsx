// src/RouterConfig.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import FicheLogement from './components/FicheLogement';
import APropos from './components/APropos';
import NotFound from './components/NotFound';

const RouterConfig = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="/logement/:id" element={<FicheLogement />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default RouterConfig;