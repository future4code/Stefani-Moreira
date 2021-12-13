import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/parameters";

import { MessageArea } from "../assets/alert/alert";

export const useRequestData = (trips, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${trips}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        MessageArea.fire({
          title: err.response.data.message,
          background: "#bc316f",
          color: "#ffffff",
        });
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading, error, getData];
};
