import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await fetch("https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/classes");
      return response.json();
    },
  });

  return [classes, refetch];
};

export default useClasses;
