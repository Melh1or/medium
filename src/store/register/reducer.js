import types from "./types";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REGISTER_START:
      return {
        isLoading: true,
        isError: false,
        error: null,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.REGISTER_ERROR:
      return {
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    default:
      return state;
  }
};
