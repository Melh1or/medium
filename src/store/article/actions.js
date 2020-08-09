import types from "./types";

// fetch article
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

// fetch article comments
const fetchArticleCommentsStart = () => ({
  type: types.FETCH_ARTICLE_COMMENTS_START,
});

const fetchArticleCommentsSuccess = (comments) => ({
  type: types.FETCH_ARTICLE_COMMENTS_SUCCESS,
  payload: {
    comments,
  },
});

const fetchArticleCommentsError = (error) => ({
  type: types.FETCH_ARTICLE_COMMENTS_ERROR,
  payload: {
    error,
  },
});

// exports
export default {
  fetchArticleStart,
  fetchArticleSuccess,
  fetchArticleError,
  fetchArticleCommentsStart,
  fetchArticleCommentsSuccess,
  fetchArticleCommentsError,
};
