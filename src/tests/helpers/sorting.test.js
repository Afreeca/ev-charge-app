import { typeOptions } from "../../data/constants";
import { sortTypes } from "../../helpers/sorting";
import STATIONS from "../__mockData__/stations";

describe("sorting", () => {
  const station = STATIONS[0];
  const sortedTypes = ["Mesla Supercharger", "QAE Combo CCS"];

  describe("sortTypes", () => {
    it("should sort station types", () => {
      const res = sortTypes(station.types, typeOptions[0]);
      expect(res).toEqual(sortedTypes);
    });
  });
});
