import { useDispatch, useSelector } from "react-redux"
import { movieAction, selectCartItems } from "./redux/MovieSlice"
import styles from "../src/CartItems.module.css"
 export const CartItems =()=>{
     const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    if(cartItems.length === 0){
        return <h1 className={styles.empty}>🛒 Cart is Empty</h1>;
    }
  return(
    <>
     <div className={styles.cartContainer}>
      <h2 className={styles.heading}>My Cart</h2>

      {cartItems.map(movie => (
        <div className={styles.cartCard} key={movie.id}>
          <img
            src={movie.poster}
            alt={movie.title}
            className={styles.poster}
          />

          <div className={styles.cartDetails}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.gener}</p>
            <p>Price: ₹{movie.price}</p>
            <p>Rating: {movie.rating}</p>
          </div>

          <button
            className={styles.removeCart}
            onClick={() => dispatch(movieAction.toggleCart(movie.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  
    </>
  )
}
