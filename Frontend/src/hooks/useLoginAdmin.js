import { useMutation } from "@tanstack/react-query";
import { adminLogin as adminLoginApi } from "../services/admin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLoginAdmin() {
  const navigate = useNavigate();
  const { mutate: adminLogin, isLoading: loggingAdmin } = useMutation({
    mutationFn: adminLoginApi,
    onSuccess: () => {
      navigate("/admin");
      toast.success("Login Successfull");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { adminLogin, loggingAdmin };
}
