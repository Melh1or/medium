import types from "./types";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  profile: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PROFILE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case types.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: payload.profile,
      };
    case types.FETCH_PROFILE_ERROR:
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
