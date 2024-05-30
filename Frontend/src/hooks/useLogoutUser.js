import { useMutation } from "@tanstack/react-query";
import { logoutStudent as logoutStudentApi } from "../services/user";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogoutUser() {
  const navigate = useNavigate();

  const { mutate: logoutStudent, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutStudentApi,
    onSuccess: () => {
      navigate("/login");
      toast.success("Logged out successfull");
    },
  });

  return { logoutStudent, isLoggingOut };
}
