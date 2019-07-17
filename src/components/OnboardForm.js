import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { Button } from "@smooth-ui/core-sc";

function OnboardForm({ errors, touched, isSubmitting }) {
  return (
    <FormContainer>
      <Form>
        <div>
          <Field type="text" name="firstName" placeholder="First Name" />
          {touched.firstName && errors.firstName && (
            <span>{errors.firstName}</span>
          )}
        </div>
        <div>
          <Field type="text" name="lastName" placeholder="Last Name" />
          {touched.lastName && errors.lastName && (
            <span>{errors.lastName}</span>
          )}
        </div>
        <div>
          <Field type="email" name="email" placeholder="Email" />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div>
          <label>
            <Field type="checkbox" name="tos" />
            <span className="tos">Accept TOS</span>
            {touched.tos && errors.tos && <span>{errors.tos}</span>}
          </label>
        </div>
        <Button disabled={isSubmitting}>Submit</Button>
      </Form>
    </FormContainer>
  );
}

const FormikForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password, tos }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || "",
      tos: tos || ""
    };
  },

  //=================== START FORM VALIDATION ======================
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required.")
      .min(2, "First name is required."),
    lastName: Yup.string()
      .required("Last name is required.")
      .min(2, "Last name is required."),
    email: Yup.string()
      .required("Email is required.")
      .email("Email is not valid."),
    password: Yup.string()
      .required("Password is required.")
      .min(12, "Password must be at least 12 characters.")
  }),
  //==================== END FORM VALIDATION =================

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.tos === "") {
      setErrors({ tos: "Please accept the TOS to continue." });
    } else {
      console.log("Good input.");
      axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
          console.log(res.data);
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err);
          setSubmitting(false);
        });
    }
  }
})(OnboardForm);

export default FormikForm;

const FormContainer = styled.form`
  form {
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: left;

    span,
    label,
    button {
      margin-top: 0.5rem;
    }

    input {
      width: 100%;
    }

    span.tos {
      margin-left: 0.25rem;
    }

    button {
      width: 50%;
      align-self: flex-end;
    }
  }
`;
