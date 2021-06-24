import { createSlice } from '@reduxjs/toolkit'; 



export const searchSlice = createSlice({
    name: "search",
    initialState: {
        startDate: new Date(), 
        endDate: new Date(), 
        guests: 0
    }, 
    reducers: {
        addStartDate: (state, action) => {
            state.startDate = action.payload; 
        }, 

        addEndDate: (state, action) => {
            state.endDate = action.payload; 
            
        }, 

        addGuest: (state, action) => {
            state.guests = action.payload; 
        }

    }

})


export const { addStartDate, addEndDate, addGuest } = searchSlice.actions; 

export const selectSearch = (state) => state.search; 

export default searchSlice.reducer; 
