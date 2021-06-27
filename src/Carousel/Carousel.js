import React, { useState } from 'react'
import "./Carousel.css";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function Carousel({stayImages}) {

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

    return (
        <div className="carousel">
            <div 
                className="carousel__inner"
                style={{backgroundImage: `url(${stayImages[currImg]})`}}
            >
                <div className="left" onClick={handleClickBack}><NavigateBeforeIcon/></div> 
                <div className="right" onClick={handleClickNext}><NavigateNextIcon/></div>
               
                
               
            </div>
        </div>
    )
}

export default Carousel
