// Déclaration du composant fonctionnel NotFound
const NotFound = () => {
    // Retourne le JSX à afficher pour ce composant
    return (
        <div className="not-found">
            {/* Titre de la page d'erreur */}
            <h1>404</h1>
            {/* Message d'erreur indiquant que la page n'existe pas */}
            <p>Oups! La page que vous demandez n'existe pas.</p>
            {/* Lien pour retourner à la page d'accueil */}
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
    );
};

// Exportation du composant NotFound pour pouvoir l'utiliser dans d'autres fichiers
export default NotFound;