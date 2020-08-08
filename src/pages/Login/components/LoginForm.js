import React from "react";
import { useState } from "react";

const LoginForm = ({ loginFormHandler }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    loginFormHandler(state);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={onChange}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={onChange}
        />
      </fieldset>
      <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
    </form>
  );
};

export default LoginForm;
