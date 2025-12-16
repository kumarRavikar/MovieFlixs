import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMoviesFromFirestore } from "../Database/MovieServices";
//import { movies } from "../moviesData";
const initialState = {
   movies:[], //All Movies data
   filterMovies:[], //filtering movies
   CartCount:0,    //add to cart count
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
            const query = action.payload.toLowerCase();
            state.filterMovies=state.movies.filter(movie=>movie.title.toLowerCase().includes(query));
        },
        
        //Adding stars 
        incStars:(state,action)=>{
        const movie = state.movies.find((m)=>m.id === action.payload);
        if(movie && movie.stars < 5){
            movie.stars += 0.5;
        }
        state.filterMovies = [...state.movies];
        },
        decStars:(state,action)=>{
           const movie = state.movies.find((m)=>m.id === action.payload);
           if(movie && movie.stars > 0){
              movie.stars -= 0.5;
           }
           state.filterMovies = [...state.movies];
        },
        toggleFav:(state,action)=>{
         const movie = state.movies.find((m)=>m.id === action.payload);
         if(movie){
            movie.fav = !movie.fav;
         }
         state.filterMovies = [...state.movies];
        },
         toggleCart:(state,action)=>{
            const movie = state.movies.find((m)=>m.id === action.payload);
            if(movie){
                movie.cart = !movie.cart;
                state.CartCount += movie.cart ? 1 : -1;
            }
            state.filterMovies = [...state.movies];
         },
        //Remove from cart functionality
        removeFromCart:(state,action)=>{
            const movie = state.movies.find(m=>m.id === action.payload);
            if (movie && movie.cart) {
                movie.cart = false;
                state.CartCount -= 1;
             }
             state.filterMovies = [...state.movies];

        },
       
    },
    extraReducers:(builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
        state.filterMovies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});
export const movieReducers = movieSlice.reducer;
export const movieAction = movieSlice.actions;
export const selectCartCount = (state)=>state.movies.CartCount;
export const filterMovies = (state)=>state.movies.filterMovies;
export const selectCartItems = (state)=>state.movies.movies.filter(movie=>movie.cart === true);
