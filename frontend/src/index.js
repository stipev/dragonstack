import React from "react";
import { render } from "react-dom";
import Generation from "./components/Generation";
import Dragon from "./components/Dragon";
import { createStore } from "redux";
import "./index.css";

const DEFAULT_GENERATION = {
  generationId: "",
  expiration: ""
};

const generationReducer = (state, action) => {
  console.log("generation reducer state", state);
  console.log("generation reducer action", action);

  if (action.type === "GENERATION_ACTION_TYPE") {
    return {
      generation: action.generation
    };
  }

  return {
    generation: DEFAULT_GENERATION
  };
};

const store = createStore(generationReducer);
//console.log("store ", store);
//console.log("store.getState:  ", store.getState());
store.dispatch({ type: "aaaa" });
store.dispatch({
  type: "GENERATION_ACTION_TYPE",
  generation: {
    generationId: 10,
    expiration: "foo"
  }
});

console.log("store.getState() ", store.getState());

render(
  <div>
    <h3>Dragon Stack</h3>
    <Generation />
    <Dragon />
  </div>,
  document.getElementById("root")
);
