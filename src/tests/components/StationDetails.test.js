import { render, screen } from "@testing-library/react";
import StationDetails from "../../components/StationDetails";
import STATIONS from "../__mockData__/stations";

describe("StationDetails", () => {
  it("should render the back button", () => {
    const station = STATIONS[0];
    render(<StationDetails station={station} onBackClick={jest.fn()} />);
    const backButton = screen.getByRole("button", { name: /back/i });

    expect(backButton).toBeInTheDocument();
  });

  it("should render station details", () => {
    const station = STATIONS[0];
    render(<StationDetails station={station} onBackClick={jest.fn()} />);
    const carImage = screen.getByRole("img", { name: /station/i });
    const stationName = screen.getByText(station.name);
    const stationAddress = screen.getByText(station.address);

    expect(carImage).toBeInTheDocument();
    expect(stationName).toBeInTheDocument();
    expect(stationAddress).toBeInTheDocument();
  });

  it("should render station extra information", () => {
    const station = STATIONS[0];
    render(<StationDetails station={station} onBackClick={jest.fn()} />);

    const rating = screen.getByTestId("star-rating");
    expect(rating).toBeInTheDocument();
  });
});
