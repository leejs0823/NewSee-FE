import { useQuery } from "@tanstack/react-query";
import { getNewsList } from "../news";
import { useNewsListStore } from "@/stores/newsList";
import type { NewsListItemType } from "@/types/newsList";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useNewsList = () => {
  const setNewsList = useNewsListStore((state) => state.setNewsList);

  return useQuery<NewsListItemType[], Error>({
    queryKey: ["newsList"],
    queryFn: async () => {
      try {
        const data = await withDelayedGlobalLoading(getNewsList());
        setNewsList(data);
        return data;
      } catch (error) {
        setNewsList([]);
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    retry: 1,
  });
};
