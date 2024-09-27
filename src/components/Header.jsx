// Importation du logo depuis le dossier des assets
import logo from '../assets/logo.svg';

// Définition du composant Header
const Header = () => {
    return (
        // Élément header principal
        <header>
            {/* Image du logo avec une classe CSS pour le style */}
            <img className='header-logo' src={logo} alt="Logo de kasa" />
            {/* Conteneur pour les liens de navigation */}
            <div className='header-links'>
                {/* Lien vers la page d'accueil */}
                <a href='/'>Accueil</a>
                {/* Lien vers la page "À Propos" */}
                <a href='/a-propos'>A Propos</a>
            </div>
        </header>
    );
};

// Exportation du composant Header pour utilisation dans d'autres fichiers
export default Header;