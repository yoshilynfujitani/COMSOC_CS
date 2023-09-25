import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../Services/apiAuth";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const { mutate: updatePassword, isLoading: isChangingPassword } = useMutation(
    {
      mutationFn: updateUser,
      onSuccess: () => {
        toast.success("Succesfully changed password");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    }
  );
  return { updatePassword, isChangingPassword };
}
