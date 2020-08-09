import types from "./types";

// fetch profile
const fetchProfileStart = () => ({
  type: types.FETCH_PROFILE_START,
});

const fetchProfileSuccess = (profile) => ({
  type: types.FETCH_PROFILE_SUCCESS,
  payload: {
    profile,
  },
});

const fetchProfileError = (error) => ({
  type: types.FETCH_PROFILE_ERROR,
  payload: {
    error,
  },
});

// fetch profile articles
const fetchProfileArticlesStart = () => ({
  type: types.FETCH_PROFILE_ARTICLES_START,
});

const fetchProfileArticlesSuccess = ({articles, articlesCount}) => ({
  type: types.FETCH_PROFILE_ARTICLES_SUCCESS,
  payload: {
    articles,
    articlesCount
  },
});

const fetchProfileArticlesError = (error) => ({
  type: types.FETCH_PROFILE_ARTICLES_ERROR,
  payload: {
    error,
  },
});

export default {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileError,
  fetchProfileArticlesStart,
  fetchProfileArticlesSuccess,
  fetchProfileArticlesError
};
