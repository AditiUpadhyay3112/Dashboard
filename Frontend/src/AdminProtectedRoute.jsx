import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentAdmin from "./hooks/useCurrentAdmin";

export default function AdminProtectedRoute({ children }) {
  const { admin, loadingAdmin } = useCurrentAdmin();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!loadingAdmin && !admin) {
        navigate("/login");
      }
    },
    [admin, loadingAdmin, navigate]
  );

  if (loadingAdmin) return null;

  if (admin) return children;
}
