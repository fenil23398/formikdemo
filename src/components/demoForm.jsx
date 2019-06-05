import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validateFirst = Yup.object().shape({
  name: Yup.string()
    .required("Required Field")
    .min(3, "Atleast 3 characters")
    .max(10, "Dont got much dn Limit"),

  amail: Yup.string()
    .required("Required")
    .email("Invalid email"),

  mobile: Yup.number("Enter Number Values")  //if i want to match length than i have to do this code manually using function
            .typeError("Only Numbers")      //as min max minlength works with its value
            .required("requires")
});
const demoForm = () => (
  <div>
    <h1>DemoFoem Validations</h1>
    <Formik
      initialValues={{ name: "", 
      amail: "",
    mobile:"" }}
      validationSchema={validateFirst}
      onSubmit={values => {
        alert("came");
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="amail" placeholder="Enter Email" />
          <ErrorMessage name="amail" /><br/>

          <Field name="name" placeholder="Enter Name"/>
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <ErrorMessage name="name" /><br/>

            <Field name="mobile" placeholder="Enter mobile"/>
            <ErrorMessage name="mobile" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default demoForm;
// export default demoForm;
