import { configureStore } from "@reduxjs/toolkit";
import { movieReducers } from "./MovieSlice";

export const store = configureStore({
    reducer:{
        movies:movieReducers
    }
})