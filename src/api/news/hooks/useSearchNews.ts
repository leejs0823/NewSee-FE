import { useMutation } from "@tanstack/react-query";
import { searchNews } from "../news";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";
import type { NewsListItemType } from "@/types/newsList";

export const useSearchNews = () => {
  return useMutation<NewsListItemType[], Error, string>({
    mutationFn: (keyword: string) =>
      withDelayedGlobalLoading(searchNews(keyword)),
  });
};
