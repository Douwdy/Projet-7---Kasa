// Importation des composants nécessaires et des données
import Logements from './Thumbnail'; // Composant pour afficher les logements
import logementsData from '../logements.json'; // Données des logements
import illustration from '../assets/paysage1.webp'; // Image d'illustration pour la bannière
import { Fragment } from 'react'; // Importation de Fragment pour encapsuler les éléments sans ajouter de nœud supplémentaire au DOM

// Définition du composant fonctionnel Index
const Index = () => {
    return (
        <Fragment>
            {/* Section de la bannière */}
            <div className='banner'>
                <h1 className='banner-title'>Chez vous, partout et ailleurs</h1> {/* Titre de la bannière */}
                <img src={illustration} alt='paysage' className='banner-illustration'/> {/* Image de la bannière */}
            </div>
            {/* Section des logements */}
            <section className='logements'>
                <Logements logementsData={logementsData}/> {/* Composant Logements avec les données des logements passées en props */}
            </section>
        </Fragment>
    );
};

// Exportation du composant Index pour utilisation dans d'autres parties de l'application
export default Index;