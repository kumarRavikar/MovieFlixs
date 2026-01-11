import { configureStore } from "@reduxjs/toolkit";
import { movieReducers } from "./MovieSlice";
//import { auth } from "../Database/FireBaseConfig";
import { authReducer } from "./AuthSlice";
import {ratingReducer} from "./RatingSlice";
import { aiReducer } from "./AiSlice";
export const store = configureStore({
    reducer:{
        movies:movieReducers,
        auth:authReducer,
        rating : ratingReducer,
        ai: aiReducer
    }
})