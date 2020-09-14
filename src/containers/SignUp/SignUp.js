import React, { useEffect } from "react";
import "./SignUp.scss";
import {
  LogoBlankLayout,
  Input,
  Button,
  ContainerAuth,
} from "../../components";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

//redux
import { useDispatch, useSelector } from "react-redux";
import { doSignUp } from "../../redux/actions";
import { SUCCESS, ERROR } from "../../redux/constants";

export default function SignUp() {
  const dispatch = useDispatch();
  let history = useHistory();
  const reduxUserData = useSelector((state) => state.reduxUserData);

  const ValidationSchema = Yup.object().shape({
    name: Yup.string("")
      .min(4, "Ít nhất 4 ký tự")
      .max(15, "Nhiều nhất 15 ký tự")
      .required("Required"),
    email: Yup.string("").email("Invalid email").required("Required"),
    password: Yup.string("").min(6).max(20).required("Required"),
    confirm: Yup.string("")
      .required("Required")
      .test("", "Mật khẩu chưa khớp", function (value) {
        return this.parent.password === value;
      }),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      confirm: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      dispatch(doSignUp(values));
    },
  });

  useEffect(() => {
    if (reduxUserData.type === ERROR) {
      if (Array.isArray(reduxUserData.data.message)) {
        reduxUserData.data.message.forEach((mes) => toast.error(mes));
      } else {
        toast.error(reduxUserData.data.message);
      }
    } else if (reduxUserData.type === SUCCESS) {
      localStorage.setItem("token", reduxUserData.data.token);
      window.location.replace("/");
      toast.success("Your acconut is created");
    } else {
      history.push("/signup");
    }
  }, [reduxUserData, history]);

  return (
    <div className="signup">
      <ContainerAuth>
        <div className="signup__logo">
          <LogoBlankLayout />
        </div>
        <form onSubmit={formik.handleSubmit} className="signup__form">
          <Input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            borderColorErr={
              formik.touched.name && formik.errors.name ? "tomato" : null
            }
          />
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
          <Input
            type="password"
            placeholder="Confirm"
            name="confirm"
            id="confirm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirm}
            error={formik.touched.confirm && formik.errors.confirm}
            borderColorErr={
              formik.touched.confirm && formik.errors.confirm ? "tomato" : null
            }
          />
          <span className="signup__link">Have you password?</span>
          <div className="signup__btn">
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
        <Link className="signup__link" to="/login">
          Login
        </Link>
        <span className="signup__sub">
          Dùng tài khoản Zalo để truy cập các ứng dụng của ZA
        </span>
      </ContainerAuth>
    </div>
  );
}
