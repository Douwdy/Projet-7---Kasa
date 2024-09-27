// Importer les hooks nécessaires de React
import React, { useState, useEffect, useRef } from 'react';
// Importer le CSS de FontAwesome pour les icônes
import '@fortawesome/fontawesome-free/css/all.min.css';

// Définir le composant DropdownMenu
const DropdownMenu = ({ content, name, renderItem }) => {
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
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                {/* Afficher la prop name */}
                {name}
                {/* Afficher l'icône avec des classes conditionnelles */}
                <i className={`fas fa-angle-up ${isOpen ? 'open' : prevIsOpen ? 'close' : ''}`}></i>
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {content.map((item, index) => (
                        // Rendre chaque élément du tableau content en utilisant la fonction renderItem
                        <li key={index}>{renderItem(item)}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// Exporter le composant DropdownMenu comme exportation par défaut
export default DropdownMenu;