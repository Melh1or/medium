import React from "react";
import CreateArticleForm from "./components/CreateArticleForm";
import { createArticleOperations } from "../../store/createArticle";
import { useDispatch } from "react-redux";

const CreateArticle = () => {
  const dispatch = useDispatch();

  const createArticleHandler = (article) => {
    dispatch(createArticleOperations.createArticle(article));
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <CreateArticleForm createArticleHandler={createArticleHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
