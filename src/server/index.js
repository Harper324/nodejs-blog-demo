const express = require("express");
const bodyParser = require("body-parser");
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";
import html from "../client/html";
import {
  getAllPosts,
  getPost,
  getUserPosts,
  validateUser,
  addPost
} from "../service/index";

const port = 3000;
const server = express();
const middlewares = [
  // express.static(path.join(__dirname, 'public')),
  bodyParser.urlencoded()
];
server.use(middlewares);

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

server.post("/login", (req, res) => {
  const { userName, password } = req.body;
  validateUser(userName, password)
    .then(result => {
      const data = JSON.parse(result);
      const id = data[0].id;
      res.redirect(`/user/${id}/posts`);
    })
    .catch(err => console.log(err));
});

server.get("/user/:id/posts", (req, res) => {
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

server.get("/user/:userId/posts/:id", (req, res) => {
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

server.post("/user/:userId/writer", (req, res) => {
  const { newTitle, newText } = req.body;
  const userId = req.params.userId;
  addPost(newTitle, newText, userId);
  res.redirect(`/user/${userId}/posts`);
});

server.get("/user/:userId/writer", (req, res) => {
  const initialState = {
    page: "NewPost"
  };
  const body = renderToString(<App {...initialState} />);
  const title = "Writer";
  res.send(
    html({
      body: body,
      title: title,
      initialState: initialState
    })
  );
});

server.listen(port);
console.log(`server is listenning on http://localhost:${port}`);
