
import StationInfo from "./StationInfo";

/**
 * Renders the details view for a station.
 * @param {Function} onBackClick - A callback to go back to the station list.
 * @param {StationType} station - The station information.
 * @return {!React.ReactElement}
 */
const StationDetails = ({ onBackClick, station }) => {
  let { address, image, name, types } = station;

  return (
    <div className="station-details">
      <button onClick={onBackClick} className="button-back">
          Back
      </button>
      <div>
          <img src={image} alt="station" />
          <div className="station-description">
              <h3 className="station-name">{name}</h3>
              <p className="station-address">{address}</p>
              <p className="station-types">{types.replaceAll(",", ", ")}</p>
            </div>
      </div>
      <StationInfo station={station}/>
    </div>
  );
}

export default StationDetails;
