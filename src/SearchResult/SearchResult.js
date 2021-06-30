import './SearchResult.css'; 
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux'; 
import { editHostIsLiked } from '../SearchPage/searchPageSlice'; 
import { useState } from 'react'; 
import { useSelector } from 'react-redux'; 
import { selectSearchPage } from "../SearchPage/searchPageSlice"; 
import Carousel from '../Carousel/Carousel';
import { useHistory } from 'react-router-dom';



function SearchResult({
    id,
    stayImages, 
    location, 
    title, 
    guests, 
    bedrooms, 
    baths, 
    beds,
    stars, 
    pricePerDay, 
    superHost,
    startDate, 
    endDate,
    totalnights,
    searchGuests
}) {


    
    let resultIsLiked = useSelector(selectSearchPage).host[id].isLiked;
    let [liked, setLiked] = useState(resultIsLiked); 

    const dispatch = useDispatch(); 
    const history = useHistory(); 

    function handleClick(event){
        dispatch(editHostIsLiked({id: id, isLiked: !resultIsLiked })); 
        resultIsLiked = !resultIsLiked; 
        setLiked(resultIsLiked);    
    }

    function handleRedirect(event){
        if(event.target.id !== "back" && event.target.id !== "next"){
            history.push(`/search/${id}`)
        }
    }


    return (
        <div className="searchResult">
            <Carousel stayImages={stayImages} superHost={superHost} id={id}/>
            {liked ? <FavoriteIcon className ="searchResult__heart-liked" onClick={handleClick}/> : <FavoriteBorderIcon className="searchResult__heart" onClick={handleClick}/>}
            <div className="searchResult__info" onClick={handleRedirect}>
                <div className="searchResult__infoTop">
                    <p>{`Entire condominium in ${location}`}</p>
                    <h3>{title}</h3>
                    <p style={{color: "rgb(182, 182, 182)"}}>_____</p>
                    <p>{`${guests} guests·${bedrooms} bedrooms·${beds} beds·${baths} baths Pool · Kitchen · Air Conditioning · Wifi `}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star"/>
                        <p><strong>{stars}</strong></p>
                    </div>

                    <div className="searchResults__price">
                        <h2>${pricePerDay} <span>/ night</span></h2>
                        <p>{parseInt(searchGuests) ? `$${698 + (pricePerDay * totalnights)} total`: ""}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult


// <img src={stayImages[0]} alt="Interior of house"/>