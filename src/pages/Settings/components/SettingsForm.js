import React, { createRef, useState } from "react";

const SettingsForm = ({ viewer, settingsFormSubmit }) => {
  const [password, setPassword] = useState("");
  const imageRef = createRef();
  const usernameRef = createRef();
  const bioRef = createRef();
  const emailRef = createRef();

  const createNewUser = ({ username, bio, email, image, password }) => ({
      bio,
      username,
      email,
      image: image === "" ? null : "",
      password: password === "" ? null : ""
    })

  const onSubmit = e => {
    e.preventDefault();

    const user = createNewUser({
      username: usernameRef.current.value,
      bio: bioRef.current.value,
      email: emailRef.current.value,
      image: imageRef.current.value,
      password,
    })

    settingsFormSubmit(user);
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="URL of profile picture"
            ref={imageRef}
            defaultValue={viewer.image || ""}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Your Name"
            ref={usernameRef}
            defaultValue={viewer.username}
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows="8"
            placeholder="Short bio about you"
            ref={bioRef}
            defaultValue={viewer.bio || ""}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Email"
            ref={emailRef}
            defaultValue={viewer.email}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right">
          Update Settings
        </button>
      </fieldset>
    </form>
  );
};

export default SettingsForm;
