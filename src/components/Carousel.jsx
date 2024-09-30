import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
            <button onClick={prevSlide} className="carousel-button carousel-button-left">
                <i className="fas fa-angle-left"></i>
            </button>
            <button onClick={nextSlide} className="carousel-button carousel-button-right">
                <i className="fas fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Carousel;