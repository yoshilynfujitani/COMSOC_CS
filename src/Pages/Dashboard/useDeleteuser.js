import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserAPI } from "../../Services/apiGetUsers";
import toast from "react-hot-toast";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { mutate: deleteUser, isLoading: isDeleting } = useMutation({
    mutationFn: deleteUserAPI,

    onSuccess: () => {
      toast.success("User deleted Succesfully");
      queryClient.invalidateQueries(["students"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteUser, isDeleting };
}
