import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import { useNavigate, useParams } from "react-router-dom";

export default function Post() {
  const [posts, isLoading, error] = useRequestData(`/posts`, []);
  const params = useParams();
  const navigate = useNavigate();

  const renderPost = posts.map((post) => {
    if (post.id === params.id) {
      return (
        <div key={post.id}>
          <p>{post.username}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <p>{post.voteSum}</p>
          <p>{post.userVote}</p>
          <p>{post.commentCount}</p>
        </div>
      );
    }
  });
  return (
    <div>
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && posts.length > 0 ? (
        <div>{renderPost}</div>
      ) : (
        <p>CARREGANDO...</p>
      )}
    </div>
  );
}
