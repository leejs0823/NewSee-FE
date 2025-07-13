import { sendRequest } from "../request";
import { newsInstance } from "../instance";
import type { NewsListItemType } from "@/types/newsList";
import type { NewsDetailType } from "@/types/newsDetail";

export const getNewsList = async (): Promise<NewsListItemType[]> => {
  const response = await sendRequest<NewsListItemType[]>(
    newsInstance,
    "GET",
    ""
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 저장 실패");
  }
  return response.result;
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
  return response.result;
};
