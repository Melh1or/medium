const getArticle = (state) => state.article.article;
const getArticleComments = (state) => state.article.comments;

const getArticleFromRedux = (slug) => (state) => {
  const article = state.feed.articles.find((article) => article.slug === slug);

  if (!article) {
    return getArticle(state);
  }

  return { isLoading: false, isError: false, item: article };
};

export default {
  getArticle,
  getArticleFromRedux,
  getArticleComments,
};
