const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
import React from "react";
import { renderToString, renderToNodeStream } from "react-dom/server";
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
const middlewares = [bodyParser.urlencoded(), cookieParser()];
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
    // const body = renderToNodeStream(<App {...initialState} />);
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
  // console.log(req.headers,'----------------header-----------------');
  console.log(
    req.headers.token,
    "----------------header token-----------------"
  );
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
  const payload = { userName: "aaa" };
  const privateKey = "caoxi";
  var token = jwt.sign(payload, privateKey);
  res.setHeader("token", token);
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
  console.log(userName, password, "login from fronted---------");
  validateUser(userName, password)
    .then(result => {
      const data = JSON.parse(result);
      console.log(data, "user from data----------");
      const id = data[0].id;
      const payload = { userName: userName };
      const privateKey = "caoxi";
      const token = jwt.sign(payload, privateKey);
      console.log(token, "token from backend----------");
      res.cookie("token", token, { httpOnly: true });
      //   res.setHeader("token",token);
      res.redirect(`/user/${id}/posts`);
      // res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.redirect("/login");
    });
});

server.get("/user/:id/posts", (req, res) => {
  console.log(req.headers, "-----------header---------------");
  const token = req.cookies.token;
  console.log(token, "-----------cookies---------------");
  const privateKey = "caoxi";
  jwt.verify(token, privateKey);
  if (req.cookies === undefined) {
    throw new Error("Do not login");
  }
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
  const token = req.cookies.token;
  const privateKey = "caoxi";
  if (token === undefined) {
    res.redirect("/login");
  }
  jwt.verify(token, privateKey);
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
  const token = req.cookies.token;
  const privateKey = "caoxi";
  if (token === undefined) {
    res.redirect("/login");
  }
  jwt.verify(token, privateKey);
  const { newTitle, newText } = req.body;
  const userId = req.params.userId;
  console.log(userId,'userId-------------');
  addPost(newTitle, newText, userId);
  res.redirect(`/user/${userId}/posts`);
});

server.get("/user/:userId/writer", (req, res) => {
  const initialState = {
    page: "NewPost",
    data: req.params.userId
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
