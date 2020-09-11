import React from "react";
import {Link} from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return  ( 
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
    </ul>
  </nav>);
}
