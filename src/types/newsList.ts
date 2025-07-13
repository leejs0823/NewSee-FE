import type { NewsCategoryType } from "./category";

export type NewsListItemType = {
  newsId: number;
  title: string;
  category: NewsCategoryType;
  transformedContent: string;
  source: string;
  time: Date;
  imageUrl: string;
  isBookmarked?: boolean;
};

export type BookmarkItemType = NewsListItemType & { savedNewsId: number };
