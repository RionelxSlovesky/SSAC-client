import { useQuery } from "@tanstack/react-query";


const useUsers = () => {

  const { refetch, data: usersInfo = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        'https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/users'
      );
      return response.json();
    },
  });

  return [usersInfo, refetch];
};

export default useUsers;
