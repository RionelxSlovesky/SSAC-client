import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useEnrolledClasses = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: enrolledClasses = [] } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/enrolledClasses?email=${user?.email}`
      );
      return response.json();
    },
  });

  return [enrolledClasses, refetch];
};

export default useEnrolledClasses;