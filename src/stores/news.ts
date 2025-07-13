import { create } from "zustand";
import type { NewsDetailType } from "../types/newsDetail";

interface NewsState {
  news: NewsDetailType | null;
  setNews: (items: NewsDetailType | null) => void;
}

export const useNewsStore = create<NewsState>((set) => ({
  news: null,
  setNews: (items) => set({ news: items }),
}));
