import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("tokenLabEddit");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
};
