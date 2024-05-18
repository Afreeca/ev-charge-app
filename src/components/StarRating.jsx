import { memo } from "react";
import "../styles/StarRating.css";
import Star from "./Star";

const TOTAL_POSSIBLE_STARS = 5;

/**
 * Renders a star rating.
 * @param {number} numStars - The total number of stars.
 * @return {!React.ReactElement}
 */

const StarRating = memo(({ numStars }) => {
  // get the full stars
  const filledStars = Math.floor(numStars);
  // verify if there is half star
  const hasHalfStar = numStars - filledStars >= 0.5;

  // keep track of stars hat needs to be displayed
  const stars = [];
  for (let i = 0; i < TOTAL_POSSIBLE_STARS; i++) {
    if (i < filledStars) {
      // Full star
      stars.push(<Star key={i} type="filled" />);
    } else if (i === filledStars && hasHalfStar) {
      // Half star
      stars.push(<Star key={i} type="half-filled" />);
    } else {
      // Empty star
      stars.push(<Star key={i} type="empty" />);
    }
  }

  return (
    <div className="station-rating" data-testid={"star-rating"}>
      {stars}
    </div>
  );
});

export default StarRating;
