import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Services/apiGetUsers";

export function useUsers() {
  const { data: students_info, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: getUsers,
  });

  return { students_info, isLoading };
}
