import React from "react";
import "./App.scss";

import Routers from "./routers";
import { Modals } from "./containers";

export default function App() {
  return (
    <div>
      <div>
        <Modals />
      </div>
      <div id="app-blur">
        <Routers />
      </div>
    </div>
  );
}
