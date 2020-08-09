import { default as Api } from "../../api";
import { viewerActions } from ".";

const getViewer = () => async (dispatch) => {
  try {
    dispatch(viewerActions.getViewerStart());
    const res = await Api.Auth.getViewer();

    dispatch(viewerActions.saveViewer(res.data.user));
    dispatch(viewerActions.getViewerSuccess());
  } catch (e) {
    console.log(e);
    dispatch(viewerActions.getViewerError(e));
  }
};

export default {
  getViewer,
};
