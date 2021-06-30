import React from 'react'; 
import './Card.css'; 
import { useHistory } from "react-router-dom"; 



function Card({ src, title, description, price, url, id }) {
    const history = useHistory(); 
   
    function handleClick(){
        history.push(`/search/${id}`)
    }
    

    return (
        
        <div className="card"  onClick={handleClick}>
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
