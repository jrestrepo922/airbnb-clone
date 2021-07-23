import React, { useState, useEffect } from 'react'
import './StayDetailsMin.css'; 
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
import CarouselLarge  from '../CarouselLarge/CarouselLarge';



function StayDetailsMin(props) {
    let {id, stayImages, location, title, guests, bedrooms, baths, beds, description, hostPic, stars, pricePerDay, superHost, isLiked, host} = useSelector(selectSearchPage).host[props.id]
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
        <div className="stayMin__superHostContainer">
            <div className="stayMin__superHostInner">
                <WhatshotIcon className="stayMin__hotIcon"/>
                <h3>{host} is a Superhost </h3>
            </div>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests</p>
        </div>
    )

    const isSuperHostHeader = (
        <div className="stayMin__superHostHeaderContainer">
            <WhatshotIcon className="stayMin__hotIconHeader"/>
            <p > superhost   </p>
        </div>

    )

    const totalnights = Math.ceil((endDate.getTime() - startDate.getTime()) / 86400000); 


    useEffect(() => {
        //eslint-disable-next-line 
        if(searchGuest){
            document.querySelector('.stayMin__checkOutContainer').style.height = "457px";  
        } else {
            document.querySelector('.stayMin__checkOutContainer').style.height = "227px";  
        }

        window.scrollTo(0, 0);
    }, [])



    const total = (
        <div className="stayMin__totalContainer">
            <p>You won't be Charge yet</p>
            <div className="stayMin__totalPriceContainer">
               <p> ${pricePerDay} X {totalnights} nights</p>
               <p>${pricePerDay * totalnights}</p>
            </div>
            <div className="stayMin__cleaningFee">
                <p>Cleaning fee</p>
                <p>$200</p>
            </div>
            <div className="stayMin__serviceFee">
                <p>Service fee</p>
                <p>$333</p>
            </div>
            <div className="stayMin__taxesFee">
                <p>Taxes and fees</p>
                <p>$165</p>
            </div>
            <div className="stayMin__allFeesContainer">
                <p>Total</p>
                <p>${698 + (pricePerDay * totalnights)}</p>
            </div>
        </div>
    )

    return (
        <div className="stayMin__container">
            <CarouselLarge stayImages={stayImages} superHost={superHost} id={id}/>
            <div className="stayMin__innerContainer">
                <h2>{title}</h2>
                <div className="stayMin__reviewLocationShareLikeContainer">
                    
                    <div className="stayMin__reviewLocationContainer">
                        <StarIcon className="stayMin__star"/>
                        <p>{stars}   <span className="stayMin__reviewLocationContainerSpam1"> · </span></p>
                        <p> {superHost? isSuperHostHeader: ""} </p>
                    </div>
                    
                    <div className="stayMin__shareLikeContainer">
                        <DeckIcon className="stayMin__deck"/> 
                        <p>Share</p>
                        {liked ? <FavoriteIcon className="stayMin__liked" onClick={handleClick}/> : <FavoriteBorderIcon className="stay__notLiked" onClick={handleClick}/>}
                        <p>save</p>
                    </div>
                </div>
                <p><span className="stayMin__reviewLocationContainerSpam2">{location}</span></p>
                





                
                    
            

                <div className="stayMin__detailInfoContainer">
                    <div className="stayMin__detailInfo">
                        <div className="stayMin__info1">
                            <div className="stayMin__infoInner">
                                <h2>Entire condominium hosted by {host}</h2>
                                <p>{guests} {guests? "guests": "guest"} · {bedrooms} {bedrooms? "bedrooms": "bedroom"} ·  {beds} {beds? "beds": "bed"} · {baths} {baths? "baths": "bath"} </p>
                            </div>
                            <div className="stayMin__hostImg">
                                <img src={`../${hostPic}`} alt="host"/>
                            </div>
                            
                        </div>
                        {superHost? isSuperHost: ""}
                        <div className="stayMin__info2">
                            <ul>
                                <li>Entire Home to yourself</li>
                                <li>Commited to Enhanced Clean</li>
                            </ul>
                        </div>

                        <div className="stayMin__info3">
                            <h2>All about {host}'s place</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="stayMin__checkOutContainer">
                        <div className="stayMin__priceStars">
                            <p> <span>$ {pricePerDay}</span>/ night</p>
                            <div className="stayMin__reviewLocationContainer">
                                <StarIcon className="stayMin__star"/>
                                <p>{stars}</p>
                            </div>
                        </div>
                        <div className="stayMin__checkInCheckOutGuestContainer">
                            <div className="stayMin__checkInCheckOutContainer">
                                <h5>CHECK-IN</h5>
                                <p>{searchGuest ? formatedStarDate  : "Add date" }</p>
                            </div>
                            <div className="stayMin__vl"></div>
                            <div className="stayMin__checkInCheckOutContainer">
                                <h5>CHECK-OUT</h5>
                                <p>{searchGuest ? formatedEndDate  : "Add date" }</p>
                            </div>
                            <div className="stayMin__guestsContainer">
                                <h5>guests</h5>
                                <div className="stayMin__guestsContainerInnerContainer">
                                    <p> {searchGuest? `${searchGuest} guest`: " 1 guest " } </p>
                                    <ExpandMoreIcon className="stay__expandMoreIcon"/>
                                </div>

                            </div>
                        </div>
                        
                        <button>{searchGuest? "Reserve" : "Check availability"}</button>
                        {searchGuest? total: ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayDetailsMin


// {props.match.params.id}
