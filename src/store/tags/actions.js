import types from "./types";

const fetchTagsStart = () => ({
  type: types.FETCH_TAGS_START,
});

const fetchTagsSuccess = (tags) => ({
  type: types.FETCH_TAGS_SUCCESS,
  payload: {
    tags,
  },
});

const fetchTagsError = (error) => ({
  type: types.FETCH_TAGS_ERROR,
  payload: {
    error,
  },
});

export default {
  fetchTagsStart,
  fetchTagsSuccess,
  fetchTagsError,
};
