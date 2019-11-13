const express = require("express");
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";
import html from "../client/html";
import { getAllPosts, getPost, getUserPosts } from "../service/index";

const port = 3000;
const server = express();

server.get("/", (req, res) => {
  getAllPosts().then(result => {
    const page = "Home";
    const data = JSON.parse(result);
    const initialState = {
      page: page,
      data: data
    };
    const body = renderToString(<App {...initialState} />);
    const title = "Hello World from the server";
    res.send(
      html({
        body: body,
        title: title,
        initialState: initialState
      })
    );
  });
});

server.get("/posts/:id", (req, res) => {
  getPost(req.params.id).then(result => {
    const initialState = {
      page: "Text",
      data: JSON.parse(result)
    };
    const body = renderToString(<App {...initialState} />);
    const title = "The Text";
    res.send(
      html({
        body: body,
        title: title,
        initialState: initialState
      })
    );
  });
});

server.get("/login", (req, res) => {
  const initialState = {
    page: "Login"
  };
  const body = renderToString(<App {...initialState} />);
  const title = "Login";
  res.send(
    html({
      body: body,
      title: title,
      initialState: initialState
    })
  );
});

server.get("/user/:id", (req, res) => {
  console.log(req.params.id, "idididididiididi");
  getUserPosts(req.params.id).then(result => {
    const page = "PostList";
    const data = JSON.parse(result);
    const initialState = {
      page: page,
      data: data
    };
    const body = renderToString(<App {...initialState} />);
    const title = "PostList";
    res.send(
      html({
        body: body,
        title: title,
        initialState: initialState
      })
    );
  });
});

server.get("/user/:userId/:id", (req, res) => {
  getPost(req.params.id).then(result => {
    const initialState = {
      page: "Text",
      data: JSON.parse(result)
    };
    const body = renderToString(<App {...initialState} />);
    const title = "The Text";
    res.send(
      html({
        body: body,
        title: title,
        initialState: initialState
      })
    );
  });
});
server.listen(port);
console.log(`server is listenning on http://localhost:${port}`);
