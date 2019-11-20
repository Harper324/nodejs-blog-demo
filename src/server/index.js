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
  addPost,
  addUser
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
  const token = req.cookies.token;
  console.log(token,'token------------');

  res.send(
    html({
      body: body,
      title: title,
      initialState: initialState
    })
  );
});

server.post("/login", (req, res) => {
    console.log(req.cookies.token,'token from last cycle-----------');
  const { userName, password } = req.body;
  validateUser(userName, password)
    .then(result => {
      const data = JSON.parse(result);
      const id = data[0].id;
      const payload = { userName: userName };
      const privateKey = "caoxi" + id;
      const token = jwt.sign(payload, privateKey);
      console.log(token,'new token----------');
      res.cookie("token", token, { httpOnly: true });
      res.redirect(`/user/${id}/posts`);
    })
    .catch(err => {
      console.log(err);
      res.redirect("/login");
    });
});

server.get("/register", (req, res) => {
  const page = "Register";
  const initialState = {
    page: page
  };
  const body = renderToString(<App {...initialState} />);
  res.send(
    html({
      body: body,
      title: page,
      initialState: initialState
    })
  );
});

server.post("/register", (req, res) => {
  const { userName, password } = req.body;
  addUser(userName, password).then(result => {
    const userId = JSON.parse(result).insertId;
    const privateKey = "caoxi" + userId;
    const payload = { userName: userName };
    const token = jwt.sign(payload, privateKey);
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/");
  });
});

server.get("/user/:id/posts", (req, res) => {
  const token = req.cookies.token;
  const userId = req.params.id;
  const privateKey = "caoxi" + userId;
  jwt.verify(token, privateKey);
  if (req.cookies === undefined) {
    throw new Error("Do not login");
  }
  getUserPosts(userId).then(result => {
    const page = "PostList";
    const data = JSON.parse(result);
    const initialState = {
      page: page,
      data: data,
      userId: userId
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
  const userId = req.params.userId;
  const privateKey = "caoxi" + userId;
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
  const userId = req.params.userId;
  const privateKey = "caoxi" + userId;
  if (token === undefined) {
    res.redirect("/login");
  }
  jwt.verify(token, privateKey);
  const { newTitle, newText } = req.body;
  console.log(userId, "userId-------------");
  addPost(newTitle, newText, userId);
  res.redirect(`/user/${userId}/posts`);
});

server.get("/user/:userId/writer", (req, res) => {
  const token = req.cookies.token;
  const userId = req.params.userId;
  const privateKey = "caoxi" + userId;
  if (token === undefined) {
    res.redirect("/login");
  }
  jwt.verify(token, privateKey);
  const initialState = {
    page: "NewPost",
    data: userId
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

server.get("/user/:userId/logout", (req, res) => {
  const token = req.cookies.token;
  const userId = req.params.userId;
  const privateKey = "caoxi" + userId;
  if (token === undefined) {
    res.redirect("/login");
  }
//   jwt.verify(token, privateKey);
  res.clearCookie("token");
  res.redirect("/");
});

server.listen(port);
console.log(`server is listenning on http://localhost:${port}`);
