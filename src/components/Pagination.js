import React from "react";
import { NavLink } from "react-router-dom";

const generateArray = (count) => {
  return new Array(count / 10).fill("_").map((el, i) => i + 1);
};

const Pagination = ({ articlesCount }) => {
  const arr = generateArray(articlesCount);

  return (
    <ul className="pagination">
      {arr.map((el) => (
        <NavLink key={el} to={`/${el}`} className="page-link">
          {el}
        </NavLink>
      ))}
    </ul>
  );
};

export default Pagination;
