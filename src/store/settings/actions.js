import types from "./types";

const updateSettingsStart = () => ({
  type: types.UPDATE_SETTINGS_START,
});

const updateSettingsSuccess = () => ({
  type: types.UPDATE_SETTINGS_SUCCESS,
});

const updateSettingsError = (error) => ({
  type: types.UPDATE_SETTINGS_ERROR,
  payload: {
    error,
  },
});

export default {
  updateSettingsStart,
  updateSettingsSuccess,
  updateSettingsError,
};
