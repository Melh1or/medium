import types from "./types";

const initialState = {
  viewer: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SAVE_VIEWER:
      return {
        viewer: payload.viewer,
      };
    case types.LOGOUT:
      return {
        viewer: null,
      };
    default:
      return state;
  }
};
