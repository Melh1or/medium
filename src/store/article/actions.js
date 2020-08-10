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

// post comment
const postCommentStart = () => ({
  type: types.POST_COMMENT_START,
});

const postCommentSuccess = (comment) => ({
  type: types.POST_COMMENT_SUCCESS,
  payload: {
    comment,
  },
});

const postCommentError = (error) => ({
  type: types.POST_COMMENT_ERROR,
  payload: {
    error,
  },
});

// favorite article
const favoriteArticleStart = () => ({
  type: types.FAVORITE_ARTICLE_START,
});

const favoriteArticleSuccess = (article) => ({
  type: types.FAVORITE_ARTICLE_SUCCESS,
  payload: {
    article,
  },
});

const favoriteArticleError = (error) => ({
  type: types.FAVORITE_ARTICLE_ERROR,
  payload: {
    error,
  },
});

// un favorite article
const unFavoriteArticleStart = () => ({
  type: types.UN_FAVORITE_ARTICLE_START,
});

const unFavoriteArticleSuccess = (article) => ({
  type: types.UN_FAVORITE_ARTICLE_SUCCESS,
  payload: {
    article,
  },
});

const unFavoriteArticleError = (error) => ({
  type: types.UN_FAVORITE_ARTICLE_ERROR,
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
  postCommentStart,
  postCommentSuccess,
  postCommentError,
  favoriteArticleStart,
  favoriteArticleSuccess,
  favoriteArticleError,
  unFavoriteArticleStart,
  unFavoriteArticleSuccess,
  unFavoriteArticleError,
};
