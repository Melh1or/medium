import React from "react";

import { routes } from "../routes";
import { Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to={routes.login}>Have an account?</Link>
            </p>

            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
