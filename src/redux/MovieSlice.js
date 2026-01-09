import { createSlice,createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { fetchMoviesFromFirestore } from "../Database/MovieServices";
//import { queries } from "@testing-library/dom";
//import { movies } from "../moviesData";
const initialState = {
   movies:[], //All Movies data
   searchQuery:"", //filtering movies
  loading: false,
  error: null       
}
  export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async () => {
    return await fetchMoviesFromFirestore();
  }
);
const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        //filter or search movies functionality
        searchMovies:(state,action)=>{
            state.searchQuery = action.payload.toLowerCase();
        },
        // add to fav
        toggleFav:(state,action)=>{
         const movie = state.movies.find((m)=>m.id === action.payload);
         if(movie){
            movie.fav = !movie.fav;
            
         }
        },
        //add to card
         toggleCart:(state,action)=>{
            const movie = state.movies.find((m)=>m.id === action.payload);
            if(movie){
                movie.cart = !movie.cart;
                
            }
           
         },
        //Remove from cart functionality
        removeFromCart:(state,action)=>{
            const movie = state.movies.find(m=>m.id === action.payload);
            if (movie && movie.cart) {
                movie.cart = false;
               
             }

        },
       
    },
    //handling promise in extraReducer
    extraReducers:(builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});
export const movieReducers = movieSlice.reducer;
export const movieAction = movieSlice.actions;
const selectMovies = state=>state.movies.movies; //selecting all movies 
const selectQuery = state=>state.movies.searchQuery;//selection querty for search
export const filterMovies = createSelector([selectMovies, selectQuery],(movies,query)=>{
  if(!query){
    return movies
    };
  return movies.filter(movie=>movie.title.toLowerCase().includes(query));
})
export const selectCartItems = createSelector([selectMovies],(movies)=>movies.filter(m=>m.cart));
export const selectCartTotalPrice = createSelector([selectCartItems],(movies)=>movies.reduce((total,movie)=>total+movie.price,0));
export const selectCartCount = createSelector([selectCartItems],(cart)=>cart.length);
export const selectLoading = (state)=>state.movies.loading;
export const selectError = (state)=>state.movies.error;
// export const selectCartCount = (state)=>state.movies.CartCount;
// export const filterMovies = (state)=>state.movies.filterMovies;
// export const selectCartItems = (state)=>state.movies.movies.filter(movie=>movie.cart === true);
// //implemented a total price in cart 
// export const selectCartTotalPrice = (state)=>state.movies.movies.filter(movie=>movie.cart === true).reduce((total,movie)=>total + movie.price,0);
                                         