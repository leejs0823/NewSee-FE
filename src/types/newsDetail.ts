import type { LevelType } from "./level";
import type { NewsCategoryType } from "./category";

export type NewsDetailType = {
  newsId: number;
  title: string;
  category: NewsCategoryType;
  source: string;
  time: Date;
  imageUrl: string;
  url: string;
  userLevel: LevelType;
  transformedContent: string;
  summary: string;
  keywords: KeywordType[];
  isBookmarked?: boolean;
};

export type KeywordType = {
  wordId: number;
  term: string;
  description: string;
  category?: NewsCategoryType;
  date?: Date;
};
