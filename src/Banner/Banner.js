import React from 'react'; 
import "./Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import { addGuest } from '../Search/searchSlice'; 




function Banner() {
    const history = useHistory(); 
    const dispatch = useDispatch(); 


    function handleClickSearch(event){
        dispatch(addGuest(0)); 
        history.push("/search"); 
    }
    



    
    return (
        <div className="banner">
            <div className="banner__imgInfoContainer">
                <img src="https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=960" alt="background"></img>
                <div className="banner__imgContainer">
                    <div className="banner__info">
                        <h1>The Greatest Outdoors</h1>
                        <h5>
                            Wishlists curated by Airbnb. 
                        </h5>
                        <Button variant="outlined"
                        onClick={handleClickSearch}
                        >Explore Nearby</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
