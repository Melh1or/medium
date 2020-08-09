import { default as Api } from "../../api";
import { viewerActions } from ".";

const getViewer = () => async (dispatch) => {
  try {
    const res = await Api.Auth.getViewer();

    dispatch(viewerActions.saveViewer(res.data.user));
  } catch (e) {
    console.log(e);
  }
};

export default {
  getViewer
}