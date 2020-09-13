import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { doCheckLogin } from "../redux/actions";
import { ERROR } from "../redux/constants";

export default function PrivateRouter({
  component: Component,
  layout: Layout,
  ...rest
}) {
  const token = localStorage.getItem("token");
  const reduxUserData = useSelector((state) => state.reduxUserData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(doCheckLogin());
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token) {
          return <Redirect to={{ pathname: "/login" }} />;
        }
        if (reduxUserData.type === ERROR) {
          return <Redirect to={{ pathname: "/login" }} />;
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}
