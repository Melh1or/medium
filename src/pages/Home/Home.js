import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../../components/Sidebar";
import FeedToggler from "../../components/FeedToggler";
import Feed from "../../components/Feed";

import { feedOperations } from "../../store/feed";
import { feedSelectors } from "../../store/feed";
import Loading from "../../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, articles } = useSelector(feedSelectors.getFeed);

  useEffect(() => {
    dispatch(feedOperations.fetchFeed());
  }, []);

  return (
    <div class="home-page">
      <div class="banner">
        <div class="container">
          <h1 class="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <FeedToggler />
            {isLoading ? <Loading /> : <Feed articles={articles} />}
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
