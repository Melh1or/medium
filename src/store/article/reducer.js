import types from "./types";

const initialState = {
  article: {
    isLoading: false,
    isError: false,
    error: null,
    item: null,
  },
  comments: {
    isLoading: false,
    isError: false,
    error: null,
    items: null,
  },
  postComment: {
    isLoading: false,
    isError: false,
    error: null,
  },
  favoritePost: {
    isLoading: false,
    isError: false,
    error: null,
  },
  unFavoritePost: {
    isLoading: false,
    isError: false,
    error: null,
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_ARTICLE_START:
      return {
        ...state,
        article: {
          ...state.article,
          isLoading: true,
          isError: false,
          error: null,
        },
      };
    case types.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          isLoading: false,
          item: payload.article,
        },
      };
    case types.FETCH_ARTICLE_ERROR:
      return {
        ...state,
        article: {
          ...state.article,
          isLoading: false,
          isError: true,
          error: payload.error,
        },
      };
    case types.FETCH_ARTICLE_COMMENTS_START:
      return {
        ...state,
        comments: {
          ...state.comments,
          isLoading: true,
          isError: false,
          error: null,
        },
      };
    case types.FETCH_ARTICLE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          isLoading: false,
          items: payload.comments,
        },
      };
    case types.FETCH_ARTICLE_COMMENTS_ERROR:
      return {
        ...state,
        comments: {
          ...state.comments,
          isLoading: false,
          isError: true,
          error: payload.error,
        },
      };
    case types.POST_COMMENT_START:
      return {
        ...state,
        postComment: {
          ...state.postComment,
          isLoading: true,
          isError: false,
          error: null,
        },
      };
    case types.POST_COMMENT_SUCCESS:
      const items = state.comments.items || [];
      items.unshift(payload.comment);

      return {
        ...state,
        postComment: {
          ...state.postComment,
          isLoading: false,
        },
        comments: {
          ...state.comments,
          items,
        },
      };
    case types.POST_COMMENT_ERROR:
      return {
        ...state,
        postComment: {
          ...state.postComment,
          isLoading: false,
          isError: true,
          error: payload.error,
        },
      };
    
      case types.FAVORITE_POST_START:
        return {
          ...state,
          favoritePost: {
            ...state.favoritePost,
            isLoading: true,
            isError: false,
            error: null,
          },
        };
      case types.FAVORITE_POST_SUCCESS:
        return {
          ...state,
          favoritePost: {
            ...state.favoritePost,
            isLoading: false,
          },
          article: {
            ...state.article,
            items: payload.article
          }
        };
      case types.FAVORITE_POST_ERROR:
        return {
          ...state,
          favoritePost: {
            ...state.favoritePost,
            isLoading: false,
            isError: true,
            error: payload.error,
          },
        };
        case types.UN_FAVORITE_POST_START:
          return {
            ...state,
            unFavoritePost: {
              ...state.unFavoritePost,
              isLoading: true,
              isError: false,
              error: null,
            },
          };
        case types.UN_FAVORITE_POST_SUCCESS:
          return {
            ...state,
            unFavoritePost: {
              ...state.unFavoritePost,
              isLoading: false,
            },
            article: {
              ...state.article,
              items: payload.article
            }
          };
        case types.UN_FAVORITE_POST_ERROR:
          return {
            ...state,
            unFavoritePost: {
              ...state.unFavoritePost,
              isLoading: false,
              isError: true,
              error: payload.error,
            },
          };
      
    
    default:
      return state;
  }
};
