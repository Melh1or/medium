import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../../components/Sidebar";
import FeedToggler from "../../components/FeedToggler";
import Feed from "../../components/Feed";

import { feedOperations } from "../../store/feed";
import { feedSelectors } from "../../store/feed";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, articles, articlesCount } = useSelector(
    feedSelectors.getFeed
  );

  useEffect(() => {
    dispatch(feedOperations.fetchFeed());
  }, []);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler />
            {isLoading ? (
              <Loading />
            ) : (
              <Fragment>
                <Feed articles={articles} />
                <Pagination articlesCount={articlesCount} />
              </Fragment>
            )}
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
