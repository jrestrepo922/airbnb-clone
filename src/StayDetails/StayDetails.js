import React, { useState } from 'react'
import './StayDetails.css'; 
import { useSelector, useDispatch } from "react-redux"; 
import { selectSearchPage } from "../SearchPage/searchPageSlice";
import StarIcon from '@material-ui/icons/Star';
import DeckIcon from '@material-ui/icons/Deck';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { editHostIsLiked } from '../SearchPage/searchPageSlice'; 
import { selectSearch } from "../Search/searchSlice"; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WhatshotIcon from '@material-ui/icons/Whatshot';



function StayDetails(props) {
    let {id, stayImages, location, title, guests, bedrooms, baths, beds, description, hostPic, stars, pricePerDay, superHost, isLiked, host} = useSelector(selectSearchPage).host[props.match.params.id]
    let { startDate, endDate } = useSelector(selectSearch); 

    let searchGuest = useSelector(selectSearch).guests; 

    const formatedStarDate = `${startDate.getMonth()}/${startDate.getDate()}/${startDate.getFullYear()}`;
    const formatedEndDate =  `${endDate.getMonth()}/${endDate.getDate()}/${endDate.getFullYear()}`;
     
    let [liked, setLiked] = useState(isLiked); 
    const dispatch = useDispatch(); 

    function handleClick(){
        dispatch(editHostIsLiked({id: id, isLiked: !isLiked})); 
        setLiked(!isLiked);    
    }

    const isSuperHost = (
        <div className="stay__superContainer">
            <WhatshotIcon/>
            <h3>{host} is a Superhost </h3>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests</p>
        </div>

    )

    return (
        <div className="stay__container">
            <h2>{title}</h2>
            <div className="stay__reviewLocationShareLikeContainer">
                <div className="stay__reviewLocationContainer">
                    <StarIcon className="stay__star"/>
                    <p>{stars}   <span className="stay__reviewLocationContainerSpam1"> · </span> <span className="stay__reviewLocationContainerSpam2">{location}</span></p>
                </div>
                <div className="stay__shareLikeContainer">
                    <DeckIcon className="stay__deck"/> 
                    <p>Share</p>
                    {liked ? <FavoriteIcon className="stay__liked" onClick={handleClick}/> : <FavoriteBorderIcon className="stay__notLiked" onClick={handleClick}/>}
                    <p>save</p>
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

            <div className="stay_detailInfoContainer">
                <div className="stay__detailInfo">
                    <div className="stay__info1">
                        <div className="stay__infoInner">
                            <h2>Entire condominium hosted by {host}</h2>
                            <p>{guests} {guests? "guests": "guest"} · {bedrooms} {bedrooms? "bedrooms": "bedroom"} ·  {beds} {beds? "beds": "bed"} · {baths} {baths? "baths": "bath"} </p>
                        </div>
                        <img src={`../${hostPic}`} alt="host"/>
                    </div>
                    {superHost? isSuperHost: ""}
                    <div className="stay__info2">
                        <ul>
                            <li>Entire Home to yourself</li>
                            <li>Commited to Enhanced Clean</li>
                        </ul>
                    </div>

                    <div className="stay_info3">
                        <h2>All about {host}'s place</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="stay__checkOutContainer">
                    <div className="stay__priceStars">
                        <p> <span>$ {pricePerDay}</span>/ night</p>
                        <div className="stay__reviewLocationContainer">
                            <StarIcon className="stay__star"/>
                            <p>{stars}</p>
                        </div>
                    </div>
                    <div className="stay__checkInCheckOutGuestContainer">
                        <div className="stay__checkInCheckOutContainer">
                            <h5>CHECK-IN</h5>
                            <p>{searchGuest ? formatedStarDate  : "Add date" }</p>
                        </div>
                        <div className="stay__vl"></div>
                        <div className="stay__checkInCheckOutContainer">
                            <h5>CHECK-OUT</h5>
                            <p>{searchGuest ? formatedEndDate  : "Add date" }</p>
                        </div>
                        <div className="stay__guestsContainer">
                            <h5>guests</h5>
                            <div className="stay__guestsContainerInnerContainer">
                                <p> {searchGuest? " 1 guest " : `${searchGuest} guest`} </p>
                                <ExpandMoreIcon className="stay__expandMoreIcon"/>
                            </div>

                        </div>
                    </div>
                    <button>{searchGuest? "Reserve" : "Check availability"}</button>
                </div>
             </div>



        </div>
    )
}

export default StayDetails


// {props.match.params.id}