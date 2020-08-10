import React from "react";
import SettingsForm from "./components/SettingsForm";
import { useDispatch, useSelector } from "react-redux";
import { viewerSelectors } from "../../store/viewer";
import { settingsOperations } from "../../store/settings";

const Settings = () => {
  const dispatch = useDispatch();
  const viewer = useSelector(viewerSelectors.getViewer);

  const settingsFormSubmit = async (user) => {
    dispatch(settingsOperations.updateSettings(user))
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <SettingsForm
              viewer={viewer}
              settingsFormSubmit={settingsFormSubmit}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
