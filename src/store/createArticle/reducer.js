import types from "./types";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  article: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CREATE_ARTICLE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case types.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        article: payload.article,
      };
    case types.CREATE_ARTICLE_ERROR:
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
