import { collection, getDocs } from "firebase/firestore";
import { db } from "./FireBaseConfig";

// fetching movies 
export const fetchMoviesFromFirestore = async () => {
  const snapshot = await getDocs(collection(db, "movies"));
  return snapshot.docs.map(doc => {
    const data = doc.data();
    const totalRating = data.totalRating || 0;
    const ratingCount = data.ratingCount || 0;
    return{
        id: doc.id,
        fav : data.fav || false,
        cart : data.cart || false,
        price : data.price,
        title : data.title,
        poster : data.poster,
        trailer : data.trailer,
        year : data.year,
        gener : data.gener,
        totalRating : ratingCount === 0 ? 0 : (totalRating / ratingCount).toFixed(1), // hndling rating int fireStore ui only
        ratingCount
    }
   
  });
};
 