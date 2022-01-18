import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./pages/post";
import PostsPage from "./pages/posts";
import NoMatchPage from "./pages/noMatch";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<PostsPage />} />
        <Route path="post/:postId" element={<PostPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
