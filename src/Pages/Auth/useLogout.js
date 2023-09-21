import { useMutation } from "@tanstack/react-query";
import { logout as logoutAPI } from "../../Services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,

    onSuccess: () => {
      toast.success("Account Logged Out!");
      navigate("/login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { logout, isLoading };
}
