import { render, screen } from "@testing-library/react";
import StationInfo from "../../components/StationInfo";
import STATIONS from "../__mockData__/stations";

describe("StationDetails", () => {
  it("should render info correctly", () => {
    const station = STATIONS[0];
    render(<StationInfo station={station} />);
    const rating = screen.getByTestId("star-rating");
    const price = screen.getByText(/price/i);
    const miles = screen.getByText(
      new RegExp(`miles: ${station.distance}`, "i")
    );

    expect(rating).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(miles).toBeInTheDocument();
  });
});
