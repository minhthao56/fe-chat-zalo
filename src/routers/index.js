import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Home, Login, SignUp } from "../containers/index";

import { MainLayout, BlankLayout } from "../layouts";

import PubliceRoute from "./PublicRouter";
// import PrivateRouter from "./PrivateRoute";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PubliceRoute exact path={`/`} component={Home} layout={MainLayout} />
        <PubliceRoute
          exact
          path={`/login`}
          component={Login}
          layout={BlankLayout}
        />
        <PubliceRoute
          exact
          path={`/signup`}
          component={SignUp}
          layout={BlankLayout}
        />
      </Switch>
    </Router>
  );
}
