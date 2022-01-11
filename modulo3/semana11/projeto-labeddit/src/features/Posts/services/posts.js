import axios from "axios";
import { BASE_URL } from "../../../constants/parameters";

export const createComment = (id, body, clear, setIsLoading, getData) => {
  const token = localStorage.getItem("tokenLabEddit");
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      setIsLoading(false);
      clear();
      getData()
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const createVote = (id, vote, parameter, getData) => {
  const token = localStorage.getItem("tokenLabEddit");
  const body = {
    direction: vote,
  };
  axios
    .post(`${BASE_URL}/${parameter}/${id}/votes`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => getData())
    .catch((err) => alert(err.response.data.message));
};

export const changeVote = (id, vote, parameter, getData) => {
  const token = localStorage.getItem("tokenLabEddit");
  const body = {
    direction: vote,
  };
  axios
    .put(`${BASE_URL}/${parameter}/${id}/votes`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => getData())
    .catch((err) => alert(err.response.data.message));
};

export const deleteVote = (id, parameter, getData) => {
  const token = localStorage.getItem("tokenLabEddit");
  axios
    .delete(`${BASE_URL}/${parameter}/${id}/votes`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => getData())
    .catch((err) => alert(err.response.data.message));
};
