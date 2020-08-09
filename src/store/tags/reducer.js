import types from "./types";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  tags: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_TAGS_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case types.FETCH_TAGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tags: payload.tags,
      };
    case types.FETCH_TAGS_ERROR:
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
