import { Component } from "react";
import Moviecard from "./MovieCard";
class MovieList extends Component {
    constructor(){
        super();
        this.state = {
           movies : [
    {
        id:1,
        title: "The Avengers",
        gener: "Suspense, Thriller, Action, Sci-fi",
        price: 199,
        poster:"https://m.media-amazon.com/images/I/81KJ-sK0YpS._UF894,1000_QL80_.jpg",
        rating: 8.9,
        stars: 0,
        fav: false,
        cart: false
    },
    {
        id:2,
        title: "Inception",
        gener: "Sci-fi, Mystery, Thriller",
        price: 249,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUjwnHd1O4AZ67lwFefLgKyY9dO7O-cXEjg&s",
        rating: 8.8,
        stars: 0,
        fav: false,
        cart: false
    },
    {
        id:3,
        title: "The Dark Knight",
        gener: "Action, Crime, Drama",
        price: 229,
        poster:"https://m.media-amazon.com/images/I/71UDww88XbL.jpg",
        rating: 9.0,
        stars: 0,
        fav: false,
        cart: false
    },
    {
        id:4,
        title: "Interstellar",
        gener: "Adventure, Drama, Sci-fi",
        price: 279,
        poster:"https://m.media-amazon.com/images/I/61wrhEawgQL._UF1000,1000_QL80_.jpg",
        rating: 8.6,
        stars: 0,
        fav: false,
        cart: false
    },
    {
        id:5,
        title: "Jurassic World",
        gener: "Action, Adventure, Sci-fi",
        price: 199,
        poster:"https://upload.wikimedia.org/wikipedia/en/a/a5/Jurassic_World_Rebirth_poster.jpg",
        rating: 7.5,
        stars: 0,
        fav: false,
        cart: false
    },
    {
        id:6,
        title: "Avatar",
        gener: "Action, Adventure, Fantasy",
        price: 249,
        poster:"https://m.media-amazon.com/images/S/pv-target-images/48448d3f65992c3c9da909933f7fa659efe20d88becd4b62459bc62e0da1889a.jpg",
        rating: 7.8,
        stars: 0,
        fav: false,
        cart: false
    }
]
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
        //const {title,gener,price,poster,rating,stars,fav,cart} = this.state.movies;
        const {movies}=this.state;
        return(
          <>
          {movies.map((movie)=><Moviecard movies ={movie} 
          addStars={this.handilIncStar} 
          decStars={this.handilDecStar} addFav={this.handileFev } addsCart ={this.handilCart} key={movie.id}/>)}
          
          </>
        ) 
    }
}
export default MovieList ;