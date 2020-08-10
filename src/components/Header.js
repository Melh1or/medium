import React, { Fragment } from "react";
import { NavLink, Link, generatePath } from "react-router-dom";
import { routes } from "../pages/routes";
import { useSelector } from "react-redux";
import { viewerSelectors } from "../store/viewer";

const Header = () => {
  const viewer = useSelector(viewerSelectors.getViewer);

  const guestMenu = (
    <Fragment>
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
    </Fragment>
  );

  const authMenu = (
    <Fragment>
      <li className="nav-item">
        <NavLink className="nav-link" to={routes.create}>
          <i className="ion-compose" />&nbsp;New Post
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={routes.settings}>
          <i className="ion-gear-a"/>&nbsp;Settings
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to={generatePath(routes.profile, { username: viewer.username })}
          className="nav-link"
        >
          {viewer && viewer.username}
        </NavLink>
      </li>
    </Fragment>
  );

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
          {viewer ? authMenu : guestMenu}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
