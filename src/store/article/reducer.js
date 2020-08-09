import types from "./types";

const initialState = {
  article: {
    isLoading: false,
    isError: false,
    error: null,
    item: null,
  },
  comments: {
    isLoading: false,
    isError: false,
    error: null,
    items: null,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_ARTICLE_START:
      return {
        ...state,
        article: {
          ...state.article,
          isLoading: true,
          isError: false,
          error: null,
        },
      };
    case types.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          isLoading: false,
          item: payload.article,
        },
      };
    case types.FETCH_ARTICLE_ERROR:
      return {
        ...state,
        article: {
          ...state.article,
          isLoading: false,
          isError: true,
          error: payload.error,
        },
      };
    case types.FETCH_ARTICLE_COMMENTS_START:
      return {
        ...state,
        comments: {
          ...state.comments,
          isLoading: true,
          isError: false,
          error: null,
        },
      };
    case types.FETCH_ARTICLE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          isLoading: false,
          items: payload.comments,
        },
      };
    case types.FETCH_ARTICLE_COMMENTS_ERROR:
      return {
        ...state,
        comments: {
          ...state.comments,
          isLoading: false,
          isError: true,
          error: payload.error,
        },
      };
    default:
      return state;
  }
};
