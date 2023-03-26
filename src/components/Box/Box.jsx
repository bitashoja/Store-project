import "./Box.css";

const Box = ({ children, isFullWidth }) => {
  return (
    <div className={`box-container ${isFullWidth ? "fullWidth" : ""}`}>
      {children}
    </div>
  );
};

export default Box;
