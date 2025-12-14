
import { Outlet } from "react-router-dom";
import styles from "./navBar.module.css"
import { useDispatch , useSelector} from "react-redux";
import { selectCartCount, movieAction } from "./redux/MovieSlice";

function Navbar(){
        
        const dispatch = useDispatch();
        const cartCount = useSelector(selectCartCount)
        console.log(cartCount)
        return(
            <>
           <div className={styles.nav}>
            <div className={styles.title}> <h1>MovieFliex</h1></div>
            <span>
            <input type="text" placeholder="search movies" className={styles.searchInput} onChange={(e)=>dispatch(movieAction.searchMovies(e.target.value))}/>
            {/* <button className={styles.searchButton} onClick={handileSearch}>search</button> */}
            </span>
            <div className={styles.cartLogo}>
                <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Cart Logo" className={styles.image}
                />
                <span show={true} className={styles.cartCount}>{cartCount}</span>
            </div>
           </div>
           <Outlet/>
           </>
        )
    }

export default Navbar;