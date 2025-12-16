import { collection, getDocs } from "firebase/firestore";
import { db } from "./FireBaseConfig";

export const fetchMoviesFromFirestore = async () => {
  const snapshot = await getDocs(collection(db, "movies"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    stars: 0,
    fav: false,
    cart: false,
    ...doc.data()
  }));
};
