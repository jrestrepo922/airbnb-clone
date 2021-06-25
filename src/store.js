import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./Search/searchSlice";
import searchPageSlice from "./SearchPage/searchPageSlice";

export default configureStore({
    reducer: {
        search: searchSlice, 
        searchPage: searchPageSlice, 
    }
})