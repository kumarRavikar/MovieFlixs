
import {  useSelector } from "react-redux";
import Moviecard from "./MovieCard";
import { filterMovies } from "./redux/MovieSlice";

function MovieList() {  
        //const {title,gener,price,poster,rating,stars,fav,cart} = this.state.movies;
        const movies = useSelector(filterMovies); 
        return(
          <>
          {movies.map((movie) => (
        <Moviecard
        movie={movie}
        key={movie.id}
      />
    ))}
          
          </>
        ) 
    }

export default MovieList ;