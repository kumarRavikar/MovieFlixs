
import { Outlet } from "react-router-dom";
import styles from "./navBar.module.css"
import { useDispatch , useSelector} from "react-redux";
import { selectCartCount, movieAction } from "./redux/MovieSlice";
import {useNavigate} from "react-router-dom";
import { logOutUser } from "./redux/AuthSlice";
function Navbar(){
        const navigate = useNavigate()
        const dispatch = useDispatch();
        const cartCount = useSelector(selectCartCount)
       const handleLogout = async()=>{
          await dispatch(logOutUser());
          navigate("/login")
       }
        return(
            <>
           <div className={styles.nav}>
            <div className={styles.title}> <h1>MovieFliex</h1></div>
            <span>
            <input type="text" placeholder="search movies" className={styles.searchInput} onChange={(e)=>dispatch(movieAction.searchMovies(e.target.value))}/>
            {/* <button className={styles.searchButton} onClick={handileSearch}>search</button> */}
            </span>
            <div className={styles.cartLogo}>
              <button onClick={()=>navigate("/cartItems")}>  
                <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Cart Logo" className={styles.image}/>
                <span  className={styles.cartCount}>{cartCount}</span>
                </button>
            </div>
             <button onClick={handleLogout} >LogOut</button>
           </div>
           <Outlet/>
           </>
        )
    }

export default Navbar;