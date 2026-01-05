import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/MovieSlice";
import { Link } from "react-router-dom";
 const Moviecard=React.memo(({movie})=> { 
        // const {movies, addStars, decStars, addFav} = props
        const {id,title, gener, price, poster,rating, stars,fav, cart} = movie;
        const dispatch = useDispatch();
        const decStarsHandler = useCallback(()=>{
            dispatch(movieAction.decStars(id)) 
        },[dispatch,id]);
        const incStarHandler = useCallback(()=>{
            dispatch(movieAction.incStars(id))
        },[dispatch,id]);
        const toggleFevHandler = useCallback(()=>{
            dispatch(movieAction.toggleFav(id))
        },[dispatch,id]);
        const toggleCartHandler = useCallback(()=>{
            dispatch(movieAction.toggleCart(id))
        },[dispatch,id])
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src= {poster} alt="Poster"/>
                    </div>
                    <div className="right">
                       <Link to={`/movie/${id}`}   style={{ textDecoration: "none", color: "inherit" }}>
                        <div className="title">{title}</div>
                        <div className="gener">{gener}</div>
                        <div className="price">Rs.{price}</div>
                        </Link>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="stars"> 
                                <img className = "btn-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/225/225148.png" 
                                onClick={() =>decStarsHandler(id)}/>
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png"/>
                                <img className = "btn-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/225/225149.png"
                                 onClick={() =>incStarHandler(id) }/>
                                <span> {stars} </span>
                                 </div>
                                 {/* {fav? <button className="un-fav"  onClick={this.handilFav}>Remove from Favourite</button>:<button className="fav" onClick={this.handilFav}>Add To Favourite</button>} */}
                                 <button className={fav?"un-fav":"fav"} onClick={() =>toggleFevHandler(id)}>
                                    {fav?"Remove from Favourite":"Add To Favourite"}</button>
                           
                            <button className ={cart?"remove-cart":"cart"} onClick={() =>toggleCartHandler(id)}>
                                {cart?"Remove FromCart":"Add To Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    } )
export default Moviecard;