import { useMutation } from "@tanstack/react-query";
import { searchWords } from "../words";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useSearchWords = () => {
  return useMutation({
    mutationFn: (keyword: string) =>
      withDelayedGlobalLoading(searchWords(keyword)),
  });
};
