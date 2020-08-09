import actions from "./actions";
import Api from "../../api/index";

const createArticle = ({ body, description, tagList, title }) => async (
  dispatch
) => {
  try {
    dispatch(actions.createArticleStart());

    const res = await Api.Article.createArticle({
      body,
      description,
      tagList,
      title,
    });

    dispatch(actions.createArticleSuccess(res.data.article));
  } catch (error) {
    console.log(error);
    dispatch(actions.createArticleError(error));
  }
};

export default {
  createArticle,
};
