import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { AuthSerivce } from "../services/AuthService";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: AuthSerivce.getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const loginMutation = useMutation({
    mutationFn: AuthSerivce.login,
    onSuccess: (data) => {
      queryClient.setQueryData(["currentUser"], data.user);
      router.navigate({ to: "/" });
    },
  });

  const registerMutation = useMutation({
    mutationFn: AuthSerivce.register,
    onSuccess: (data) => {
      queryClient.setQueryData(["currentUser"], data.user);
      router.navigate({ to: "/" });
    },
  });

  return {
    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    isLoginLoading: loginMutation.isPending,
    loginError: loginMutation.error,
    register: registerMutation.mutate,
    registerAsync: registerMutation.mutateAsync,
    isRegisterLoading: registerMutation.isPending,
    registerError: registerMutation.error,
    user: data?.user,
    error,
    isAuthencated: !!data?.user,
    isLoading,
  };
};
