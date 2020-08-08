import actions from "./actions";
import Api from "../../api/index";

const register = ({ username, email, password }) => async (dispatch) => {
  try {
    dispatch(actions.registerStart());

    const res = await Api.Auth.register({ username, email, password });

    console.log(res);
    dispatch(actions.registerSuccess());
  } catch (error) {
    console.log(error);
    dispatch(actions.registerError(error));
  }
};

export default {
  register,
};
