import { useQuery } from "@tanstack/react-query";
import { getNewsDetail } from "../news";
import { useNewsStore } from "@/stores/news";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useNewsDetail = (
  newsId: number,
  setNotFound?: (v: boolean) => void
) => {
  const setNews = useNewsStore((state) => state.setNews);

  return useQuery({
    queryKey: ["newsDetail", newsId],
    queryFn: async () => {
      try {
        const data = await withDelayedGlobalLoading(getNewsDetail(newsId));
        setNews(data);
        return data;
      } catch (error) {
        if (setNotFound) setNotFound(true);
        throw error;
      }
    },
    enabled: !!newsId,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    retry: 1,
  });
};
