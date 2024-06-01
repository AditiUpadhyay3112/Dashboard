import { useQuery } from "@tanstack/react-query";
import { getCurrentStudent } from "../services/user";

export default function useCurrentStudent() {
  const { data: student, isLoading } = useQuery({
    queryKey: ["student"],
    queryFn: getCurrentStudent,
  });

  return {
    student,
    isLoading,
  };
}
