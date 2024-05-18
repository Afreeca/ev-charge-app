import { memo } from "react";
import { arePropsEqual } from "../helpers/compare";
import StarRating from "./StarRating";

/**
 * Renders Station information.
 * @param {StationType} station - The station information.
 * @return {!React.ReactElement}
 */
const StationInfo = ({ station }) => {
  const { distance, price, rating } = station;

  return (
    <div className="station-specs">
      <StarRating numStars={rating} />
      <div className="station-price">
        Price:{" "}
        {Array(price)
          .fill()
          .map((_, index) => (
            <label key={index}>$</label>
          ))}
      </div>
      <div className="station-distance">
        <label>Miles: {distance}</label>
      </div>
    </div>
  );
};

const memoIzedStationInfo = memo(StationInfo, arePropsEqual);
export default memoIzedStationInfo;
