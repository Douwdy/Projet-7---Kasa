const Logements = ({logementsData}) => {
    return (
    <div className='logements-list'>
        {logementsData.map((logement) => (
            <div key={logement.id} className='logements-thumbnail'>
                <div className="logements-thumbnail_fade"></div>
                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
            </div>
        ))}
    </div>
    );
};

export default Logements;