// Importation des composants nécessaires depuis 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Importation des composants de l'application
import Index from './components/Index';
import FicheLogement from './components/FicheLogement';
import APropos from './components/APropos';
import NotFound from './components/NotFound';

// Importation des données des logements depuis un fichier JSON
import logementsData from './logements.json';

// Fonction pour vérifier si un logement avec un ID donné existe
const checkLogementExists = (id) => {
    // Récupère les IDs valides des logements
    const validIds = logementsData.map(logement => logement.id);
    // Vérifie si l'ID donné est présent dans la liste des IDs valides
    return validIds.includes(id);
};

// Composant pour la route du logement
const LogementRoute = () => {
    // Récupération de l'ID du logement depuis les paramètres de l'URL
    const { id } = useParams();
    // Redirection vers la page NotFound si l'ID n'existe pas
    return checkLogementExists(id) ? <FicheLogement /> : <NotFound />;
};

// Configuration du routeur de l'application
const RouterConfig = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Index />} /> {/* Route pour la page d'accueil*/}
                <Route path="/logement/:id" element={<LogementRoute />} /> {/* Route pour les fiches de logement avec vérification de l'ID */}
                <Route path="/a-propos" element={<APropos />} /> {/* Route pour la page "À propos" */}
                <Route path="*" element={<NotFound />} /> {/* Route pour les pages non trouvées */}
            </Routes>
        </Router>
    );
};

// Exporte le composant de configuration du routeur
export default RouterConfig;