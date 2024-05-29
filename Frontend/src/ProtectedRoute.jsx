import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      setUser(localStorage.getItem("user"));
    };

    getUser();
  }, []);

  useEffect(
    function () {
      if (!user) {
        navigate("/login");
      }
    },
    [user, navigate]
  );

  if (user) return children;
};

export default ProtectedRoute;
