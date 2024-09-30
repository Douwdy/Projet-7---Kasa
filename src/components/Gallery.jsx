import React, { Fragment, useState } from 'react';

const Gallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="carousel-container">
            <div className="carousel">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
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

export default Gallery;