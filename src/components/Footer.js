import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../pages/routes";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to={routes.home} className="logo-font">
          conduit
        </Link>
        <span className="attribution">
          An interactive learning project from{" "}
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
