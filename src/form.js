import React from "react";
import reactDom from "react-dom";
import { Formik, Field } from "formik";
import { useState } from "react";
import { styles } from "./styles";
import { countArgorythms } from "./CountFile";
import { Modal } from "./ModalComponent";

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
  const typeValues = [props.val1, props.val2, props.val3];
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
          console.log(data);
        }}
      >
        {({ values, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Button />
            <Input
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Select />
            <Modal
              types={typeValues}
              argorythms={argorythms}
              values={values}
              see={see}
              trueValues={trueValues}
            />
          </form>
        )}
      </Formik>
    </styles.container>
  );
}

function Button(props) {
  return <styles.button type="submit">Submit</styles.button>;
}
function Input(props) {
  return (
    <styles.input
      defaultValue={props.values.val}
      name="val"
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      type="text"
      placeholder={props.values.unit}
    />
  );
}
function Select(props) {
  return (
    <Field as="select" name="unit">
      <styles.option value={props.val1}>Meters</styles.option>
      <styles.option value={props.val2}>Miles</styles.option>
      <styles.option value={props.val3}>Foots</styles.option>
    </Field>
  );
}

const validate = (values) => {
  const errors = {};
  if (values.val === "1") {
    errors.val = "huj";
  }
  return errors;
};
