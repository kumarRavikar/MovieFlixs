import { configureStore } from "@reduxjs/toolkit";
import { movieReducers } from "./MovieSlice";
//import { auth } from "../Database/FireBaseConfig";
import { authReducer } from "./AuthSlice";

export const store = configureStore({
    reducer:{
        movies:movieReducers,
        auth:authReducer
    }
})