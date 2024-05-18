/**
 * Re-orders type strings according to the currently selected charge type
 * @param {string} types
 * @param {!ChargeType} selectedType
 * @return {!<Array<ChargeType>>}
 */

export const sortTypes = (types, selectedType) => {
  const typesArr = types.split(",");
  const typeIndex = typesArr.findIndex(
    (type) => type.toLowerCase() === selectedType.toLowerCase()
  );

  if (typeIndex !== -1 && typeIndex !== 0) {
    const temp = typesArr[typeIndex];
    typesArr[typeIndex] = typesArr[0];
    typesArr[0] = temp;
  }

  return typesArr;
};

export const sortingStations = (stations, type) => {
  if (!Array.isArray(stations) || stations.length === 0) {
    return;
  }

  // avoind mutating data
  const stationsCopy = [...stations];
  switch (type) {
    case "distance":
      return stationsCopy.sort((a, b) => {
        return a.distance - b.distance;
      });
    case "name":
      return stationsCopy.sort((a, b) => a.name.localeCompare(b.name));
    case "rating":
      return stationsCopy.sort((a, b) => b.rating - a.rating);
    case "price":
      return stationsCopy.sort((a, b) => a.price - b.price);
    default:
      return stations;
  }
};
