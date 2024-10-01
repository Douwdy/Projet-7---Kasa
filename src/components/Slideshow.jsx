import React, { Fragment, useState, useEffect } from 'react';

// Composant Slideshow qui prend une liste d'images en prop
const Slideshow = ({ images }) => {
    // État pour l'index de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0);
    // État pour la direction de l'animation (suivant ou précédent)
    const [direction, setDirection] = useState(''); 
    // État pour forcer le re-rendu du composant
    const [key, setKey] = useState(0); 

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        setDirection('next'); // Définir la direction à 'next'
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Mettre à jour l'index de l'image
        setKey((prevKey) => prevKey + 1); // Forcer le re-rendu
    };

    // Fonction pour revenir à la diapositive précédente
    const prevSlide = () => {
        setDirection('prev'); // Définir la direction à 'prev'
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Mettre à jour l'index de l'image
        setKey((prevKey) => prevKey + 1); // Forcer le re-rendu
    };

    // Effet pour réinitialiser la direction après l'animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setDirection(''); // Réinitialiser la direction
        }, 500); // Durée de l'animation

        return () => clearTimeout(timer); // Clear le timer
    }, [key]);

    return (
        <section className="carousel-container">
            <div className="carousel">
                <img 
                    key={key} // Forcer le re-rendu en changeant la clé
                    src={images[currentIndex]} 
                    alt={`Slide ${currentIndex}`} 
                    className={`carousel-image ${direction}`} // Appliquer la classe de direction
                />
                {images.length > 1 && (
                    <Fragment>
                        <p className="carousel-caption">{currentIndex + 1}/{images.length}</p>
                        <button onClick={prevSlide} className="carousel-button carousel-button-left">
                            <i className="fas fa-angle-left"></i>
                        </button>
                        <button onClick={nextSlide} className="carousel-button carousel-button-right">
                            <i className="fas fa-angle-right"></i>
                        </button>
                    </Fragment>
                )}
            </div>
        </section>
    );
};

export default Slideshow;