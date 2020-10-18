import React from "react";
import "./AcountTest.scss";
import { dataTest } from "./data";

export default function AcountTest() {
  return (
    <div className="acount-test">
      {dataTest.map((item, i) => {
        return (
          <div className="acount-test__container" key={i}>
            <h4>email: {item.email}</h4>
            <span>password: {item.password}</span>
          </div>
        );
      })}
    </div>
  );
}
