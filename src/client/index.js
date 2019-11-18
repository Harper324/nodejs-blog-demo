import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import NewPost from "./NewPost";

ReactDom.render(<App {...window.__APP_INITIAL_STATE__}/>, document.getElementById("root"));
