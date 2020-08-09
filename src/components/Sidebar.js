import React, { useEffect } from "react";
import { tagsOperations, tagsSelectors } from "../store/tags";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isLoading, tags } = useSelector(tagsSelectors.getTags);

  useEffect(() => {
    if (tags === null) {
      dispatch(tagsOperations.fetchTags());
    }
  }, []);

  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        {isLoading || tags === null ? (
          <Loading />
        ) : (
          <div className="tag-list">
            {tags.map((tag, i) => (
              <Link key={i} to={""} className="tag-pill tag-default">
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
