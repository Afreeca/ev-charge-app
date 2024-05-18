import { sortTypes } from "../helpers/sorting";
import StationInfo from "./StationInfo";

/**
 * Renders a station element.
 * @param {StationType} station - The station information.
 * @param {string} filterOption - The value to sort the station types.
 * @param {Function} onClick - Callback for when a station card is clicked.
 * @return {!React.ReactElement}
 */

const StationCard = ({ station, filterOption, onClick }) => {
  const { name, address, image, types } = station;
  const sortedTypes = sortTypes(types, filterOption);
  return (
    <div className="station-card" onClick={onClick} tabIndex="0" role="button">
      <div className="station-info">
        <div className="station-image">
          <img src={image} alt="station" />
        </div>
        <div className="station-description">
          <h3 className="station-name">{name}</h3>
          <p className="station-address">{address}</p>
          <div className="station-types">
            {sortedTypes.map((type, index) => (
              <p
                key={index}
                className={`${type === filterOption ? "selected" : ""}`}
              >
                {`${type}${sortedTypes.length - 1 !== index ? "," : ""}`}
              </p>
            ))}
          </div>
        </div>
      </div>
      <StationInfo station={station} />
    </div>
  );
};

export default StationCard;
