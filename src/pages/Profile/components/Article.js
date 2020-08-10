import React from "react";
import { Link, generatePath } from "react-router-dom";

import { routes } from "../../routes";

const Article = ({
  article: { title, tagList, favoritesCount, createdAt, author, description, slug },
}) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={generatePath(routes.profile, { username: author.username })}>
          <img src={author.image} alt="" />
        </Link>
        <div className="info">
          <Link
            to={generatePath(routes.profile, { username: author.username })}
            className="author"
          >
            {author.username}
          </Link>
          <span className="date">{createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> {favoritesCount}
        </button>
      </div>
      <Link
        to={generatePath(routes.article, { slug })}
        className="preview-link"
      >
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tagList.map((tag, i) => (
            <li key={i} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default Article;
