import actions from "./actions";
import { viewerActions } from "../viewer";
import Api from "../../api/index";

const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(actions.loginStart());

    const res = await Api.Auth.login({ email, password });

    localStorage.setItem("token", res.data.user.token);

    dispatch(viewerActions.saveViewer(res.data));
    dispatch(actions.loginSuccess());
  } catch (error) {
    console.log(error);
    dispatch(actions.loginError(error));
  }
};

export default {
  login,
};
