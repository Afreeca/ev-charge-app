/**
 * Renders a dropdown element.
 * @param {<!Array<string>} options - The select options.
 * @param {string} label - The text label for the drop down element.
 * @param {number} value - The value of the dropdown.
 * @param {Function} setSelected - A callback to update user selection.
 * @return {!React.ReactElement}
 */

const Dropdown = ({ options, label, setSelected, value }) => {
  const onChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="dropdown">
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e)}
        className="custom-select"
      >
        {options?.map((option, index) => (
          <option key={option} value={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
