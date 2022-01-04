import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Feed from "../../features/Posts/Feed/Feed";
import Header from "../../shared/Header/Header";

export default function FeedPage() {
  useProtectedPage();

  return (
    <div>
      <Header />
      <Feed />
    </div>
  );
}
