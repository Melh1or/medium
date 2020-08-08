import types from "./types";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_START:
      return {
        isLoading: true,
        isError: false,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.LOGIN_ERROR:
      return {
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    default:
      return state;
  }
};
