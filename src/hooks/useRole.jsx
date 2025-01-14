import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "@/context/AuthProvider";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BackendURL}/api/auth/role/${user?.email}`
      );
      return data;
    },
  });
  return [role, isLoading];
};

export default useRole;
