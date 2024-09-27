// Importation du logo depuis le dossier des assets
import logo from '../assets/logo.svg';

// Définition du composant fonctionnel Footer
const Footer = () => {
    return (
        // Balise de pied de page
        <footer>
            {/* Image du logo avec une classe CSS pour le style */}
            <img className='footer-logo' src={logo} alt="Logo de kasa" />
            {/* Paragraphe pour les droits d'auteur avec une classe CSS pour le style */}
            <p className='footer-copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

// Exportation du composant Footer pour pouvoir l'utiliser dans d'autres fichiers
export default Footer;