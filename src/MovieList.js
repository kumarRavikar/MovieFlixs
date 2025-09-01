
import Moviecard from "./MovieCard";

function MovieList(props) {  
        //const {title,gener,price,poster,rating,stars,fav,cart} = this.state.movies;
        const {movies, addStars ,decStars,addFav, addCart}= props;
        return(
          <>
          {movies.map((movie) => (
        <Moviecard
        movies={movie}
        addStars={addStars}
        decStars={decStars}
        addFav={addFav}
        addCart={addCart}
        key={movie.id}
      />
    ))}
          
          </>
        ) 
    }

export default MovieList ;