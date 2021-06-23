import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./Search/searchSlice";

export default configureStore({
    reducer: {
        search: searchSlice, 
    }
})