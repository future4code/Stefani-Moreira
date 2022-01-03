import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import { useForm } from "../../../hooks/useForm";
import { useParams } from "react-router-dom";
import {
  createComment,
  createVote,
  changeVote,
  deleteVote,
} from "../services/posts";
import TextField from "@mui/material/TextField";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export default function Post() {
  const params = useParams();
  const [comments, isLoading, error, getComments] = useRequestData(
    `/posts/${params.id}/comments`,
    []
  );
  const [form, onChange, clear] = useForm({ body: "" });

  const submitComment = (event) => {
    event.preventDefault();
    createComment(params.id, form, clear, getComments);
  };

  const postComments = comments.map((comment) => {
    const voteCount = (vote) => {
      if (vote === 1) {
        createVote(comment.id, vote, "comments", getComments);
      } else if (vote === -1) {
        changeVote(comment.id, vote, "comments", getComments);
      } else {
        deleteVote(comment.id, "comments", getComments);
      }
    };

    const positiveVote = () => {
      if (comment.userVote === 1) {
        voteCount();
      } else {
        voteCount(1);
      }
    };

    const negativeVote = () => {
      if (comment.userVote === -1) {
        voteCount();
      } else {
        voteCount(-1);
      }
    };

    return (
      <div key={comment.id}>
        <li>{comment.username}</li>
        <li>{comment.body}</li>
        <ArrowUpwardIcon onClick={positiveVote} color={comment.userVote === 1 ? "primary" : "inherit"}/>
        <p>{comment.voteSum}</p>
          <ArrowDownwardIcon onClick={negativeVote} color={comment.userVote === -1 ? "secundary" : "inherit"}/>
      </div>
    );
  });

  return (
    <div>
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && !error && <div>
        <form onSubmit={submitComment}>
            <div>
              <TextField
                type="text"
                name="body"
                value={form.body}
                onChange={onChange}
                required
                label={"Texto"}
                fullWidth
                margin={"normal"}
              />
            </div>
            <button type={"submit"}>Enviar</button>
          </form>
      </div>}
      {!isLoading && comments.length > 0 ? (
        <div>
          {postComments}
        </div>
      ) : (
        <p>CARREGANDO...</p>
      )}
    </div>
  );
}
