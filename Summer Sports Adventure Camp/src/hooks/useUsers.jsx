import { useQuery } from "@tanstack/react-query";


const useUsers = () => {

  const { refetch, data: usersInfo = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        'http://localhost:5000/users'
      );
      return response.json();
    },
  });

  return [usersInfo, refetch];
};

export default useUsers;
