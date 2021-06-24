import React, { useState } from 'react'; 
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from '../Search/Search';
import { useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import { addGuest } from '../Search/searchSlice'; 




function Banner() {
    const history = useHistory(); 
    const dispatch = useDispatch(); 
    const [showSearch, setShowSearch] = useState(false); 


    function handleClickSearch(event){
        dispatch(addGuest(0)); 
        history.push("/search"); 
    }
    

    
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search/>}
                
                <Button 
                onClick={() => setShowSearch(!showSearch)}
                variant="outlined" 
                className="banner__searchButton">{showSearch ? "Hide": "Search Dates"}
                </Button>
            </div> 
            <div className="banner__imgInfoContainer">
                <div className="banner__info">
                    <h1>Get out and stretch your imagination</h1>
                    <h5>
                        plan a different kind of getaway to uncover the hidden gems near you. 
                    </h5>
                    <Button variant="outlined"
                    onClick={handleClickSearch}
                    >Explore Nearby</Button>
                </div>
                <div className="banner__imgContainer">
                
                </div>
            </div>
        </div>
    )
}

export default Banner
