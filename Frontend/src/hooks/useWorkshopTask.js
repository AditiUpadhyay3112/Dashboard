import { useQuery } from "@tanstack/react-query";
import { getStudentTask } from "../services/task";

export default function useWorkshopTask() {
  const { data: workshopTasks, isLoading: loadingWorkshopTasks } = useQuery({
    queryKey: ["workshop-task"],
    queryFn: () => getStudentTask("workshop"),
  });

  return { workshopTasks, loadingWorkshopTasks };
}
