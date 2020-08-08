import React from "react";
import { Link } from "react-router-dom";

const Article = ({
  author,
  body,
  createdAt,
  description,
  favorited,
  favoritesCount,
  tagList,
  title,
}) => {
  return (
    <div class="article-page">
      <div class="banner">
        <div class="container">
          <h1>{title}</h1>

          <div class="article-meta">
            <Link to="">
              <img src={author.image} />
            </Link>
            <div class="info">
              <Link href="" class="author">
                {author.username}
              </Link>
              <span class="date">{createdAt}</span>
            </div>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp; Follow {author.username}
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp; Favorite Post{" "}
              <span class="counter">({favoritesCount})</span>
            </button>
          </div>
        </div>
      </div>

      <div class="container page">
        <div class="row article-content">
          <div class="col-md-12">
            <p>{description}</p>
          </div>
        </div>

        <hr />

        <div class="article-actions">
          <div class="article-meta">
            <Link to="">
              <img src={author.image} />
            </Link>
            <div class="info">
              <Link to="" class="author">
                {author.username}
              </Link>
              <span class="date">{createdAt}</span>
            </div>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp; Follow {author.username}
            </button>
            &nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp; Favorite Post{" "}
              <span class="counter">({favoritesCount})</span>
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-md-8 offset-md-2">
            <form class="card comment-form">
              <div class="card-block">
                <textarea
                  class="form-control"
                  placeholder="Write a comment..."
                  rows="3"
                />
              </div>
              <div class="card-footer">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
                <button class="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
