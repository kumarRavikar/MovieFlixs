
import {useDispatch,  useSelector } from "react-redux";
import Moviecard from "./MovieCard";
import { fetchMovies, filterMovies } from "../redux/MovieSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
 
function MovieList() {  
        //const {title,gener,price,poster,rating,stars,fav,cart} = this.state.movies;
        const movies = useSelector(filterMovies); 
         const loading = useSelector(state => state.movies.loading);
        const dispatch = useDispatch();
        useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <h2>Loading Movies...</h2>;
        return(
          <div>

              {movies.map((movie) => (
                <Link  style={{ textDecoration: "none", color: "inherit" }}>
             <Moviecard
        movie={movie}
        key={movie.id}
      />
      </Link>
    ))}
          </div>
                 
        ) 
    }

export default MovieList ;