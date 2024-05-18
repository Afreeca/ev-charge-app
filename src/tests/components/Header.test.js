import { screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header", () => {
  it("should render header with empty dropdown options when not provided", () => {
    render(
      <Header
        typeOptions={[]}
        sortingOptions={[]}
        chargeId={0}
        sortTypeId={0}
        setChargeId={jest.fn()}
        setSorting={jest.fn()}
      />
    );
    const dropdowns = screen.getAllByRole("combobox");
    // 2 dropdown displayed
    expect(dropdowns.length).toBe(2);

    const typeDropdown = screen.getByText(/Type/i);
    const sortDropdown = screen.getByText(/Sort/i);

    // dropdowns labels are being displayed
    // expect(typeDropdown.textContent).toMatch(/Type/i);
    // expect(sortDropdown.textContent).toMatch(/Sort/i);

    expect(typeDropdown).toBeInTheDocument();
    expect(sortDropdown).toBeInTheDocument();

    // dropdown has no options
    expect(typeDropdown.children).toHaveLength(0);
    expect(typeDropdown.children).toHaveLength(0);
  });

  it("should render header with dropdowns options with defaults selected", () => {
    render(
      <Header
        typeOptions={["type1", "type2", "type3"]}
        sortingOptions={["sort1", "sort2"]}
        chargeId={0}
        sortTypeId={0}
        setChargeId={jest.fn()}
        setSorting={jest.fn()}
      />
    );
    const resetButton = screen.getByRole("button", { name: "Reset" });

    const typeDropdown = screen.getByLabelText("Type");
    const sortDropdown = screen.getByLabelText("Sort");
    expect(typeDropdown.value).toBe("0");
    expect(sortDropdown.value).toBe("0");

    expect(typeDropdown.children).toHaveLength(3);
    expect(sortDropdown.children.length).toBe(2);

    expect(resetButton).toBeInTheDocument();

    // console.log(screen.logTestingPlaygroundURL());
  });
});
