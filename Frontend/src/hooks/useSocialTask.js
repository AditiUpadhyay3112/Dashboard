import { useQuery } from "@tanstack/react-query";
import { getStudentTask } from "../services/task";

export default function useSocialTask() {
  const { data: socialTasks, isLoading: loadingSocialTasks } = useQuery({
    queryKey: ["social-task"],
    queryFn: () => getStudentTask("social"),
  });

  return { socialTasks, loadingSocialTasks };
}
