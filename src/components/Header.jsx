import Dropdown from "./Dropdown";

/**
 * Renders a header element.
 * @param {<!Array<string>} typeOptions - The select options for types.
 *  @param {Function} sortingOptions - Sorting options.
 * @param {Function} setChargeId - A callback to update the charge id.
 * @param {Function} setSorting - A callback to update the sorting id.
 * @param {string} chargeId - The current charge id.
 * @param {Function} sortTypeId - The current sort id.
 * @return {!React.ReactElement}
 */

const Header = ({
  typeOptions,
  sortingOptions,
  chargeId,
  sortTypeId,
  setChargeId,
  setSorting,
}) => {
  const onResetClick = () => {
    setChargeId(0);
    setSorting(0);
  };

  return (
    <div className="header-container">
      <div className="select-container">
        <Dropdown
          value={chargeId}
          setSelected={setChargeId}
          label="Type"
          options={typeOptions}
        />
        <Dropdown
          value={sortTypeId}
          setSelected={setSorting}
          label="Sort"
          options={sortingOptions}
        />
      </div>
      <button onClick={onResetClick}>Reset</button>
    </div>
  );
};

export default Header;
