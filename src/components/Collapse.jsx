import React, { useState, useRef, useEffect } from 'react';

const Collapse = ({ name, children }) => {
    // État pour suivre si le menu déroulant est ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);
    // Référence pour stocker l'état précédent de isOpen
    const prevIsOpenRef = useRef();

    // useEffect pour mettre à jour la référence avec l'état actuel de isOpen après chaque rendu
    useEffect(() => {
        prevIsOpenRef.current = isOpen;
    }, [isOpen]);

    // Obtenir l'état précédent de isOpen à partir de la référence
    const prevIsOpen = prevIsOpenRef.current;

    // Fonction pour basculer l'état ouvert/fermé du menu déroulant
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${isOpen ? 'unshrink' : prevIsOpen ? 'shrink' : ''}`}>
            <button className="dropdown-toggle">
                {/* Afficher la prop name */}
                {name}
                {/* Afficher l'icône avec des classes conditionnelles */}
                <i onClick={toggleDropdown} className={`fas fa-angle-up ${isOpen ? 'open' : prevIsOpen ? 'close' : ''}`}></i>
            </button>
            <ul className={`dropdown-menu ${isOpen ? 'slidedown' : prevIsOpen ? 'slideup' : ''}`}>
                {children}
            </ul>
        </div>
    );
};

export default Collapse;