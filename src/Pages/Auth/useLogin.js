import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../../Services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { login, isLoading };
  qsqsqs;
}
