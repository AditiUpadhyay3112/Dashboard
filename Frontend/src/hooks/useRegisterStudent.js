import { useMutation } from "@tanstack/react-query";
import { registerStudent as registerStudentApi } from "../services/user";
import toast from "react-hot-toast";

export default function useRegisterStudent() {
  const { mutate: registerStudent, isLoading: isRegistering } = useMutation({
    mutationFn: registerStudentApi,
    onSuccess: (data) => {
      toast.success(data);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { registerStudent, isRegistering };
}
