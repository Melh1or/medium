import types from "./types";

const saveViewer = (viewer) => ({
  type: types.SAVE_VIEWER,
  payload: {
    viewer,
  },
});

const logout = () => ({
  type: types.LOGOUT,
});

const getViewerStart = () => ({
  type: types.GET_VIEWER_START,
});

const getViewerSuccess = () => ({
  type: types.GET_VIEWER_SUCCESS,
});

const getViewerError = (error) => ({
  type: types.GET_VIEWER_ERROR,
  payload: {
    error,
  },
});

export default {
  saveViewer,
  logout,
  getViewerStart,
  getViewerSuccess,
  getViewerError,
};
