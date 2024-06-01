import { useQuery } from "@tanstack/react-query";
import { getAdmin } from "../services/admin";

export default function useCurrentAdmin() {
  const { data: admin, isLoading: loadingAdmin } = useQuery({
    queryKey: ["admin"],
    queryFn: getAdmin,
    retry: 0,
  });

  return { admin, loadingAdmin };
}
