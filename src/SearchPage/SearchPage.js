import React from 'react'; 
import './SearchPage.css'
import { Button } from "@material-ui/core"
import SearchResult from '../SearchResult/SearchResult';
import { selectSearch } from '../Search/searchSlice'; 
import { useSelector } from 'react-redux'; 
import { selectSearchPage } from './searchPageSlice'; 


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

    const searchResults = createSearchResults(); 
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
            {searchResults}
        </div>
    )
}

export default SearchPage

// <SearchResult
// img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
// location="Private room in center of London"
// title="Stay at this spacious Edwardian House"
// description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
// star={4.73}
// price="£30 / night"
// total="£117 total"
// />