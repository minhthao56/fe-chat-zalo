import React from "react";
import "./Login.scss";
import {
  LogoBlankLayout,
  Input,
  Button,
  ContainerAuth,
} from "../../components";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const ValidationSchema = Yup.object().shape({
    email: Yup.string("").email("Invalid email").required("Required"),
    password: Yup.string("").min(6).max(10),
  });
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            borderColorErr={
              formik.touched.email && formik.errors.email ? "tomato" : null
            }
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            borderColorErr={
              formik.touched.password && formik.errors.password
                ? "tomato"
                : null
            }
          />
          <span className="login__link">You forgot my password?</span>
          <div className="login__btn">
            <Button type="submit">Login</Button>
          </div>
        </form>
        <Link className="login__link" to="/signup">
          Sign Up
        </Link>
        <span className="login__sub">
          Dùng tài khoản Zalo để truy cập các ứng dụng của ZA
        </span>
      </ContainerAuth>
    </div>
  );
}
