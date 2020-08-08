import React from "react";
import { Link } from "react-router-dom";

const Comment = ({ author, body, createdAt }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <Link to="" className="comment-author">
          <img src={author.image} className="comment-author-img" />
        </Link>
        &nbsp;
        <Link to="" className="comment-author">
          {author.username}
        </Link>
        <span className="date-posted">{createdAt}</span>
      </div>
    </div>
  );
};

export default Comment;
