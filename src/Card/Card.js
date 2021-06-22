import React from 'react'; 
import './Card.css'; 



function Card({ src, title, description, price, url }) {
   
    

    return (
        
        <div className="card"  >
                <a href={url}>
                <img src={src} alt="card img"/>

                <div className="card__info">
                    <h2>{title}</h2>
                    <h4>{description}</h4> 
                    <h3>{price}</h3>
                </div>
                </a>

        </div>
    )
}

export default Card
