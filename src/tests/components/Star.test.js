import { render, screen } from "@testing-library/react";
import Star from "../../components/Star";

describe("Dropdown", () => {
  const classPrefix = "star";

  const cases = [undefined, "half-filled", "filled"];

  it.each(cases)("should render %s star", (type) => {
    render(<Star type={type} />);

    const className = type ? `${classPrefix}-${type}` : classPrefix;

    const star = screen.getByTestId(className);
    expect(star).toBeInTheDocument();
    expect(star).toHaveClass(className);
  });
});
