import React from "react";
import "./Alert.scss";

function Alert({ height, width, style, children, setIsOpen = () => {} }) {
  return (
    <div className="AlertWrapper">
      <div
        className="AlertWrapper__content"
        style={{ height: height, width: width, ...style }}
      >
        <span className="AlertWrapper--close" onClick={() => setIsOpen(false)}>
          &#10799;
        </span>
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
