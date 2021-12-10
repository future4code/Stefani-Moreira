import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/parameters";

export const useRequestData = (trips) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${trips}`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.trips);
      })
      .catch((err) => {
        alert(err.response.message);
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading, error, getData];
};
