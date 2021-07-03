import React, { useState } from 'react'
import "./Carousel.css";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useHistory } from 'react-router-dom';

function Carousel({stayImages, superHost, id}) {
    

    const history = useHistory(); 
    let [currImg, setCurrentImg] = useState(0); 

    function handleClickBack(event) {
        if(currImg === 0){

        } else {
            setCurrentImg(--currImg);
        }
        
    }


    function handleClickNext(event){
        if(currImg > (stayImages.length - 2)){
            setCurrentImg(0); 
        } else {
            setCurrentImg(++currImg);
        }
    }   

    function handleRedirect(event){
        if(event.target.id !== "back" && event.target.id !== "next"){
            history.push(`/search/${id}`)
        }
    }

    return (
        <div className="carousel">
            <div 
                className="carousel__inner"
                style={{backgroundImage: `url(${stayImages[currImg]})`}}
                onClick={handleRedirect}
            >
                {superHost && <div className="carousel__superHost">SUPERHOST</div>}
                <div className="left" onClick={handleClickBack}><NavigateBeforeIcon id="back"/></div> 
                <div className="right" onClick={handleClickNext}><NavigateNextIcon id="next"/></div>
               
                
               
            </div>
        </div>
    )
}

export default Carousel
