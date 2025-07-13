import { create } from "zustand";
import type { BookmarkItemType } from "@/types/newsList";
import { immer } from "zustand/middleware/immer";

type BookmarkStore = {
  bookmarkItems: BookmarkItemType[];
  isBookmarked: (newsId: number) => boolean;
  getSaveNewsId: (newsId: number) => number | undefined;
  addBookmark: (item: BookmarkItemType) => void;
  removeBookmark: (newsId: number) => void;
  setBookmarks: (items: BookmarkItemType[]) => void;
  reset: () => void;
};

export const useBookmarkStore = create<BookmarkStore>()(
  immer((set, get) => ({
    bookmarkItems: [],
    isBookmarked: (newsId) =>
      get().bookmarkItems.some((item) => item.newsId === newsId),
    getSaveNewsId: (newsId) =>
      get().bookmarkItems.find((item) => item.newsId === newsId)?.savedNewsId,
    addBookmark: (item) =>
      set((state) => {
        state.bookmarkItems.push(item);
      }),
    removeBookmark: (savedNewsId) =>
      set((state) => {
        const index = state.bookmarkItems.findIndex(
          (item) => item.savedNewsId === savedNewsId
        );
        if (index !== -1) {
          state.bookmarkItems.splice(index, 1);
        }
      }),
    setBookmarks: (items) => set({ bookmarkItems: items }),
    reset: () => set({ bookmarkItems: [] }),
  }))
);
