import { render, screen } from "@testing-library/react";
import Dropdown from "../../components/Dropdown";

describe("Dropdown", () => {
  it("should render dropdown without options", () => {
    render(
      <Dropdown
        options={undefined}
        label={"label1"}
        setSelected={jest.fn()}
        value={undefined}
      />
    );

    const dropdown = screen.getByRole("combobox");
    const label = screen.getByLabelText(/label1/i);
    expect(label.value).toBe("");
    expect(dropdown.children).toHaveLength(0);
    // console.log(screen.logTestingPlaygroundURL());
  });

  it("should render dropdown without all options and default value", () => {
    render(
      <Dropdown
        options={["option1", "option2", "option3"]}
        label={"label1"}
        setSelected={jest.fn()}
        value={0}
      />
    );

    const dropdown = screen.getByRole("combobox");
    const label = screen.getByLabelText(/label1/i);
    expect(label.value).toBe("0");
    expect(dropdown.children).toHaveLength(3);
    // console.log(screen.logTestingPlaygroundURL());
  });
});
