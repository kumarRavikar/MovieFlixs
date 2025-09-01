
import styles from "./navBar.module.css"
function Navbar(props){
        const {cartCount} = props
        return(
           <div className={styles.nav}>
            <div className={styles.title}> <h1>MovieFliex</h1></div>
            <span>
            <input placeholder="search movies" className={styles.searchInput}/>
            <button className={styles.searchButton}>search</button>
            </span>
            <div className={styles.cartLogo}>
                <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Cart Logo" className={styles.image}
                />
                <span show={true} className={styles.cartCount}>{cartCount}</span>
            </div>
           </div>
        )
    }

export default Navbar;