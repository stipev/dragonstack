import React from "react";
import { render } from "react-dom";
import Generation from "./components/Generation";
import Dragon from "./components/Dragon";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import { generationReducer } from "./reducers/index";
import { generationActionCreator } from "./actions/generation";

const store = createStore(
  generationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("store state update: ", store.getState());
});

fetch("http://localhost:3000/generation").then(response => {
  response
    .json()
    .then(json => store.dispatch(generationActionCreator(json.generation)));
});

render(
  <Provider store={store}>
    <div>
      <h3>Dragon Stack</h3>
      <Generation />
      <Dragon />
    </div>
  </Provider>,
  document.getElementById("root")
);
