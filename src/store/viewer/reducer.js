import types from "./types";
import { loadFromLocalStorage } from "../../utils";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  viewer: loadFromLocalStorage("viewer"),
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SAVE_VIEWER:
      return {
        ...state,
        viewer: payload.viewer,
      };
    case types.LOGOUT:
      return {
        ...state,
        viewer: null,
      };
    case types.GET_VIEWER_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case types.GET_VIEWER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.GET_VIEWER_ERROR:
      return {
        ...state,
        viewer: null,
        isLoading: false,
        isError: true,
        error: payload.error,
      };

    default:
      return state;
  }
};
