import types from "./types";

const fetchArticleStart = () => ({
  type: types.FETCH_ARTICLE_START,
});

const fetchArticleSuccess = (article) => ({
  type: types.FETCH_ARTICLE_SUCCESS,
  payload: {
    article,
  },
});

const fetchArticleError = (error) => ({
  type: types.FETCH_ARTICLE_ERROR,
  payload: {
    error,
  },
});

export default {
  fetchArticleStart,
  fetchArticleSuccess,
  fetchArticleError,
};
