import { Formik, Field } from "formik";
import React from "react";
import reactDom from "react-dom";
import { useState } from "react";
import { styles } from "./styles";

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
  return (
    <styles.container>
      <Container>
        <Formik
          initialValues={{ unit: "Meters" }}
          onSubmit={(data) => {
            let value;
            if (data.unit === "Miles") {
              value = props.argorythms.fromMiles(data.val);
            } else if (data.unit === "Foots") {
              value = props.argorythms.fromFoots(data.val);
            } else {
              value = data.val * 1;
            }
          }}
        >
          {({ values, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <styles.button type="submit">Submit</styles.button>
              <styles.input
                defaultValue={values.val}
                name="val"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder={values.unit}
              />
              <Field as="select" name="unit">
                <styles.option value={props.val1}>Meters</styles.option>
                <styles.option value={props.val2}>Miles</styles.option>
                <styles.option value={props.val3}>Foots</styles.option>
              </Field>
            </form>
          )}
        </Formik>
      </Container>
      <Modal>
        <h1>siema</h1>
      </Modal>
      <Container />
    </styles.container>
  );
}

function Modal(props) {
  const kid = props.children;
  return reactDom.createPortal(kid, document.getElementById("root"));
}
//
//
const validate = (values) => {
  const errors = {};
  if (values.val === "1") {
    errors.val = "huj";
  }
  return errors;
};
const countArgorythms = {
  lenght: {
    fromMiles: (arg) => {
      return arg * 1609;
    },
    fromFoots: (arg) => {
      return arg * 3.2;
    },
    toMiles: (arg) => {
      return arg / 1609;
    },
    toFoots: (arg) => {
      return arg / 3.2;
    },
  },
};
function Container(props) {
  console.log(props.children);
  const [counted, setCounted] = useState(false);
  return props.children;
}
