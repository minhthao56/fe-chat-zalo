import React from "react";
import "./Login.scss";
import { LogoBlankLayout, Input } from "../../components";
import { useFormik } from "formik"
import * as Yup from "yup"

export default function Login() {

  const ValidationSchema = Yup.object().shape({
   
  })
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => console.log(values),
  })

  return (
    <div>
      {/* <LogoBlankLayout /> */}
      <form onSubmit = {formik.handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          error="Hiển thị lỗi"
          marginBottom="5px"
          onChange = {formik.handleChange}
          onBlur = {formik.handleBlur}
          value = {formik.values.email}
        />

        <Input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          error="Hiển thị lỗi "
          marginBottom="10px"
          onChange = {formik.handleChange}
          onBlur = {formik.handleBlur}
          value = {formik.values.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
