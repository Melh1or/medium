import types from "./types";

const createArticleStart = () => ({
  type: types.CREATE_ARTICLE_START,
});

const createArticleSuccess = ({ article }) => ({
  type: types.CREATE_ARTICLE_SUCCESS,
  payload: {
    article,
  },
});

const createArticleError = (error) => ({
  type: types.CREATE_ARTICLE_ERROR,
  payload: {
    error,
  },
});

export default {
  createArticleStart,
  createArticleSuccess,
  createArticleError,
};
