/**
 * Renders a star.
 * @param {string} type - star fill type: 'filled', 'half-filled', or 'empty'
 * @return {!React.ReactElement} - The star icon component.
 */
const Star = ({ type }) => {
  let className = "star";
  if (type === "filled") {
    className = "star-filled";
  } else if (type === "half-filled") {
    className = "star-half-filled";
  }
  return <span className={className} data-testid={className} />;
};

export default Star;
