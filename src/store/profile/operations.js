import actions from "./actions";
import Api from "../../api/index";

const fetchProfile = (username) => async (dispatch) => {
  try {
    dispatch(actions.fetchProfileStart());

    const res = await Api.Profiles.getProfile(username);

    dispatch(actions.fetchProfileSuccess(res.data.profile));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchProfileError(error));
  }
};

const fetchProfileArticles = (username) => async (dispatch) => {
  try {
    dispatch(actions.fetchProfileArticlesStart());

    const res = await Api.Article.fetchUserArticles(username);
    
    dispatch(actions.fetchProfileArticlesSuccess({ ...res.data }));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchProfileArticlesError(error));
  }
};

export default {
  fetchProfile,
  fetchProfileArticles,
};
