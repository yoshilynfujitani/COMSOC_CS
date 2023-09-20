import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../Services/apiAuth";
import { getUserName } from "../../Services/apiGetUsers";

export function useUsername() {
  const { data: userName, isLoading } = useQuery({
    queryFn: getUserName,
    queryKey: ["userName"],
  });

  return { isLoading, userName };
}
