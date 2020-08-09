import actions from "./actions";
import Api from "../../api/index";

const fetchArticle = (slug) => async (dispatch) => {
  try {
    dispatch(actions.fetchArticleStart());

    const res = await Api.Article.fetchArticle(slug);

    dispatch(actions.fetchArticleSuccess(res.data.article));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchArticleError(error));
  }
};

export default {
  fetchArticle,
};
