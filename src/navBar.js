import  { Component } from "react"
//import styled from "styled-components";
import styles from "./navBar.module.css"
class Navbar extends Component{
    render(){
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
                <span show={true} className={styles.cartCount}>3</span>
            </div>
           </div>
        )
    }
}
export default Navbar;