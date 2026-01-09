import { configureStore } from "@reduxjs/toolkit";
import { movieReducers } from "./MovieSlice";
//import { auth } from "../Database/FireBaseConfig";
import { authReducer } from "./AuthSlice";
import {ratingReducer} from "./RatingSlice";
export const store = configureStore({
    reducer:{
        movies:movieReducers,
        auth:authReducer,
        rating : ratingReducer
    }
})