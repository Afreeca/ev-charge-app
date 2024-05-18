import { render, screen } from "@testing-library/react";
import StationCard from "../../components/StationCard";
import { typeOptions } from "../../data/constants";
import STATIONS from "../__mockData__/stations";

describe("StationCard", () => {
  const station = STATIONS[0];
  const sortedTypes = ["QAE Combo CCS", "Mesla Supercharger"];

  it("should render the card correctly", () => {
    render(
      <StationCard
        station={station}
        filterOption={typeOptions[0]}
        onClick={jest.fn()}
      />
    );

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "station");

    const address = screen.getByText(station.address);
    const name = screen.getByText(station.name);
    expect(address).toBeInTheDocument();
    expect(name).toBeInTheDocument();

    sortedTypes.forEach((type) => {
      expect(screen.getByText(type, { exact: false })).toBeInTheDocument();
    });

    const rating = screen.getByTestId("star-rating");
    expect(rating).toBeInTheDocument();
    expect(screen.getByText(/price/i)).toBeInTheDocument();
    expect(screen.getByText(/miles/i)).toBeInTheDocument();
    // console.log(screen.logTestingPlaygroundURL());
  });
});
