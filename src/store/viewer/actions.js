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

export default {
  saveViewer,
  logout,
};
