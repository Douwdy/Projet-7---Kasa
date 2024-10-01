import React, { Fragment, useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(''); // New state for direction
    const [key, setKey] = useState(0); // New state to force re-render

    const nextSlide = () => {
        setDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setKey((prevKey) => prevKey + 1); // Force re-render
    };

    const prevSlide = () => {
        setDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setKey((prevKey) => prevKey + 1); // Force re-render
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDirection(''); // Reset direction after animation
        }, 500); // Match the duration of the animation

        return () => clearTimeout(timer);
    }, [key]);

    return (
        <section className="carousel-container">
            <div className="carousel">
                <img 
                    key={key} // Force re-render by changing key
                    src={images[currentIndex]} 
                    alt={`Slide ${currentIndex}`} 
                    className={`carousel-image ${direction}`} // Apply direction class
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