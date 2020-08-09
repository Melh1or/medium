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

const fetchArticleComments = (slug) => async (dispatch) => {
  try {
    dispatch(actions.fetchArticleCommentsStart());

    const res = await Api.Article.fetchArticleComments(slug);

    dispatch(actions.fetchArticleCommentsSuccess(res.data.comments));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchArticleCommentsError(error));
  }
};


export default {
  fetchArticle,
  fetchArticleComments,
};
