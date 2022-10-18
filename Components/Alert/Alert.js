import React from "react";
import "./Alert.scss";

function Alert({
  height,
  width,
  style,
  children,
  setIsOpen = () => {},
  showClose = true,
}) {
  return (
    <div className="AlertWrapper">
      <div
        className="AlertWrapper__content"
        style={{ height: height, width: width, ...style }}
      >
        {showClose && (
          <span
            className="AlertWrapper--close"
            onClick={() => setIsOpen(false)}
          >
            &#10799;
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

Alert.propTypes = {
  // bla: PropTypes.string,
};

Alert.defaultProps = {
  // bla: 'test',
};

export default Alert;
