import React from "react";
import "./Login.scss";
import { LogoBlankLayout } from "../../components";

export default function Login() {
  return (
    <div >
      <LogoBlankLayout />
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
