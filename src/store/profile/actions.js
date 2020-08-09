import types from "./types";

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

export default {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileError,
};
