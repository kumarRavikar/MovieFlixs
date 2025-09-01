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
        let {movies,cartCount} = this.state
        const mId = movies.indexOf(movie)
        movies[mId].cart = !movies[mId].cart
        if(movies[mId].cart){
          cartCount += 1;
        }else{
          cartCount -= 1;
        }
        this.setState({
            movies,
            cartCount
        })
        console.log(cartCount)
    }
  
  render(){
    const {movies, cartCount} = this.state
    return (
   <>
   <Navbar cartCount={cartCount}/>
   <MovieList movies ={movies}
              addStars ={this.handilIncStar}
              decStars ={this.handilDecStar}
              addFav={this.handileFev}
              addCart ={this.handilCart} />
   </>
  );
  }
  
}

export default App;
