import React from "react";
import reactDom from "react-dom";
import { useState } from "react";
import { styles } from "./styles";

export function Modal(props) {
  const countArgorythms = props.argorythms;
  console.log(countArgorythms);
  const [unit, val] = props.trueValues;
  let value = props.firstConvert(unit, val);
  const val1 = props.val1;
  const val2 = props.val2;
  const val3 = props.val3;
  const ModalComponent = () => {
    const style = {
      width: "70px",
      height: "70px",
      borderRadius: "100%",
      alignSelf: "flex-start",
      margin: "0 1rem 0 auto",
      marginTop: "1.2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    return (
      <React.Fragment>
        <styles.modal>
          <styles.modalText_container>
            <styles.modalText>
              {" "}
              Value in {val1}: ≈{value}{" "}
            </styles.modalText>
            <styles.modalText>
              Value in {val2}: ≈{Math.floor(countArgorythms.toFoots(value))}
            </styles.modalText>
            <styles.modalText>
              Value in {val3}: ≈
              {Math.floor(countArgorythms.toMiles(value) * 100) / 100}
            </styles.modalText>
          </styles.modalText_container>
          <styles.button
            onClick={() => {
              props.setSee(false);
            }}
            style={style}
          >
            <img
              src="https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png"
              width="50px"
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
