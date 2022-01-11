import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import CreatePostPage from "../pages/CreatePostPage/CreatePostPage";
import PostPage from "../pages/PostPage/PostPage";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signUp" element={<SignUpPage />} />
        <Route exact path="/" element={<FeedPage />} />
        <Route exact path="/createPost" element={<CreatePostPage />} />
        <Route exact path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
