import types from "./types";

const initialState = {
  fetchProfile: {
    isLoading: false,
    isError: false,
    error: null,
    profile: null,
  },
  fetchArticles: {
    isLoading: false,
    isError: false,
    error: null,
    articles: null,
    articlesCount: null
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PROFILE_START:
      return {
        ...state,
        fetchProfile: {
          ...state.fetchProfile,
          isLoading: true,
          isError: false,
          error: null,
        },
      };
    case types.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        fetchProfile: {
          ...state.fetchProfile,
          isLoading: false,
          profile: payload.profile,
        },
      };
    case types.FETCH_PROFILE_ERROR:
      return {
        ...state,
        fetchProfile: {
          ...state.fetchProfile,
          isLoading: false,
          isError: true,
          error: payload.error,
        },
      };
      case types.FETCH_PROFILE_ARTICLES_START:
        return {
          ...state,
          fetchArticles: {
            ...state.fetchArticles,
            isLoading: true,
            isError: false,
            error: null,
          },
        };
      case types.FETCH_PROFILE_ARTICLES_SUCCESS:
        return {
          ...state,
          fetchArticles: {
            ...state.fetchArticles,
            isLoading: false,
            articles: payload.articles,
            articlesCount: payload.articlesCount
          },
        };
      case types.FETCH_PROFILE_ARTICLES_ERROR:
        return {
          ...state,
          fetchArticles: {
            ...state.fetchArticles,
            isLoading: false,
            isError: true,
            error: payload.error,
          },
        };
    default:
      return state;
  }
};
