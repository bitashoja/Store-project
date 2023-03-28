import "./Box.css";

const Box = ({ children, isFullWidth, isMiddleColumn }) => {
  return (
    <div
      className={`box-container ${isFullWidth ? "fullWidth" : ""} ${
        isMiddleColumn ? "middleColumn" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Box;
