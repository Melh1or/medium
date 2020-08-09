import React from "react";
import { useState } from "react";

const CommentForm = ({ commentFormHandler }) => {
  const [value, setValue] = useState("")
  
  const onSubmit = e => {
    e.preventDefault()
    commentFormHandler(value)
  }

  return (
    <form className="card comment-form" onSubmit={onSubmit}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          rows="3"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div className="card-footer">
        <img
          src="http://i.imgur.com/Qr71crq.jpg"
          className="comment-author-img"
        />
        <button className="btn btn-sm btn-primary" type="submit">Post Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;
