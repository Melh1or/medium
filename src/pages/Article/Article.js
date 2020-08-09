import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { articleOperations, articleSelectors } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../../components/Loading";
import TagList from "../../components/TagList";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";

const Article = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const articleProps = useSelector(articleSelectors.getArticleFromRedux(slug));
  const commentsProps = useSelector(articleSelectors.getArticleComments);

  useEffect(() => {
    if (articleProps.item === null) {
      dispatch(articleOperations.fetchArticle(slug));
    }
    dispatch(articleOperations.fetchArticleComments(slug));
  }, []);

  if (articleProps.isError) return <p>Article not found!</p>;
  if (articleProps.item === null) return <Loading />;

  const { author, body, createdAt, description, favoritesCount, favorited, title, tagList } = articleProps.item;
  // const favoriteTitle = favorited ? "Unfavorite" : "Favorite"
  // const favoriteClasses = favorited ? "btn btn-sm btn-outline-primary" : "btn btn-sm btn-primary"

  const commentFormHandler = (body) => {
    dispatch(articleOperations.postComment(slug, body));
  }

  // const favoriteClick = () => {
  //   if (favorited) {
  //     dispatch(articleOperations.unFavoriteArticle(slug))
  //   } else {
  //     dispatch(articleOperations.favoriteArticle(slug))
  //   }
  // }

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

        {/* <div className="article-actions">
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
            <button className={favoriteClasses} onClick={favoriteClick}>
              <i className="ion-heart"></i>
              &nbsp; {favoriteTitle}
              <span className="counter">({favoritesCount})</span>
            </button>
          </div>
        </div> */}

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <CommentForm commentFormHandler={commentFormHandler} />

            {commentsProps.isLoading || commentsProps.items === null
              ? <Loading />
              : commentsProps.items.map((comment) => <Comment key={comment.id} comment={comment} />)}
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
