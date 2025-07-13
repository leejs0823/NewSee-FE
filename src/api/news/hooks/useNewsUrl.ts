import { useMutation } from "@tanstack/react-query";
import { postNewsUrl } from "../news";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useNewsUrl = () => {
  return useMutation({
    mutationFn: async (url: string): Promise<number> => {
      const newsId = await withDelayedGlobalLoading(postNewsUrl(url));
      return newsId;
    },
  });
};
