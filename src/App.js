import React from "react";
import { useSelector } from "react-redux";

import "./App.scss";

import Routers from "./routers";
import { Modals } from "./containers";

export default function App() {
  const reduxShowBlur = useSelector((state) => state.reduxShowBlur);
  return (
    <div>
      <div>
        <Modals />
      </div>
      <div id={reduxShowBlur ? "app-blur" : null}>
        <Routers />
      </div>
    </div>
  );
}
