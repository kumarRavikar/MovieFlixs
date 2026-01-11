import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRating, submitRating } from "../Database/RatingService";

const StarRating = ({ movieId }) => {
  const dispatch = useDispatch();

  const rating =
    useSelector((state) => state.rating.ratings[movieId]) || {
      average: 0,
      ratingCount: 0,
      userRating: 0,
    };

  const { userRating } = rating;
  const [hover, setHover] = useState(0);

  useEffect(() => {
    dispatch(fetchRating(movieId));
  }, [dispatch, movieId]);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: "26px",
            cursor: "pointer",
            color:
              star <= (hover || userRating)
                ? "gold"
                : "gray",
          }}
          onClick={() => dispatch(submitRating(movieId, star))}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}

      {userRating > 0 && <p>Your rating: ⭐ {userRating}</p>}
    </div>
  );
};

export default StarRating;
