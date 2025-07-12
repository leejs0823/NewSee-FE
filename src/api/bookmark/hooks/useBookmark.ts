import { useMutation } from "@tanstack/react-query";
import { getBookmarkList } from "../bookmark";
import { useBookmarkStore } from "@/stores/bookmark";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useBookmark = () => {
  const setBookmarkList = useBookmarkStore((state) => state.setBookmarks);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () => withDelayedGlobalLoading(getBookmarkList()),
    onSuccess: (data) => {
      setBookmarkList(data);
    },
    onError: (error) => {
      console.error("북마크 불러오기 실패", error);
    },
  });

  return {
    fetchBookmarks: mutate,
    isPending,
    isError,
  };
};
