import './SearchResultMin.css'; 
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



function SearchResultMin({
    id,
    stayImages, 
    location, 
    title, 
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
        <div className="searchResultMin">
            <Carousel stayImages={stayImages} superHost={superHost} id={id}/>
            {liked ? <FavoriteIcon className ="searchResultMin__heart-liked" onClick={handleClick}/> : <FavoriteBorderIcon className="searchResultMin__heart" onClick={handleClick}/>}
            <div className="searchResultMin__info" onClick={handleRedirect}>

                <div className="searchResultMin__stars">
                    <StarIcon className="searchResultMin__star"/>
                    <p>{stars}</p>
                </div>
                <p>{`Entire condominium in ${location}`}</p>
                <p>{title}</p>
                <div className="searchResultsMin__price">
                    <h4>${pricePerDay} <span>/ night</span></h4>
                    <p>{parseInt(searchGuests) ? `$${698 + (pricePerDay * Math.ceil(totalnights))} total`: ""}</p>
                </div>

            </div>
        </div>
    )
}

export default SearchResultMin


// <img src={stayImages[0]} alt="Interior of house"/>