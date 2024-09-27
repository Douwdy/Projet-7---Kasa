import { useParams } from 'react-router-dom';
import logementsData from '../logements.json';
import Tag from './Tag'; // Import the Tag component
import DropdownMenu from './DropdownMenu'; // Import the DropdownMenu component

const FicheLogement = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement not found</div>;
  }

return (
    <div className='logement'>
            <img src={logement.cover} alt={logement.title} />
            <h1 className='logement-title'>{logement.title}</h1>
            <p className='logement-loc'>{logement.location}</p>
            <div className='rating'>
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < logement.rating ? 'filled' : ''}>
                        <i className={index < logement.rating ? 'fas fa-star' : 'far fa-star'}></i>
                    </span>
                ))}
            </div>
            <div className='tag-list'>
                    {logement.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                    ))}
            </div>
            <div className='dropdown-align'>
                <DropdownMenu content={logement.equipments} />
                <DropdownMenu content={logement.description} />
            </div>
    </div>
);
};

export default FicheLogement;