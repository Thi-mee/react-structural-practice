
/**
 *
 * @param {{
 * type: string,
 * label: string,
 * value: string,
 * name: string,
 * onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
 * width: "full-width" | "half-width" | "third-width" | "auto"
 * }} param0
 * @returns
 */
const TextField = ({ type, label, value, name, onValueChange, width }) => {
  return (
    <div style={getTextFieldContainerStyle(width)}>
      <label style={getLabelStyle()}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onValueChange}
        style={getTextFieldStyle()}
      />
    </div>
  );
};

const getTextFieldContainerStyle = (width) => {
  return {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    width:
      width === "full-width"
        ? "100%"
        : width === "half-width"
        ? "48.81%"
        : width === "third-width"
        ? "33.33333333333333333333333333333333333333%"
        : "100%",
  };
};

const getLabelStyle = () => {
  return {
    marginBottom: "0.5rem",
  };
};

const getTextFieldStyle = () => {
  return {
    padding: "0.6rem",
    borderRadius: "0.5rem",
    border: "1px solid #ddd",
    fontSize: "1rem",
    outline: "none",
  };
};


export default TextField