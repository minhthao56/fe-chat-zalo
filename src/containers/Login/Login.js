import React, { useEffect } from "react";
import "./Login.scss";
import {
  LogoBlankLayout,
  Input,
  Button,
  ContainerAuth,
  AcountTest,
} from "../../components";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { deleteDB } from "idb";
import { GoogleLogin } from "react-google-login";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  doLogin,
  loginGoogleSuccess,
  loginGoogleError,
} from "../../redux/actions";
import { ERROR } from "../../redux/constants";
import CreateIndexDB from "../../helpers/CreateIndexDB";
import { apiLogin } from "../../services";

export default function Login() {
  const dispatch = useDispatch();
  let history = useHistory();
  const reduxUserData = useSelector((state) => state.reduxUserData);
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
    onSubmit: (values) => dispatch(doLogin(values)),
  });

  useEffect(() => {
    const innit = async () => {
      if (reduxUserData.type === ERROR) {
        if (Array.isArray(reduxUserData.data.message)) {
          reduxUserData.data.message.forEach((mes) => toast.error(mes));
        } else {
          toast.error(reduxUserData.data.message);
        }
      } else if (reduxUserData.data.token) {
        localStorage.setItem("token", reduxUserData.data.token);
        const a = await CreateIndexDB(reduxUserData.data.token);
        console.log(a);
        window.location.replace("/");
      } else {
        history.push("/login");
      }
    };
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }

    const deleteIndexBD = async () => {
      try {
        await deleteDB("token-store");
      } catch (error) {
        console.log(error);
      }
    };

    deleteIndexBD();
    innit();
  }, [reduxUserData, history]);

  const responseGoogle = (res) => {
    apiLogin
      .postLoginGoogle({ tokenId: res.tokenId })
      .then((res) => {
        dispatch(loginGoogleSuccess(res));
      })
      .catch((err) => {
        dispatch(loginGoogleError(err.response.data));
      });
  };

  return (
    <div className="login">
      <AcountTest />
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
        <GoogleLogin
          clientId="184515481576-3pr72umu9nmn7mblu4jvn5b45vu1o5uk.apps.googleusercontent.com"
          buttonText="Login Or Register with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,
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
