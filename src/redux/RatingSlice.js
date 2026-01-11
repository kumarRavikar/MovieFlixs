import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    ratings:{},
    loading:false
}
const ratingSlice = createSlice({
   name:"ratings",
   initialState,
   reducers:{
     setRatingData:(state,action)=>{
        const {movieId,average,ratingCount, hasRated,userRating} = action.payload;
        state.ratings[movieId]= {
            average, ratingCount, hasRated, userRating
        }
     },
     setLoading:(state,action)=>{
        state.loading = action.payload;
     }
   }
})
export const {setRatingData,setLoading} = ratingSlice.actions;
export const ratingReducer =  ratingSlice.reducer;