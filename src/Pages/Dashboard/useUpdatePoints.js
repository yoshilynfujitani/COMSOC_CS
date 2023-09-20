import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePoints as updatePointsAPI } from "../../Services/apiGetUsers";
import toast from "react-hot-toast";

export function useUpdatePoints() {
  const queryClient = useQueryClient();
  const { mutate: updatePoints, isLoading: isUpdating } = useMutation({
    mutationFn: ({ userId, value }) => updatePointsAPI(userId, value),

    onSuccess: () => {
      toast.success("Successfully toasted!");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updatePoints };
}
