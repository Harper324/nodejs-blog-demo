const express = require("express");
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";
import html from "../client/html";
import { getAllPosts, getPost } from "../service/index";

const port = 3000;
const server = express();

server.get("/", (req, res) => {
  getAllPosts().then(result => {
    const page = "Home";
    const initialState = {
      page: page,
      data: JSON.parse(result)
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

server.get("/posts/:id",(req,res)=>{
    getPost(req.params.id).then(result=>{
        const page = "Text";
        const initialState = {
            page: page,
            data: JSON.parse(result)
        };
        const body = renderToString(<App {...initialState} />);
        const title = "The Text";
        res.send(
            html({
                body:body,
                title:title,
                initialState:initialState
            })
        )
    })

})

server.listen(port);
console.log(`server is listenning on http://localhost:${port}`);
