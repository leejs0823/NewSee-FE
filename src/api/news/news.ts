import { sendRequest } from "../request";
import { newsInstance } from "../instance";
import type { NewsListItemType } from "@/types/newsList";
import type { NewsDetailType } from "@/types/newsDetail";
import type { NewsCategoryType } from "@/types/category";
import { mapToNewsCategory } from "@/utils/category";

interface NewsUrlkResult {
  title: string;
  content: string;
  category: NewsCategoryType;
  source: string;
  time: Date;
  newsId: number;
}

export const getNewsList = async (): Promise<NewsListItemType[]> => {
  const response = await sendRequest<NewsListItemType[]>(
    newsInstance,
    "GET",
    ""
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 저장 실패");
  }

  return response.result.map((item) => ({
    ...item,
    category: mapToNewsCategory(item.category),
  }));
};

export const getNewsDetail = async (
  newsId: number
): Promise<NewsDetailType> => {
  const response = await sendRequest<NewsDetailType>(
    newsInstance,
    "GET",
    `/${newsId}`
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 디테일 불러오기 실패");
  }

  response.result.category = mapToNewsCategory(response.result.category);

  return response.result;
};

export const postNewsUrl = async (url: string): Promise<number> => {
  const response = await sendRequest<NewsUrlkResult>(
    newsInstance,
    "POST",
    `/url`,
    {
      url,
    }
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 디테일 불러오기 실패");
  }

  response.result.category = mapToNewsCategory(response.result.category);

  return response.result.newsId;
};
