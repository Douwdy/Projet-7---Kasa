import { useParams } from 'react-router-dom'; // Importe useParams de react-router-dom pour accéder aux paramètres de l'URL
import logementsData from '../logements.json'; // Importe les données des logements depuis un fichier JSON
import Carousel from './Carousel';
import Tag from './Tag'; // Importe le composant Tag
import DropdownMenu from './DropdownMenu'; // Importe le composant DropdownMenu

const FicheLogement = () => {
    const { id } = useParams(); // Récupère le paramètre id de l'URL
    const logement = logementsData.find((logement) => logement.id === id); // Trouve le logement avec l'id correspondant

    if (!logement) {
        return <div>Logement non trouvé</div>; // Affiche un message si le logement n'est pas trouvé
    }

    return (
        <div className='logement'>
            <Carousel images={logement.pictures} /> {/* Affiche les images du logement en utilisant le composant Carousel */}
            <div className='logement-align'>
                <div className='logement-info'>
                    <h1 className='logement-title'>{logement.title}</h1> {/* Affiche le titre du logement */}
                    <p className='logement-loc'>{logement.location}</p> {/* Affiche la localisation du logement */}
                    <div className='tag-list'>
                        {logement.tags.map((tag, index) => (
                            <Tag key={index} tag={tag} /> // Affiche chaque tag en utilisant le composant Tag
                        ))}
                    </div>
                </div>
                <div className='logement-host'>
                    <div className='logement-host_name'>
                        <img src={logement.host.picture} alt={logement.host.name} /> {/* Affiche la photo de l'hôte */}
                        <span>
                            {logement.host.name.split(' ')[0]} <br />
                            {logement.host.name.split(' ')[1]} {/* Affiche le nom de l'hôte */}
                        </span>
                    </div>
                    <div className='logement-host_rating'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className={index < logement.rating ? 'filled' : 'filled-gray'}>
                                <i className={index < logement.rating ? 'fas fa-star' : 'fas fa-star'}></i> {/* Affiche les étoiles de notation */}
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
                /> {/* Affiche la description en utilisant le composant DropdownMenu */}
                <DropdownMenu 
                    content={logement.equipments} 
                    name="Équipements" 
                    renderItem={(item) => <span>{item}</span>} 
                /> {/* Affiche les équipements en utilisant le composant DropdownMenu */}
            </div>
        </div>
    );
};

export default FicheLogement;