import React from 'react';
import { DateRangePicker } from "react-date-range"; 
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People';
import "./Search.css"
import { useHistory  } from 'react-router-dom'; 
import { addStartDate, addEndDate, addGuest, selectSearch } from './searchSlice'; 
import { useDispatch, useSelector } from 'react-redux'; 



//DATE PICKER COMPONENT 
// to get the date picker component type npm i react-date-range
function Search() {
    // const [startDate, setStartDate] = useState(new Date()); 
    // const [endDate, setEndDate] = useState(new Date()); 
    const history = useHistory(); 
    const dispatch = useDispatch(); 

    const selectionRange = {
        
        startDate: useSelector(selectSearch).startDate, 
        endDate: useSelector(selectSearch).endDate, 
        key: "selection",
    };

    function handleSelect(ranges){
        dispatch(addStartDate(ranges.selection.startDate));
        dispatch(addEndDate(ranges.selection.endDate))
        // setStartDate(ranges.selection.startDate); 
        // setEndDate(ranges.selection.endDate); 
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(addGuest(event.target.children[2].value))
        history.push("/search")
    }

    return (
        <div className="search">
            <form  onSubmit={handleSubmit}>
                <DateRangePicker 
                ranges={[selectionRange]} 
                onChange={handleSelect}
                />
                <h2>
                    Number of guests
                    <PeopleIcon/>
                </h2>
                <input min={1}
                defaultValue={1}
                max={3}
                type="number"/>
                <input type="submit" value="Search Airbnb"/>
            </form>
        </div>
    )
}

export default Search
