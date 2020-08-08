import axios from "axios";

axios.defaults.baseURL = "https://conduit.productionready.io/api";

const Auth = {
  login({ email, password }) {
    return axios.post("/users/login", {
      user: {
        email,
        password,
      },
    });
  },
  register({ username, email, password }) {
    return axios.post("/users", {
      username,
      email,
      password,
    });
  },
};

const Feed = {
  fetchFeed({ limit, offset }) {
    return axios.get(`/articles?limit=${limit}&offset=${offset}`);
  },
};

const Article = {
  fetchArticle(slug) {
    return axios.get(`/articles/${slug}`);
  },
};

export default {
  Auth,
  Feed,
  Article,
};
