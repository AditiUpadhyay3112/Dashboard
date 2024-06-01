import { useMutation } from "@tanstack/react-query";
import { adminLogout } from "../services/admin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogoutAdmin() {
  const navigate = useNavigate();
  const { mutate: logoutAdmin, isLoading: loggingOut } = useMutation({
    mutationFn: adminLogout,
    onSuccess: () => {
      navigate("/login");
      toast.success("Logged out successfull");
    },
  });

  return { logoutAdmin, loggingOut };
}
