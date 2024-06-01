import { useMutation } from "@tanstack/react-query";
import { submitFeedback as submitFeedbackApi } from "../services/feedback";
import toast from "react-hot-toast";

export default function useSubmitFeedback() {
  const { mutate: submitFeedback, isLoading: isSubmitting } = useMutation({
    mutationFn: submitFeedbackApi,
    onSuccess: (message) => {
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { submitFeedback, isSubmitting };
}
