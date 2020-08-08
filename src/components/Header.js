import React from "react";
import { NavLink, Link } from "react-router-dom";
import { routes } from "../pages/routes";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to={routes.home}>
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to={routes.home} exact className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={routes.login} className="nav-link">
              Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={routes.register} className="nav-link">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
