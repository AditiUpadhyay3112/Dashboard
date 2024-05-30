import { useMutation } from "@tanstack/react-query";
import { createAdminTask as createAdminTaskApi } from "../services/task";
import toast from "react-hot-toast";

export default function useCreateAdminTask() {
  const { mutate: createAdminTask, isLoading: isCreating } = useMutation({
    mutationFn: createAdminTaskApi,
    onSuccess: (message) => {
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { createAdminTask, isCreating };
}
