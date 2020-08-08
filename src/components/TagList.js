import React from "react";

const TagList = ({ tagList = [] }) => {
  return (
    <ul className="tag-list">
      {tagList.map((tag, i) => (
        <li key={i} className="tag-default tag-pill tag-outline">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
