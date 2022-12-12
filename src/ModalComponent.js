import React from "react";
import reactDom from "react-dom";
import { CountToMeter } from "./CountFile";
import { useState } from "react";

export function Modal(props) {
  const [unit, val] = props.trueValues;
  //const [val2, val3] = props.types;
  let value = CountToMeter(unit, val);

  const ModalComponent = () => {
    return <React.Fragment>value in meters is: {value}</React.Fragment>;
  };
  //
  //
  return props.see
    ? reactDom.createPortal(<ModalComponent />, document.getElementById("root"))
    : null;
}
