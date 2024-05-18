import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import StationCard from "./components/StationCard";
import StationDetails from "./components/StationDetails";
import {sortingOptions, typeOptions} from "./data/constants";
import fetchSearchResults from "./api/fetchResults";
import { sortingStations } from "./helpers/sorting";

const App = () => {
  const [stations, setStations] = useState([]);
  const [chargeId, setChargeId] = useState(0);
  const [sortTypeId, setSortTypeId] = useState(0);
  const [selectedStation, setSelectedStation] = useState(null);

  useEffect(() => {
    const loadStations = async () => {
      const stations = await fetchSearchResults(chargeId);
      setStations(stations);
    };

    loadStations();
  }, [chargeId]);

  const sortedStations = useMemo(() => {
    return sortingStations(stations, sortingOptions[sortTypeId])
  },[stations, sortTypeId])

  const renderStationList = () => {
    return (
      <>
        <Header
          typeOptions={typeOptions}
          sortingOptions={sortingOptions}
          setChargeId={setChargeId}
          sortTypeId={sortTypeId}
          setSorting={setSortTypeId}
          chargeId={chargeId}
          />
          <div className="station-container">
            {sortedStations?.length > 0 ? (
                sortedStations.map((station) => (
                <StationCard
                    onClick={() => setSelectedStation(station)}
                    key={station.id}
                    filterOption={typeOptions[chargeId]}
                    station={station}
                />
                ))
            ) : (
                <h2>No results to show.</h2>
            )}
          </div>
      </>
    );
  }

  const renderStationDetails = (station) => {
    return (
      <StationDetails
        onBackClick={() => setSelectedStation(null)}
        station={station}
      />
    );
  }

  return (
    <div className="main-container">
      {selectedStation === null
       ? renderStationList()
       : renderStationDetails(selectedStation)}
    </div>
  );
};

export default App;
