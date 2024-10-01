const Banner = ({illustration, txt} ) => {
    return (
        <div className='banner'>
            <h1 className='banner-title'>{txt}</h1> {/* Titre de la bannière */}
            <img src={illustration} alt='Illustration' className='banner-illustration'/> {/* Image de la bannière */}
        </div>
    );
}

export default Banner;