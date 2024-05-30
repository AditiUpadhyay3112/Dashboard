import { useMutation } from "@tanstack/react-query";
import { loginStudent as loginStudentApi } from "../services/user.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLoginUser() {
  const navigate = useNavigate();

  const { mutate: loginStudent, isLoading: isLogging } = useMutation({
    mutationFn: loginStudentApi,
    onSuccess: () => {
      navigate("/");
      toast.success("Login Successfull");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { loginStudent, isLogging };
}
