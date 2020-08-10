import { viewerActions } from "../viewer";
import actions from "./actions";
import Api from "../../api/index";

const updateSettings = (user) => async (dispatch) => {
  try {
    dispatch(actions.updateSettingsStart());

    const res = await Api.Profiles.updateProfile(user);

    dispatch(viewerActions.saveViewer(res.data.user));
    dispatch(actions.updateSettingsSuccess());
  } catch (error) {
    console.log(error);
    dispatch(actions.updateSettingsError(error));
  }
};

export default {
  updateSettings,
};
