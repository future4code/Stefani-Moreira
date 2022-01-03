import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import {
  createVote,
  changeVote,
  deleteVote,
} from "../services/posts";
import CommentsPost from "../components/CommentsPost";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Post() {
  const params = useParams();
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
        <div key={post.id}>
          <p>{post.username}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <ArrowUpwardIcon onClick={positiveVote} color={post.userVote === 1 ? "primary" : "inherit"}/>
        <p>{post.voteSum}</p>
          <ArrowDownwardIcon onClick={negativeVote} color={post.userVote === -1 ? "secundary" : "inherit"}/>
          <p>{post.commentCount}</p>
        </div>
      );
    }
    return cardPost;
  });

  return (
    <div>
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && posts.length > 0 ? (
        <div>
          {renderPost}
          <CommentsPost />
        </div>
      ) : (
        <p>CARREGANDO...</p>
      )}
    </div>
  );
}
