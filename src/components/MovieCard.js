import React from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/MovieSlice";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const Moviecard = React.memo(({ movie }) => {
  const {
    id,
    title,
    gener,
    price,
    poster,
    fav,
    cart
  } = movie;

  const dispatch = useDispatch();


  return (
    <div className="main">
      <div className="movie-card">
        <div className="left">
          <img src={poster} alt="Poster" />
        </div>

        <div className="right">
          <Link
            to={`/movie/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="title">{title}</div>
            <div className="gener">{gener}</div>
            <div className="price">Rs. {price}</div>
          </Link>

        

          {/* Clickable star rating */}
          <StarRating movieId={id} />

          <div className="footer">
            <button
              className={fav ? "un-fav" : "fav"}
              onClick={()=>dispatch(movieAction.toggleFav(id))}
            >
              {fav ? "Remove from Favourite" : "Add To Favourite"}
            </button>

            <button
              className={cart ? "remove-cart" : "cart"}
              onClick={()=>dispatch(movieAction.toggleCart(id))}
            >
              {cart ? "Remove From Cart" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Moviecard;
