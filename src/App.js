import React from "react";
import Router from "./pages/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { viewerOperations } from "./store/viewer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewerOperations.getViewer());
  }, []);

  return <Router />;
};

export default App;
