import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { createVote, changeVote, deleteVote } from "../services/posts";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Feed() {
  const [posts, isLoading, error, getPosts] = useRequestData(`/posts`, []);
  const navigate = useNavigate();
  const goToDetails = (id) => {
    navigate(`/post/${id}`);
  };

  const renderFeed = posts.map((post) => {
    const voteCount = (vote) => {
      if (post.userVote === null) {
        createVote(post.id, vote, "posts", getPosts);
      } else if (vote === 1) {
        changeVote(post.id, vote, "posts", getPosts);
      } else {
        deleteVote(post.id, "posts", getPosts);
      }
    };

    const positiveVote = () => {
      if (post.userVote === 1) {
        voteCount();
      } else {
        voteCount(1);
      }
    };

    const negativeVote = () => {
      if (post.userVote === -1) {
        voteCount();
      } else {
        voteCount(-1);
      }
    };
    return (
      <div key={post.id}>
        <p>{post.username}</p>
        <div onClick={() => goToDetails(post.id)}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
          <ArrowUpwardIcon onClick={positiveVote} color={post.userVote === 1 ? "primary" : "inherit"}/>
        <p>{post.voteSum}</p>
          <ArrowDownwardIcon onClick={negativeVote} color={post.userVote === -1 ? "secundary" : "inherit"}/>
        <p onClick={() => goToDetails(post.id)}>{post.commentCount}</p>
      </div>
    );
  });

  return (
    <div>
      {isLoading && (
        <div>
          <p>CARREGANDO...</p>
        </div>
      )}
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && !error && posts.length > 0 && <div>{renderFeed}</div>}
    </div>
  );
}
