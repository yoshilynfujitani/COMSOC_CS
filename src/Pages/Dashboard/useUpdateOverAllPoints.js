import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOverAllPoints as updatePointsAPI } from "../../Services/apiGetUsers";
import toast from "react-hot-toast";

export function useUpdateOverallPoints() {
  const queryClient = useQueryClient();
  const { mutate: updateOverallPoints, isLoading: isUpdating } = useMutation({
    mutationFn: ({ userId, value, overallValue }) =>
      updatePointsAPI(userId, value, overallValue),

    onSuccess: () => {
      toast.success("Successfully Updated Points!");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateOverallPoints };
}
