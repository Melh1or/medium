import types from "./types";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  articles: [],
  articlesCount: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_FEED_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case types.FETCH_FEED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: payload.articles,
        articlesCount: payload.articlesCount
      };
    case types.FETCH_FEED_ERROR:
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
