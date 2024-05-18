import { render, screen } from "@testing-library/react";
import StarRating from "../../components/StarRating";

describe("Star", () => {
  const maxStars = 5;
  const cases = [1, 3.5, 5];
  it.each(cases)("should render %s stars rating", (numStars) => {
    render(<StarRating numStars={numStars} />);

    const totalStars = Math.ceil(numStars);

    const rating = screen.getByTestId("star-rating");
    expect(rating.children).toHaveLength(maxStars);

    for (let i = 1; i <= totalStars; i++) {
      if (i <= numStars) {
        expect(rating.children[i - 1]).toHaveClass("star-filled");
      } else if (i > numStars && i < numStars + 1) {
        expect(rating.children[i - 1]).toHaveClass("star-half-filled");
      } else {
        expect(rating.children[i - 1]).toHaveClass("star");
      }
    }
  });
});
