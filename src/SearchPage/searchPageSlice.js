import { createSlice } from "@reduxjs/toolkit"; 
import hostMaker from '../Data';



export const searchPageSlice = createSlice({
    name: "searchPage", 
    initialState: {
        host: hostMaker(), 
    }, 
    reducers: {
        editHostIsLiked: (state, action) => {
            state.host[action.payload.id].isLiked = action.payload.isLiked; 

        },
    }
})





export const { editHostIsLiked } = searchPageSlice.actions; 

export const selectSearchPage = (state) => state.searchPage; 

export default searchPageSlice.reducer; 