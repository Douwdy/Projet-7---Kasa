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
    <div className='logement-align'>
        <div className='logement-info'>
                <h1 className='logement-title'>{logement.title}</h1>
                <p className='logement-loc'>{logement.location}</p>
                <div className='tag-list'>
                    {logement.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
            <div className='logement-host'>
                <div className='logement-host_name'>
                    <img src={logement.host.picture} alt={logement.host.name} />
                    <span>
                        {logement.host.name.split(' ')[0]} <br />
                        {logement.host.name.split(' ')[1]}
                    </span>
                </div>
                <div className='logement-host_rating'>
                    {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className={index < logement.rating ? 'filled' : 'filled-gray'}>
                            <i className={index < logement.rating ? 'fas fa-star' : 'fas fa-star'}></i>
                        </span>
                    ))}
                </div>
            </div>
    </div>
        <div className='dropdown-align'>
            <DropdownMenu 
            content={logement.description.split('.')} 
            name="Description" 
            renderItem={(item) => <span>{item}</span>} 
            />
            <DropdownMenu 
            content={logement.equipments} 
            name="Équipments" 
            renderItem={(item) => <span>{item}</span>} 
            />
        </div>
    </div>
);
};

export default FicheLogement;