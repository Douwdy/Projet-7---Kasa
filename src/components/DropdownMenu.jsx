import React, { useState } from 'react';

const DropdownMenu = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

return (
    <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle">
            Test
            <i className={`fas fa-angle-${isOpen ? 'up' : 'down'}`}></i>
        </button>
        {isOpen && (
            <ul className="dropdown-menu">
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )}
    </div>
);
};

export default DropdownMenu;