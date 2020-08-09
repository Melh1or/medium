import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { profileOperations, profileSelectors } from "../../store/profile";

import Loading from "../../components/Loading";
import { viewerSelectors } from "../../store/viewer";

const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const viewer = useSelector(viewerSelectors.getViewer);
  const { isLoading, profile } = useSelector(profileSelectors.getProfile);

  useEffect(() => {
    dispatch(profileOperations.fetchProfile(username));
    
  }, []);

  if (isLoading || profile === null) return <Loading />;

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={profile.image} className="user-img" />
              <h4>{profile.username}</h4>
              <p>{profile.bio || ""}</p>

              {viewer.username === profile.username ? (
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-gear-a"></i>
                  &nbsp; Edit Profile Settings
                </button>
              ) : (
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-plus-round"></i>
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
