import { useQuery } from "@tanstack/react-query";

const useUsersByRole = (role) => {

  const { refetch, data: usersByRole = [] } = useQuery({
    queryKey: ["usersRole", role],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/usersRole/${role}`
      );
      return response.json();
    },
  });

  return [usersByRole, refetch];
};

export default useUsersByRole;
