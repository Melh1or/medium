import actions from "./actions";
import { viewerActions } from "../viewer";
import Api from "../../api/index";

const fetchFeed = () => async (dispatch) => {
  try {
    dispatch(actions.fetchFeedStart());

    const res = await Api.Feed.fetchFeed({ limit: 10, offset: 0 });

    dispatch(actions.fetchFeedSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchFeedError(error));
  }
};

export default {
  fetchFeed,
};
