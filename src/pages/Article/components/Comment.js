import React from "react";
import { Link, generatePath } from "react-router-dom";
import { routes } from '../../routes'

const Comment = ({ comment: { author, body, createdAt } }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <Link
          to={generatePath(routes.profile, { username: author.username })}
          className="comment-author"
        >
          <img src={author.image} className="comment-author-img" alt="" />
        </Link>
        &nbsp;
        <Link
          to={generatePath(routes.profile, { username: author.username })}
          className="comment-author"
        >
          {author.username}
        </Link>
        <span className="date-posted">{createdAt}</span>
      </div>
    </div>
  );
};

export default Comment;
