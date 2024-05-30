import { useQuery } from "@tanstack/react-query";
import { getCurrentStudent } from "../services/user";

export default function useCurrentStudent() {
  const { data: student, isLoading } = useQuery({
    queryKey: ["student"],
    queryFn: getCurrentStudent,
  });

  console.log(student);

  return {
    student,
    isLoading,
    isAuthenticated: student?.role === "authenticated",
  };
}
