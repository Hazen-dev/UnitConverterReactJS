import React, { useState } from "react";
import reactDom from "react-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { styles } from "./styles";
import { countArgorythms } from "./CountFile";
import { Modal } from "./ModalComponent";
import Msg from "./ErrorMsg";

export default function Form() {
  return (
    <LabelForm
      validate={validate}
      name="lenght"
      val1="Meters"
      val2="Miles"
      val3="Foots"
      argorythms={countArgorythms.lenght}
    />
  );
}
function LabelForm(props) {
  const inputRef = React.createRef();
  const argorythms = props.argorythms;
  const [see, useSee] = useState(false);
  const [trueValues, setTrueValues] = useState([]);

  return (
    <styles.container>
      <Formik
        initialValues={{ unit: "Meters" }}
        onSubmit={(data) => {
          setTrueValues([data.unit, data.val]);
          useSee(true);
        }}
        validate={validate}
      >
        {({ values, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <styles.topWrapper>
              <Input
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                inputRef={inputRef}
                see={see}
              />
              <Button />
            </styles.topWrapper>
            <Select inputRef={inputRef} />

            <Modal
              setSee={useSee}
              argorythms={argorythms}
              see={see}
              trueValues={trueValues}
            />
            <ErrorMessage name="val">{(msg) => <Msg msg={msg} />}</ErrorMessage>
          </form>
        )}
      </Formik>
    </styles.container>
  );
}

function Button(props) {
  return <styles.button type="submit">Count</styles.button>;
}
function Input(props) {
  const inputRef = props.inputRef;
  // console.log(props.see);
  return (
    <>
      <styles.input
        ref={inputRef}
        defaultValue={props.values.val}
        name="val"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        type="text"
        placeholder={props.values.unit}
      />
      {props.see ? <></> : null}
    </>
  );
}
function Select(props) {
  //console.log(props.inputRef);
  //props.inputRef.current.focus();
  const stylesSelected = {
    fontSize: "1rem",
    border: "none",
    borderRadius: "14px",
    margin: "0.8rem 0 1rem 0",
    padding: "5px",
    color: "#558f87",
  };
  return (
    <Field as="select" name="unit" style={stylesSelected}>
      <styles.option value={props.val1}>Meters</styles.option>
      <styles.option value={props.val2}>Miles</styles.option>
      <styles.option value={props.val3}>Foots</styles.option>
    </Field>
  );
}

const validate = (values) => {
  const errors = {};
  if (values.val === undefined || values.val === "") {
    errors.val = "There is Blank Field";
  } else if (/[a-zA-Z]/.test(values.val)) {
    errors.val = "There is a letter";
  } else if (/[^a-zA-Z0-9]/.test(values.val)) {
    errors.val = "Dont use Special Chars (Like dots etc.)";
  }
  return errors;
};
