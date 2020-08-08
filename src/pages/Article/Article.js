import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { articleOperations, articleSelectors } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../../components/Loading";
import TagList from "../../components/TagList";

const Article = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const props = useSelector(articleSelectors.getArticle);

  useEffect(() => {
    dispatch(articleOperations.fetchArticle(slug));
  }, []);

  if (props.isError) return <p>Article not found!</p>
  if (props.isLoading || props.article === null) return <Loading />;

  const {
    author,
    body,
    createdAt,
    description,
    favoritesCount,
    title,
    tagList
  } = props.article;

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{title}</h1>

          <div className="article-meta">
            <Link to="">
              <img src={author.image} />
            </Link>
            <div className="info">
              <Link to="" className="author">
                {author.username}
              </Link>
              <span className="date">{createdAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {author.username}
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post{" "}
              <span className="counter">({favoritesCount})</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{description}</p>
          </div>

          <TagList tagList={tagList} />
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <Link to="">
              <img src={author.image} />
            </Link>
            <div className="info">
              <Link to="" className="author">
                {author.username}
              </Link>
              <span className="date">{createdAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {author.username}
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post{" "}
              <span className="counter">({favoritesCount})</span>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows="3"
                />
              </div>
              <div className="card-footer">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  className="comment-author-img"
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
