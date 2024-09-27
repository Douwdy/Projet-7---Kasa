import DropdownMenu from "./DropdownMenu"; // Importation du composant DropdownMenu
import Illustration from "../assets/paysage2.webp"; // Importation de l'image d'illustration

// Définition du composant fonctionnel APropos
const APropos = () => {
    return (
        <div className="apropos"> {/* Conteneur principal du composant APropos */}
            <img src={Illustration} alt="Paysage d'illustration" /> {/* Image d'illustration */}
            <div className="apropos-menu"> {/* Conteneur pour les menus déroulants */}
                {/* Menu déroulant pour la fiabilité */}
                <DropdownMenu 
                    content="" // Contenu du menu (vide pour l'instant)
                    name="Fiabilité" // Nom du menu
                    renderItem={(item) => <span>{item}</span>} // Fonction de rendu des éléments du menu
                />
                {/* Menu déroulant pour le respect */}
                <DropdownMenu 
                    content="" // Contenu du menu (vide pour l'instant)
                    name="Respect" // Nom du menu
                    renderItem={(item) => <span>{item}</span>} // Fonction de rendu des éléments du menu
                />
                {/* Menu déroulant pour le service */}
                <DropdownMenu 
                    content="" // Contenu du menu (vide pour l'instant)
                    name="Service" // Nom du menu
                    renderItem={(item) => <span>{item}</span>} // Fonction de rendu des éléments du menu
                />
                {/* Menu déroulant pour la sécurité */}
                <DropdownMenu 
                    content="" // Contenu du menu (vide pour l'instant)
                    name="Sécurité" // Nom du menu
                    renderItem={(item) => <span>{item}</span>} // Fonction de rendu des éléments du menu
                />
            </div>
        </div>
    );
}

export default APropos; // Exportation du composant APropos