// Importation des composants nécessaires et des données
import Card from './Card'; // Composant pour afficher les logements
import Banner from './Banner'; // Composant pour la bannière
import logementsData from '../logements.json'; // Données des logements
import Illustration from '../assets/paysage1.webp'; // Image d'illustration pour la bannière

// Définition du composant fonctionnel Index
const Index = () => {
    return (
        <>
            {/* Section de la bannière */}
            <Banner illustration={Illustration} txt="Chez vous, partout et ailleurs"/>
            {/* Section des logements */}
            <section className='card'>
                <Card logementsData={logementsData}/> {/* Composant Logements avec les données des logements passées en props */}
            </section>
        </>
    );
};

// Exportation du composant Index pour utilisation dans d'autres parties de l'application
export default Index;