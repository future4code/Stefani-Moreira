import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/parameters";

export const useRequestData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("tokenLabEddit");

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.message);
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading, error, getData];
};
