import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/currentUser",
          { withCredentials: true }
        );
        console.log(response.data.data);
        setUser(response.data.data);
      } catch (error) {
        console.log(error);
      }
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

  //   if (isLoading) return <Spinner />;

  if (user) return children;
};

export default ProtectedRoute;
