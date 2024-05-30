import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentStudent from "./hooks/useCurrentStudent";

export default function ProtectedRoute({ children }) {
  const { student, isLoading, isAuthenticated } = useCurrentStudent();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isLoading && !student) {
        navigate("/login");
      }
    },
    [student, isLoading, navigate]
  );

  if (isLoading) return null;

  if (student) return children;
}
