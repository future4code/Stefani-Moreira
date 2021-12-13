import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/parameters";

import Swal from "sweetalert2";

export const useRequestData = (trips, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const ErrorArea = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: "#bc316f",
    color: "#ffffff",
  });

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
        ErrorArea.fire({ title: err.response.data.message });
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading, error, getData];
};
