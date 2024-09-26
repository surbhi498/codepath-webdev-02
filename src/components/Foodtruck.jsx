import React from 'react';
import './Foodtruck.css'; // Import CSS

const Foodtruck = ({name, cusine, imageUrl, menuUrl }) => {
    return (
            <div className="food-truck-card">
            <h1>{name}</h1>    
            <h2>{cusine}</h2>
            <img src={imageUrl} alt={name} />
            <button>
            <a href={menuUrl} target="_blank" rel="noopener noreferrer">Menu</a>  
            </button>
        </div>
    );
};
export default Foodtruck;