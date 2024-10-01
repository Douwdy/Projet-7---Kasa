import { useNavigate } from 'react-router-dom';

// Composant Logements qui reçoit les données des logements en tant que prop
const Card = ({ logementsData }) => {
  // Hook useNavigate pour la navigation programmatique
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur un logement
  const handleClick = (id) => {
    // Navigue vers la page du logement avec l'ID correspondant
    navigate(`/logement/${id}`);
  };

  return (
    // Conteneur pour la liste des logements
    <div className='card-list'>
      {/* Itère sur les données des logements et crée un élément pour chaque logement */}
      {logementsData.map((logement) => (
        // Élément de vignette pour chaque logement
        <div
          key={logement.id}
          className='card-thumbnail'
          onClick={() => handleClick(logement.id)} // Ajoute un gestionnaire de clic pour naviguer vers le logement
        >
          <div className='card-thumbnail_fade'></div>
          {/* Image de couverture du logement */}
          <img src={logement.cover} alt={logement.title} />
          {/* Titre du logement */}
          <h2>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
};

// Exporte le composant Logements pour l'utiliser dans d'autres parties de l'application
export default Card;