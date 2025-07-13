import { sendRequest } from "../request";
import { newsInstance } from "../instance";
import type { NewsListItemType } from "@/types/newsList";

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
