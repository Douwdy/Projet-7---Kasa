import Collapse from "./Collapse"; // Importation du composant Collapse
import Banner from './Banner'; // Composant pour la bannière
import Illustration from "../assets/paysage2.webp"; // Importation de l'image d'illustration
import apropos from "../apropos.json"; // Importation des données de l'onglet À propos
// Définition du composant fonctionnel APropos
const APropos = () => {
    return (
        <div className="apropos"> {/* Conteneur principal du composant APropos */}
            <Banner illustration={Illustration}/>
            <div className="apropos-menu"> {/* Conteneur pour les menus déroulants */}
                {/* Menu déroulant pour la fiabilité */}
                <Collapse name="Fiabilité">
                    {apropos.fiabilite.split().map((item, index) => <span key={index}>{item}</span>)}
                </Collapse>
                {/* Menu déroulant pour le respect */}
                <Collapse name="Respect">
                    {apropos.respect.split().map((item, index) => <span key={index}>{item}</span>)}
                </Collapse>
                {/* Menu déroulant pour le service */}
                <Collapse name="Service">
                    {apropos.service.split().map((item, index) => <span key={index}>{item}</span>)}
                </Collapse>
                {/* Menu déroulant pour la sécurité */}
                <Collapse name="Sécurité">
                    {apropos.securite.split().map((item, index) => <span key={index}>{item}</span>)}
                </Collapse>
            </div>
        </div>
    );
}

export default APropos;