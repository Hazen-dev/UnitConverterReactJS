import React from "react";
import reactDom from "react-dom";
import { CountToMeter } from "./CountFile";
import { useState } from "react";
import { styles } from "./styles";

export function Modal(props) {
  const [unit, val] = props.trueValues;
  //const [val2, val3] = props.types;
  let value = CountToMeter(unit, val);

  const ModalComponent = () => {
    const style = {
      width: "3rem",
      height: "3rem",
      borderRadius: "100%",
      alignSelf: "flex-start",
      margin: "0 1rem 0 auto",
      marginTop: "1.2rem",
    };
    return (
      <React.Fragment>
        <styles.modal>
          <styles.modalText_container>
            <styles.modalText> Value in Meters: {value} </styles.modalText>
            <styles.modalText> Value in Foots: {value} </styles.modalText>
            <styles.modalText> Value in Miles: {value} </styles.modalText>
          </styles.modalText_container>
          <styles.button
            onClick={() => {
              props.setSee(false);
            }}
            style={style}
          >
            <img
              src="https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png"
              width="100%"
              height="auto"
              alt="Example image"
            />
          </styles.button>
        </styles.modal>
      </React.Fragment>
    );
  };
  //
  //
  return props.see
    ? reactDom.createPortal(<ModalComponent />, document.getElementById("root"))
    : null;
}
