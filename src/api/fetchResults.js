/**
 * @typedef{{
 *   id: string,
 *   name: string,
 *   address: string,
 *   price: number,
 *   rating: number,
 *   distance: float,
 *   types: string,
 *   image: string,
 * }} StationType 
 */

/**
 * Requests the list of stations for a particular charger type.
 * @param {string} chargeId
 * @return {!Promise<!Array<!StationType>>}
 */

const fetchSearchResults = async (chargeId) => {
  try {
    const response = await fetch(`https://api.byteboard.dev/data/v2/stations/${chargeId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data.stations;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchSearchResults;
