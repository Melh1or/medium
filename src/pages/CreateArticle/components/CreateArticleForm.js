import React, { useState } from "react";

const CreateArticleForm = ({ createArticleHandler }) => {
  const [value, setValue] = useState({
    title: "",
    description: "",
    body: "",
    // tagList: []
  });

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    createArticleHandler(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Article Title"
            value={value.title}
            onChange={onChange}
            name="title"
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="What's this article about?"
            value={value.description}
            onChange={onChange}
            name="description"
          />
        </fieldset>

        <fieldset className="form-group">
          <textarea
            className="form-control"
            rows="8"
            placeholder="Write your article (in markdown)"
            value={value.body}
            onChange={onChange}
            name="body"
          />
        </fieldset>

        {/* <fieldset className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter tags"
          value={value.tagList}
          onChange={onChange}
          name="body"
        />
        <div className="tag-list"></div>
      </fieldset> */}

        <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
          Publish Article
        </button>
      </fieldset>
    </form>
  );
};

export default CreateArticleForm;
