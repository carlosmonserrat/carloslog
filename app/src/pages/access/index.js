import React, {useEffect} from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import "./style.css"
import Logo from "../../components/logo"
import {saySomething} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const Access = () => {

  const something = useSelector(state => state.saySomething);
  const dispatch = useDispatch();

  useEffect(() => {
    if (something === "nolan") {
console.log("sss")
    }
  }, [something])

  return (
    <Formik
      initialValues={{email: 'hola@hola.com', password: 'qwerty22222',}}

      validationSchema={Yup.object({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}

      onSubmit={(values, formik) => {
        dispatch(saySomething("nolan",formik))
      }}
    >
      {({errors, touched, isSubmitting}) => (
        <Form className="login-form">
          <Logo/>
          <label className="login-form-label" htmlFor="email">Email</label>
          <Field placeholder="mail@mail.com" className="login-form-input" name="email" type="email"/>
          <ErrorMessage className="error-message" component="span" name="email"/>

          <label className="login-form-label" htmlFor="password">Password</label>
          <Field placeholder="Password" className="login-form-input" name="password" type="password"/>
          <ErrorMessage className="error-message" component="span" name="password"/>

          <button className="login-form-button" type="submit" disabled={isSubmitting}>Submit</button>

          <ErrorMessage className="error-message" component="span" name="form"/>
        </Form>
      )}
    </Formik>
  )
}

export default Access