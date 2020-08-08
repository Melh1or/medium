import React from "react";
import { Link, generatePath } from "react-router-dom";
import { routes } from "../pages/routes";
import TagList from "./TagList";

const Article = ({
  article: {
    author,
    title,
    description,
    slug,
    tagList,
    favoritesCount,
    favorited,
    createdAt,
    body,
  },
}) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${author.username}`}>
          <img src={author.image} />
        </Link>
        <div className="info">
          <a href="" className="author">
            {author.username}
          </a>
          <span className="date">{createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </div>
      <Link
        to={generatePath(routes.article, { slug })}
        className="preview-link"
      >
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <TagList tagList={tagList} />
      </Link>
    </div>
  );
};

export default Article;
