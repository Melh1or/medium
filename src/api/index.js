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
  getViewer() {
    try {
      const token = localStorage.getItem("token");

      return axios.get("/user", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
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

const Tags = {
  fetchTags() {
    return axios.get("/tags");
  },
};

export default {
  Auth,
  Feed,
  Article,
  Tags,
};
