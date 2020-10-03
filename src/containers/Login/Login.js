import React, { useEffect } from "react";
import "./Login.scss";
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
import { openDB, deleteDB, wrap, unwrap } from "idb";

//redux
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../redux/actions";
import { SUCCESS, ERROR } from "../../redux/constants";

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

  // async function doDatabaseStuff() {
  //   const db = await openDB("token-store", 1, {
  //     upgrade(db) {
  //       db.createObjectStore("token");
  //     },
  //   });

  //   const get = await db.put("token", "token", reduxUserData.data.token);
  //   console.log(get);
  // }
  // doDatabaseStuff();

  const indexIb = new Promise(function (resolve, reject) {
    const dbPromise = openDB("token-store", 1, {
      upgrade(db) {
        db.createObjectStore("token");
      },
    });
    const idbKeyval = {
      async set(key, val) {
        return (await dbPromise).put("token", val, key);
      },
    };
    const r = idbKeyval.set("token", reduxUserData.data.token);
    resolve(r);
  });

  useEffect(() => {
    const innit = async () => {
      if (reduxUserData.type === ERROR) {
        if (Array.isArray(reduxUserData.data.message)) {
          reduxUserData.data.message.forEach((mes) => toast.error(mes));
        } else {
          toast.error(reduxUserData.data.message);
        }
      } else if (reduxUserData.type === SUCCESS) {
        localStorage.setItem("token", reduxUserData.data.token);
        const a = await indexIb;
        console.log(a);

        window.location.replace("/");
      } else {
        history.push("/login");
      }
    };

    innit();
  }, [reduxUserData, history]);

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
