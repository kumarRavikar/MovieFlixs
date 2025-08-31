import  { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./navBar";
import { movies } from "./moviesData";

class App extends Component  {
  constructor(){
        super();
        this.state = {
           movies : movies,
           cartCount : 0
        }
    }
  
    handilIncStar=(movie)=>{
       const {movies} = this.state
       const mId = movies.indexOf(movie);
       if(movies[mId].stars >= 5) return;
       movies[mId].stars += 0.5;
       this.setState({
        movies:movies
       })
    }
    handilDecStar = (movie)=>{
      const {movies} = this.state;
      const mId = movies.indexOf(movie);
      if(movies[mId].stars <= 0)return;
      movies[mId].stars -= 0.5;
      this.setState({
        movies
      })
    }
    handileFev =(movie)=>{
      const {movies} = this.state
      const mId = movies.indexOf(movie)
      movies[mId].fav = !movies[mId].fav
        this.setState({
            movies
        })
    }
    handilCart =(movie)=>{
        const {movies} = this.state
        const mId = movies.indexOf(movie)
        movies[mId].cart = !movies[mId].cart
        this.setState({
            movies
        })
    }
  render(){
    return (
   <>
   <Navbar/>
   <MovieList movies ={this.state.movies}
              addStars ={this.handilIncStar}
              decStars ={this.handilDecStar}
              addFav={this.handileFev}
              addCart ={this.handilCart} />
   </>
  );
  }
  
}

export default App;
