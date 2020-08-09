import actions from "./actions";
import Api from "../../api/index";

// fetch article
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

// fetch article comments
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

// post comment
const postComment = (slug, body) => async (dispatch) => {
  try {
    dispatch(actions.postCommentStart());

    const res = await Api.Article.postComment(slug, body);

    dispatch(actions.postCommentSuccess(res.data.comment));
  } catch (error) {
    console.log(error);
    dispatch(actions.postCommentError(error));
  }
};

// favorite article
const favoriteArticle = (slug) => async (dispatch) => {
  try {
    dispatch(actions.favoriteArticleStart());

    const res = await Api.Article.favoriteArticle(slug);

    dispatch(actions.favoriteArticleSuccess(res.data.article));
  } catch (error) {
    console.log(error);
    dispatch(actions.favoriteArticleError(error));
  }
};

//un favorite article
const unFavoriteArticle = (slug) => async (dispatch) => {
  try {
    dispatch(actions.unFavoriteArticleStart());

    const res = await Api.Article.unFavoriteArticle(slug);

    dispatch(actions.unFavoriteArticleSuccess(res.data.article));
  } catch (error) {
    console.log(error);
    dispatch(actions.unFavoriteArticleError(error));
  }
};

export default {
  fetchArticle,
  fetchArticleComments,
  postComment,
  favoriteArticle,
  unFavoriteArticle
};
