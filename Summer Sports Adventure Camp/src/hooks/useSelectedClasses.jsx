import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useSelectedClasses = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/selectedClasses?email=${user?.email}`
      );
      return response.json();
    },
  });

  return [selectedClasses, refetch];
};

export default useSelectedClasses;
