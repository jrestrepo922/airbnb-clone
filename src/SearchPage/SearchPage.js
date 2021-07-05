import React from 'react'; 
import './SearchPage.css'
import { Button } from "@material-ui/core"
import SearchResult from '../SearchResult/SearchResult';
import { selectSearch } from '../Search/searchSlice'; 
import { useSelector } from 'react-redux'; 
import { selectSearchPage } from './searchPageSlice'; 
import SearchResultMin from '../SearchResultMin/SearchResultMin';


function SearchPage() {
    const data = useSelector(selectSearchPage).host; 
    const {startDate, endDate } = useSelector(selectSearch);
    const searchGuests = parseInt(useSelector(selectSearch).guests);


    function createSearchResults(){
        let filterData = data.filter((result) => {
            if(searchGuests){
                return result.guests === searchGuests
            } else {
                return result.guests >= 0; 
            }
        }); 

        const totalnights = (endDate.getTime() - startDate.getTime()) / 86400000; 
        
        let searchResults = filterData.map(result => {
            const {id, stayImages, location, title, guests, bedrooms, baths, beds, stars, pricePerDay, superHost} = result; 
            return (
                <SearchResult
                key = {id}
                id={id}
                stayImages={stayImages}
                location={location}
                title={title}
                guests = {guests}
                bedrooms = {bedrooms} 
                baths = {baths}
                beds = {beds}
                stars = {stars}
                pricePerDay = {pricePerDay}
                superHost = {superHost}
                startDate = {startDate}
                endDate = {endDate}
                totalnights = {totalnights}
                searchGuests= {searchGuests}
                />
            )
        }) 

        return searchResults; 
    }

    function createSearchResultsMin(){
        let filterData = data.filter((result) => {
            if(searchGuests){
                return result.guests === searchGuests
            } else {
                return result.guests >= 0; 
            }
        }); 

        const totalnights = (endDate.getTime() - startDate.getTime()) / 86400000; 
        
        let searchResults = filterData.map(result => {
            const {id, stayImages, location, title,  stars, pricePerDay, superHost} = result; 
            return (
                <SearchResultMin
                key = {id}
                id={id}
                stayImages={stayImages}
                location={location}
                title={title}
                stars = {stars}
                pricePerDay = {pricePerDay}
                superHost = {superHost}
                startDate = {startDate}
                endDate = {endDate}
                totalnights = {totalnights}
                searchGuests= {searchGuests}
                />
            )
        }) 

        return searchResults; 
    }




    const searchResults = createSearchResults(); 
    const searchResultsMin = createSearchResultsMin(); 
    const formatedStartDateArr = startDate.toString().split(" "); 
    const formatedEndDateArr = endDate.toString().split(" ");


    
    return (
        <div className="searchPage">
            <div className="searchPage__info">
            
                <p>{searchResults.length}{searchGuests ? "": "+"} stays {searchGuests? `· ${formatedStartDateArr[1]} ${formatedStartDateArr[2]} to ${formatedEndDateArr[1]} ${formatedEndDateArr[2]} · ${searchGuests} guest`: ``}</p>
                <h1>Stays in Panama City Beach</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {searchResultsMin}
        </div>
    )
}

export default SearchPage

// {window.innerWidth <= 700 ? searchResultsMin: searchResults}