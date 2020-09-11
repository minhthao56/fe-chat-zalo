import React from "react";
import "./Login.scss";
import {
  LogoBlankLayout,
  Input,
  Button,
  ContainerAuth,
} from "../../components";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const ValidationSchema = Yup.object().shape({});
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="login">
      <ContainerAuth>
        <div className="login__logo">
          <LogoBlankLayout />
        </div>

        <form onSubmit={formik.handleSubmit} className="login__form">
          <Input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            marginBottom="5px"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            marginBottom="10px"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Button type="submit">Login</Button>
        </form>
      </ContainerAuth>
    </div>
  );
}
