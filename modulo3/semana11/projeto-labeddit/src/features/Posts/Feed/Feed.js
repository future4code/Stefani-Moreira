import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";

export default function Feed() {
  const [posts, isLoading, error] = useRequestData(`/posts`, []);
  const navigate = useNavigate();
  const goToDetails = (id) => {
    navigate(`/post/${id}`);
  };

  const renderFeed = posts.map((post) => {
    return (
      <div key={post.id}>
        <p>{post.username}</p>
        <div onClick={() => goToDetails(post.id)}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
        <p>{post.voteSum}</p>
        <p>{post.userVote}</p>
        <p onClick={() => goToDetails(post.id)}>{post.commentCount}</p>
      </div>
    );
  });
  return (
    <div>
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && posts.length > 0 ? (
        <div>{renderFeed}</div>
      ) : (
        <p>CARREGANDO...</p>
      )}
    </div>
  );
}
