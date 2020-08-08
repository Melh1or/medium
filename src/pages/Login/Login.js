import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { routes } from "../routes";

import LoginForm from "./components/LoginForm";
import operations from "../../store/login/operations";
import { viewerSelectors } from "../../store/viewer";

const Login = () => {
  const dispatch = useDispatch();
  const viewer = useSelector(viewerSelectors.getViewer);

  const loginFormHandler = ({ email, password }) => {
    dispatch(operations.login({ email, password }));
  };

  if (viewer) {
    return <Redirect to={routes.home} />;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to={routes.register}>Need an account?</Link>
            </p>
            <LoginForm loginFormHandler={loginFormHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
