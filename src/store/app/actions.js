import types from "./types";

const appStart = () => ({
  type: types.app_START,
});

const appSuccess = (article) => ({
  type: types.app_SUCCESS,
  payload: {
    article,
  },
});

const appError = (error) => ({
  type: types.app_ERROR,
  payload: {
    error,
  },
});

export default {
  appStart,
  appSuccess,
  appError,
};
