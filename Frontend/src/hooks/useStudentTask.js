import { useQuery } from "@tanstack/react-query";
import { getStudentTask } from "../services/task";

export default function useStudentTask() {
  const { data: studentTasks, isLoading: loadingStudentTasks } = useQuery({
    queryKey: ["student-task"],
    queryFn: () => getStudentTask("student"),
  });

  return { studentTasks, loadingStudentTasks };
}
