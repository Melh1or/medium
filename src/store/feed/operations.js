import actions from "./actions";
import Api from "../../api/index";

const fetchFeed = (limit = 10, offset = 0) => async (dispatch) => {
  try {
    dispatch(actions.fetchFeedStart());

    const res = await Api.Feed.fetchFeed({ limit, offset });

    dispatch(actions.fetchFeedSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchFeedError(error));
  }
};

export default {
  fetchFeed,
};
