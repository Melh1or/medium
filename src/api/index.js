import axios from "axios";

axios.defaults.baseURL = "https://conduit.productionready.io/api";
const token = localStorage.getItem("token");
axios.defaults.headers.common.Authorization = `Token ${token}`;

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
  fetchArticleComments(slug) {
    return axios.get(`/articles/${slug}/comments`);
  },
  createArticle({ body, description, tagList, title }) {
    return axios.post("/articles", {
      article: { body, description, tagList, title },
    });
  },
  postComment(slug, body) {
    return axios.post(`/articles/${slug}/comments`, {
      comment: { body },
    });
  },
  favoriteArticle(slug) {
    return axios.post(`/articles/${slug}/favorite`);
  },
  unFavoriteArticle(slug) {
    return axios.delete(`/articles/${slug}/favorite`);
  },
};

const Profiles = {
  getProfile(username) {
    return axios.get(`/profiles/${username}`)
  }
}

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
  Profiles
};
