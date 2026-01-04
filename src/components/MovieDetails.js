
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { filterMovies } from '../redux/MovieSlice';
import { movieAction } from '../redux/MovieSlice';
import { Link } from 'react-router-dom';
import styles from "./MovieDetails.module.css"
export const MovieDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const movie = useSelector(filterMovies);
    const movies = movie.find(m=> m.id === id);
     const {title, gener, price, trailer,rating, stars,fav, cart} = movies;
     const dispatch = useDispatch();
    
        return(
           <div className={styles.mainWrapper}>
            
      <div className={styles.cardBox}>
         <Link to='/movie' style={{textDecoration:'none' , color:'white'}}>Go Back</Link>
        <div className={styles.leftBox}>
          {/* <img className={styles.posterImg} src={poster} alt="Poster" /> */}
          <iframe className={styles.posterImg} src={trailer} title={`${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
          </iframe>
        </div>

        <div className={styles.rightBox}>
          <h2 className={styles.movieTitle}>{title}</h2>
          <p className={styles.genreText}>{gener}</p>
          <p className={styles.priceText}>₹ {price}</p>

          <div className={styles.footerBox}>

            <span className={styles.ratingBox}>⭐ {rating}</span>

            <div className={styles.starsBox}>
              <img
                className={styles.starBtn}
                alt="decrease"
                src="https://cdn-icons-png.flaticon.com/128/225/225148.png"
                onClick={() => dispatch(movieAction.decStars(id))}
              />

              <img
                className={styles.starIcon}
                src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png"
                alt="star"
              />

              <img
                className={styles.starBtn}
                alt="increase"
                src="https://cdn-icons-png.flaticon.com/128/225/225149.png"
                onClick={() => dispatch(movieAction.incStars(id))}
              />

              <span className={styles.starValue}>{stars}</span>
            </div>

            <button
              className={fav ? styles.unFavBtn : styles.favBtn}
              onClick={() => dispatch(movieAction.toggleFav(id))}
            >
              {fav ? "Remove Favourite" : "Add Favourite"}
            </button>

            <button
              className={cart ? styles.removeCartBtn : styles.cartBtn}
              onClick={() => {dispatch(movieAction.toggleCart(id));navigate("/cartItems")}}
              
            >
              {cart ? "Remove From Cart" : "Add To Cart"}
            </button>

          </div>
        </div>
       
      </div>
      
    </div>
        ) 
}
