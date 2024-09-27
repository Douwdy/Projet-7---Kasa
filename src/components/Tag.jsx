// Définition du composant fonctionnel Tag qui prend une prop 'tag'
const Tag = ({ tag }) => {
  // Retourne un élément <p> avec la classe CSS 'tag-item' et le contenu de la prop 'tag'
  return <p className="tag-item">{tag}</p>;
}

// Exportation du composant Tag pour pouvoir l'utiliser dans d'autres fichiers
export default Tag;