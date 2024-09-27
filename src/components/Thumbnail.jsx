import { useNavigate } from 'react-router-dom';

const Logements = ({ logementsData }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className='logements-list'>
      {logementsData.map((logement) => (
        <div
          key={logement.id}
          className='logements-thumbnail'
          onClick={() => handleClick(logement.id)}
        >
          <div className="logements-thumbnail_fade"></div>
          <img src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Logements;