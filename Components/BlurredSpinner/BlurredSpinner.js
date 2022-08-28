import React from "react";
import "./BlurredSpinner.scss";
import Spinner from "./Spinner/Spinner";

export default function BlurredSpinner({ style }) {
  return (
    <div className="BlurredSpinnerWrapper" style={style}>
      <Spinner />
    </div>
  );
}
