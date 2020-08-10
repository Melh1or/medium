import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { profileOperations, profileSelectors } from "../../store/profile";
import { viewerSelectors } from "../../store/viewer";
import { routes } from "../routes";

import Loading from "../../components/Loading";
import Article from "./components/Article";

const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const viewer = useSelector(viewerSelectors.getViewer);
  const { isLoading, profile } = useSelector(profileSelectors.getProfile);
  const { isLoading: articlesLoading, articles } = useSelector(profileSelectors.getProfileArticles);

  useEffect(() => {
    dispatch(profileOperations.fetchProfile(username));
    dispatch(profileOperations.fetchProfileArticles(username));
  }, []);

  if (isLoading || profile === null) return <Loading />;

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={profile.image} className="user-img" alt="" />
              <h4>{profile.username}</h4>
              <p>{profile.bio || ""}</p>

              {viewer.username === profile.username ? (
                <Link to={routes.settings} className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-gear-a" />
                  &nbsp; Edit Profile Settings
                </Link>
              ) : (
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-plus-round" />
                  &nbsp; Follow {profile.username}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">

              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    My Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Favorited Articles
                  </a>
                </li>
              </ul>

              {articlesLoading || articles === null
                ? <Loading />
                : articles.map(article => <Article key={article.slug} article={article} />)
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
