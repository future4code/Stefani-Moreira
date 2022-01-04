import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import { useParams, useNavigate } from "react-router-dom";
import { createVote, changeVote, deleteVote } from "../services/posts";
import CommentsPost from "../components/CommentsPost/CommentsPost";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { MainContainer, PostContainer } from "./StyledPost";

export default function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const [posts, isLoading, error, getPosts] = useRequestData(`/posts`, []);

  const renderPost = posts.map((post) => {
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

    let cardPost;
    if (post.id === params.id) {
      cardPost = (
        <PostContainer key={post.id}>
          <div>
            <p>{post.username}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            {post.commentCount ? (
              <p>{post.commentCount} comentários</p>
            ) : (
              <div>{""}</div>
            )}
          </div>
          <div>
            <ArrowUpwardIcon
              onClick={positiveVote}
              color={post.userVote === 1 ? "primary" : "inherit"}
            />
            <p>{post.voteSum}</p>
            <ArrowDownwardIcon
              onClick={negativeVote}
              color={post.userVote === -1 ? "secundary" : "inherit"}
            />
          </div>
        </PostContainer>
      );
    }
    return cardPost;
  });

  return (
    <MainContainer>
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && posts.length > 0 ? (
        <div>
          <h3 onClick={() => navigate("/")}>X</h3>
          {renderPost}
            <CommentsPost />
        </div>
      ) : (
        <p>CARREGANDO...</p>
      )}
    </MainContainer>
  );
}
