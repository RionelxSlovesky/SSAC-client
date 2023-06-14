import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useUserInfo = () => {

  const {user} = useContext(AuthContext)

  const { refetch, data: userInfo = [] } = useQuery({
    queryKey: ["users", user._id],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/users/${user._id}`
      );
      return response.json();
    },
  });

  return [userInfo, refetch];
};

export default useUserInfo;
