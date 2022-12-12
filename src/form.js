import React from "react";
import { Formik, Field } from "formik";
import { styles } from "./styles";

export default function Form() {
  return (
    <LabelForm
      validate={validate}
      name="weight"
      val1="Meters"
      val2="Miles"
      val3="Foots"
    />
  );
}
function LabelForm(props) {
  return (
    <styles.container>
      <Formik
        initialValues={{ unit: "meters" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={props.validate}
      >
        {({ values, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <styles.button>Submit</styles.button>
            <styles.input
              defaultValue={values.val}
              name={props.name}
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
    </styles.container>
  );
}
const validate = (values) => {
  const errors = {};
  if (values.val === "1") {
    errors.val = "huj";
  }
  return errors;
};
