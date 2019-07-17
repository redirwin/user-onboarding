import React from "react";
import { withFormik, Form, Field } from "formik";
import { Button } from "@smooth-ui/core-sc";
import styled from "styled-components";

function OnboardForm() {
  return (
    <FormContainer>
      <Form>
        <span>First Name</span>
        <Field type="text" name="firstName" />
        <span>Last Name</span>
        <Field type="text" name="lastName" />
        <span>Email</span>
        <Field type="email" name="email" />
        <span>Password</span>
        <Field type="password" name="password" />
        <label>
          <Field type="checkbox" name="tos" />
          <span className="tos">Accept TOS</span>
        </label>
        <Button>Submit</Button>
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

  handleSubmit(values) {
    console.log(values);
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

    span.tos {
      margin-left: 0.25rem;
    }

    button {
      width: 50%;
      align-self: flex-end;
    }
  }
`;
