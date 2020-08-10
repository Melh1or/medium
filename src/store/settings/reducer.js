import types from "./types";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_SETTINGS_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case types.UPDATE_SETTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.UPDATE_SETTINGS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    default:
      return state;
  }
};
