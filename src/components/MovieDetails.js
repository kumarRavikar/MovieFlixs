import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { filterMovies, movieAction } from "../redux/MovieSlice";
import StarRating from "./StarRating";

import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const movies = useSelector(filterMovies);
  const selectedMovie = movies.find((movie) => movie.id === id);

  //  Hooks MUST be declared before conditional return
  const toggleFavHandler = useCallback(() => {
    dispatch(movieAction.toggleFav(id));
  }, [dispatch, id]);

  const toggleCartHandler = useCallback(() => {
    dispatch(movieAction.toggleCart(id));
    navigate("/cartItems");
  }, [dispatch, id, navigate]);

  //  Guard after hooks
  if (!selectedMovie) {
    return (
      <div className={styles.mainWrapper}>
        <p style={{ color: "white" }}>Movie not found</p>
      </div>
    );
  }

  const { title, gener, price, trailer, fav, cart } = selectedMovie;

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.cardBox}>
        <Link to="/movie" style={{ textDecoration: "none", color: "white" }}>
          ← Go Back
        </Link>

        <div className={styles.leftBox}>
          <iframe
            className={styles.posterImg}
            src={trailer}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className={styles.rightBox}>
          <h2 className={styles.movieTitle}>{title}</h2>
          <p className={styles.genreText}>{gener}</p>
          <p className={styles.priceText}>₹ {price}</p>

          <div className={styles.footerBox}>
           
            <StarRating movieId={id} />

            <button
              className={fav ? styles.unFavBtn : styles.favBtn}
              onClick={toggleFavHandler}
            >
              {fav ? "Remove Favourite" : "Add Favourite"}
            </button>

            <button
              className={cart ? styles.removeCartBtn : styles.cartBtn}
              onClick={toggleCartHandler}
            >
              {cart ? "Remove From Cart" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
