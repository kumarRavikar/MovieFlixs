
function Moviecard(props) { 
        const {movies, addStars, decStars, addFav, addCart} = props
        const {title, gener, price, poster,rating, stars,fav, cart} = props.movies;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src= {poster} alt="Poster"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="gener">{gener}</div>
                        <div className="price">Rs.{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="stars"> 
                                <img className = "btn-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/225/225148.png" 
                                onClick={() => {decStars(movies)}}/>
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png"/>
                                <img className = "btn-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/225/225149.png"
                                 onClick={() => {addStars(movies)}}/>
                                <span> {stars} </span>
                                 </div>
                                 {/* {fav? <button className="un-fav"  onClick={this.handilFav}>Remove from Favourite</button>:<button className="fav" onClick={this.handilFav}>Add To Favourite</button>} */}
                                 <button className={fav?"un-fav":"fav"} onClick={() => {addFav(movies)}}>
                                    {fav?"Remove from Favourite":"Add To Favourite"}</button>
                           
                            <button className ={cart?"remove-cart":"cart"} onClick={() => {addCart(movies)}}>
                                {cart?"Remove FromCart":"Add To Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    } 
export default Moviecard;