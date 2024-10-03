import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Composant Logements qui reçoit les données des logements en tant que prop
const Card = ({ logementsData }) => {
  // Hook useNavigate pour la navigation programmatique
  const navigate = useNavigate();

  // State pour suivre le chargement des images
  const [loading, setLoading] = useState({});

  // Fonction pour gérer le clic sur un logement
  const handleClick = (id) => {
    // Navigue vers la page du logement avec l'ID correspondant
    navigate(`/logement/${id}`);
  };

  // Fonction pour gérer le chargement de l'image
  const handleImageLoad = (id) => {
    setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
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
          {/* Affiche une animation de chargement tant que l'image n'est pas chargée */}
          {loading[logement.id] !== false && (
            <div className='card-thumbnail_spinner'><i className='fas fa-spinner'></i></div>
          )}
          {/* Image de couverture du logement */}
          <img
            src={logement.cover}
            alt={logement.title}
            onLoad={() => handleImageLoad(logement.id)}
            style={{ display: loading[logement.id] === false ? 'block' : 'none' }}
          />
          {/* Titre du logement */}
          <h2>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;