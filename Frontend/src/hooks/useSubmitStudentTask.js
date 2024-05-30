import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitStudentTask as submitStudentTaskApi } from "../services/task";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useSubmitStudentTask() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: submitStudentTask, isLoading: isSubmitting } = useMutation({
    mutationFn: submitStudentTaskApi,
    onSuccess: (message) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["student"] });
      navigate("/sportal");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { submitStudentTask, isSubmitting };
}
