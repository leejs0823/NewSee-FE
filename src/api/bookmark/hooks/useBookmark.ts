import { useMutation } from "@tanstack/react-query";
import { getBookmarkList, postBookMark, deleteBookMark } from "../bookmark";
import { useBookmarkStore } from "@/stores/bookmark";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";
import type { BookmarkItemType, NewsListItemType } from "@/types/newsList";

export const useBookmark = () => {
  const { addBookmark, removeBookmark, getSaveNewsId, setBookmarks } =
    useBookmarkStore();
  const bookmarkItems = useBookmarkStore((state) => state.bookmarkItems);

  const { mutate: fetchBookmarks } = useMutation({
    mutationFn: () => withDelayedGlobalLoading(getBookmarkList()),
    onSuccess: (bookmarkList: BookmarkItemType[]) => {
      setBookmarks(bookmarkList);
    },
  });

  const { mutate: saveBookmark } = useMutation({
    mutationFn: (news: NewsListItemType) =>
      withDelayedGlobalLoading(postBookMark(news)),
    onSuccess: (result: BookmarkItemType) => {
      addBookmark(result);
    },
  });

  const { mutate: deleteBookmark } = useMutation({
    mutationFn: (savedNewsId: number) =>
      withDelayedGlobalLoading(deleteBookMark(savedNewsId)),
    onSuccess: (savedNewsId: number) => {
      removeBookmark(savedNewsId);
    },
  });

  const toggle = (news: NewsListItemType) => {
    const isSaved = bookmarkItems.some((item) => item.newsId === news.newsId);
    if (isSaved) {
      const savedNewsId = getSaveNewsId(news.newsId);
      if (savedNewsId !== undefined) {
        deleteBookmark(savedNewsId);
      }
    } else {
      saveBookmark(news);
    }
  };
  return {
    toggleBookmark: toggle,
    fetchBookmarks,
  };
};
