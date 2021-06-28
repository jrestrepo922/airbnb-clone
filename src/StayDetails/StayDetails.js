import React from 'react'
import './StayDetails.css'; 
import { useSelector } from "react-redux"; 
import { selectSearchPage } from "../SearchPage/searchPageSlice";
import StarIcon from '@material-ui/icons/Star';
import DeckIcon from '@material-ui/icons/Deck';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function StayDetails(props) {
    let {stayImages, location, title, guests, bedrooms, baths, beds, description, hostPic, stars, pricePerDay, superHost, isLiked} = useSelector(selectSearchPage).host[props.match.params.id]

    return (
        <div className="stay__container">
            <h2>{title}</h2>
            <div className="stay__reviewLocationShareLikeContainer">
                <div className="stay__reviewLocationContainer">
                    <StarIcon className="searchResult__star"/>
                    <p>{stars} ·  {location}</p>
                </div>
                <div className="stay__shareLikeContainer">
                    <p><DeckIcon/> Share <FavoriteIcon/><FavoriteBorderIcon/>like</p>
                </div>
            </div>


            <div className="stay__imgOuterContainer">
                <div className="stay__imgContainerLeft">
                    <img src={`../${stayImages[0]}`} alt="stay"/>
                </div>
                <div className="">
                    <div className="stay__imgContainerRight--top">
                        <img src={`../${stayImages[1]}`} alt="stay"/>
                        <img src={`../${stayImages[2]}`} alt="stay"/>
                    </div>

                    <div className="stay__imgContainerRight--bottom">
                        <img src={`../${stayImages[3]}`} alt="stay"/>
                        <img src={`../${stayImages[4]}`} alt="stay"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StayDetails


// {props.match.params.id}