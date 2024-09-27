import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const DropdownMenu = ({ content, name, renderItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                {name}
                <i className={`fas fa-angle-${isOpen ? 'down' : 'up'}`}></i>
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {content.map((item, index) => (
                        <li key={index}>{renderItem(item)}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;