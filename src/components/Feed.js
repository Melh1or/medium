import React from "react";
import Article from "./Article";

const Feed = ({ articles = [] }) => {
  return articles.map((article) => (
    <Article key={article.slug} article={article} />
  ));
};

export default Feed;
