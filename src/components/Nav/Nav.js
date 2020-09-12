import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";
import { MessageCircle, Book, LogOut } from "react-feather";

export default function Nav() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <nav className="nav">
      <div className="nav__profile">
        <img src="https://picsum.photos/200" alt="" className="nav__img" />
      </div>
      <ul className="nav__ul">
        <li
          className={pathName === "/" ? "nav__li nav__li--choose" : "nav__li"}
        >
          <Link to="/" className="nav__link">
            <MessageCircle />
          </Link>
        </li>
        <li
          className={
            pathName === "/contact" ? "nav__li nav__li--choose" : "nav__li"
          }
        >
          <Link to="/contact" className="nav__link">
            <Book />
          </Link>
        </li>
      </ul>
      <LogOut className="nav__logout" />
    </nav>
  );
}
