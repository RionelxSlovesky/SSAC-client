import { useQuery } from "@tanstack/react-query";

const useUsersByRole = (role) => {

  const { refetch, data: usersByRole = [] } = useQuery({
    queryKey: ["usersRole", role],
    queryFn: async () => {
      const response = await fetch(
        `https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/usersRole/${role}`
      );
      return response.json();
    },
  });

  return [usersByRole, refetch];
};

export default useUsersByRole;
