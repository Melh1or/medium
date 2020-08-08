import types from "./types";

const fetchFeedStart = () => ({
  type: types.FETCH_FEED_START,
});

const fetchFeedSuccess = ({ articles, articlesCount }) => ({
  type: types.FETCH_FEED_SUCCESS,
  payload: {
    articles,
    articlesCount
  }
});

const fetchFeedError = (error) => ({
  type: types.FETCH_FEED_ERROR,
  payload: {
    error,
  },
});

export default {
  fetchFeedStart,
  fetchFeedSuccess,
  fetchFeedError,
};
