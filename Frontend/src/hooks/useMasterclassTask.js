import { useQuery } from "@tanstack/react-query";
import { getStudentTask } from "../services/task";

export default function useMasterclassTask() {
  const { data: masterclassTasks, isLoading: loadingMasterclassTasks } =
    useQuery({
      queryKey: ["masterclass-task"],
      queryFn: () => getStudentTask("masterclass"),
    });

  return { masterclassTasks, loadingMasterclassTasks };
}
