import { Component } from "react";
import Moviecard from "./MovieCard";

class MovieList extends Component {  
    render(){
        //const {title,gener,price,poster,rating,stars,fav,cart} = this.state.movies;
        const {movies, addStars ,decStars,addFav, addCart}=this.props;
        console.log(this.props)
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
}
export default MovieList ;