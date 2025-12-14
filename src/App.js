// import  { Component } from "react";
// import MovieList from "./MovieList";
// import Navbar from "./navBar";
// import { movies } from "./moviesData";

// class App extends Component  {
//   constructor(){
//         super();
//         this.state = {
//            movies : movies,
//            cartCount : 0
//         }
//     }
  
//     handilIncStar=(movie)=>{
//        const {movies} = this.state
//        const mId = movies.indexOf(movie);
//        if(movies[mId].stars >= 5) return;
//        movies[mId].stars += 0.5;
//        this.setState({
//         movies:movies
//        })
//     }
//     handilDecStar = (movie)=>{
//       const {movies} = this.state;
//       const mId = movies.indexOf(movie);
//       if(movies[mId].stars <= 0)return;
//       movies[mId].stars -= 0.5;
//       this.setState({
//         movies
//       })
//     }
//     handileFev =(movie)=>{
//       const {movies} = this.state
//       const mId = movies.indexOf(movie)
//       movies[mId].fav = !movies[mId].fav
//         this.setState({
//             movies
//         })
//     }
//     handilCart =(movie)=>{
//         let {movies,cartCount} = this.state
//         const mId = movies.indexOf(movie)
//         movies[mId].cart = !movies[mId].cart
//         if(movies[mId].cart){
//           cartCount += 1;
//         }else{
//           cartCount -= 1;
//         }
//         this.setState({
//             movies,
//             cartCount
//         })
//         console.log(cartCount)
//     }
  
//   render(){
//     const {movies, cartCount} = this.state
//     return (
//    <>
//    <Navbar cartCount={cartCount}/>
//    <MovieList movies ={movies}
//               addStars ={this.handilIncStar}
//               decStars ={this.handilDecStar}
//               addFav={this.handileFev}
//               addCart ={this.handilCart} />
//    </>
//   );
//   }
  
// }

// export default App;
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import Navbar from "./navBar";
import { movies as moviesData } from "./moviesData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  // const [movies, setMovies] = useState(moviesData);
  // const [cartCount, setCartCount] = useState(0);
  // const [search, setSearch] = useState("");
  // //  Increase stars
  // const handleIncStar = (movie) => {
  //   const updated = movies.map((m) =>
  //     m === movie && m.stars < 5 ? { ...m, stars: m.stars + 0.5 } : m
  //   );
  //   setMovies(updated);
  // };

  // //  Decrease stars
  // const handleDecStar = (movie) => {
  //   const updated = movies.map((m) =>
  //     m === movie && m.stars > 0 ? { ...m, stars: m.stars - 0.5 } : m
  //   );
  //   setMovies(updated);
  // };

  // //Toggle Favourite
  // const handleFav = (movie) => {
  //   const updated = movies.map((m) =>
  //     m === movie ? { ...m, fav: !m.fav } : m
  //   );
  //   setMovies(updated);
  // };

  // // 🛒 Add/Remove Cart
  // const handleCart = (movie) => {
  //   const updated = movies.map((m) =>
  //     m === movie ? { ...m, cart: !m.cart } : m
  //   );

  //   // Update cart count
  //   const newCartCount = updated.filter((m) => m.cart).length;

  //   setMovies(updated);
  //   setCartCount(newCartCount);
  // };
  //  // search Functionality
  //   const filterred = movies.filter((m)=>m.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    // Addinf react router DOM
     const router = createBrowserRouter([
          {path:"/", element:<Navbar/>, children:[
            {index:true, element:<MovieList/>}
          ]}
     ])
     return <RouterProvider router={router}/>
  // return (
  //   <>
     
      
      
  //   </>
  // );
};

export default App;
