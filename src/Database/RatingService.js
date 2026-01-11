import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { setLoading, setRatingData } from "../redux/RatingSlice"
import { auth, db } from "./FireBaseConfig";
  
//fetch ratings form movie
export const fetchRating =(movieId)=>async (dispatch)=>{
  dispatch(setLoading(true));
  const user = auth.currentUser; // check for current user
let average = 0;
let ratingCount = 0;
let hasRated = false;
let userRating = 0;
const movieRef = doc(db,'movies',movieId);
const movieSnap = await getDoc(movieRef); // reads movieData from firebase
if(movieSnap.exists()){
    const data = movieSnap.data();
      ratingCount = data.ratingCount || 0;
      average = ratingCount === 0 ?  0 : Number(data.totalRating/ratingCount);
}
      if(user){
        const userRatingRef = doc(db,"movies",movieId,"ratings",user.uid);
        const userSnap = await getDoc(userRatingRef);
        if(userSnap.exists()){
            hasRated = true;
            userRating = userSnap.data().value;
        }

      }
      dispatch(setRatingData({movieId,average:average.toFixed(1),ratingCount,hasRated,userRating}));
      dispatch(setLoading(false));
}
 // submiting rating to movie 
 export const submitRating = (movieId, value) => async (dispatch) => {
  const user = auth.currentUser;
  if (!user) return alert("Please login to rate");

  const movieRef = doc(db, "movies", movieId);
  const userRatingRef = doc(db, "movies", movieId, "ratings", user.uid);

  const movieSnap = await getDoc(movieRef);
  if (!movieSnap.exists()) return;

  const movieData = movieSnap.data();
  const totalRating = movieData.totalRating || 0;
  const ratingCount = movieData.ratingCount || 0;

  const userSnap = await getDoc(userRatingRef);

  // UPDATE CASE
  if (userSnap.exists()) {
    const oldValue = userSnap.data().value;

    await updateDoc(movieRef, {
      totalRating: totalRating - oldValue + value
    });

    await updateDoc(userRatingRef, {
      value,
      updatedAt: Date.now(),
    });

  } 
  // FIRST-TIME RATING
  else {
    await updateDoc(movieRef, {
      totalRating: totalRating + value,
      ratingCount: ratingCount + 1,
    });

    await setDoc(userRatingRef, {
      value,
      userId: user.uid,
      createdAt: Date.now(),
    });
  }

  dispatch(fetchRating(movieId));
};
