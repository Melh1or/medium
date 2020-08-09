import actions from "./actions";
import Api from "../../api/index";

const fetchTags = () => async (dispatch) => {
  try {
    dispatch(actions.fetchTagsStart());

    const res = await Api.Tags.fetchTags();

    dispatch(actions.fetchTagsSuccess(res.data.tags));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchTagsError(error));
  }
};

export default {
  fetchTags,
};
