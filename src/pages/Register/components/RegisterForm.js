import React from "react";

const RegisterForm = () => {
  return (
    <form>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Your Name"
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
        />
      </fieldset>
      <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
    </form>
  );
};

export default RegisterForm;
