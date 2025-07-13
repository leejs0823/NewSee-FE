import { sendRequest } from "../request";
import { userInstance, newsInstance } from "../instance";
import type { BookmarkItemType, NewsListItemType } from "@/types/newsList";

interface BookMarkResult {
  userId: number;
  savedNewsId: number;
}

export const getBookmarkList = async (): Promise<BookmarkItemType[]> => {
  const response = await sendRequest<BookmarkItemType[]>(
    userInstance,
    "GET",
    "/saved-news"
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 저장 실패");
  }
  return response.result;
};

export const postBookMark = async (
  news: NewsListItemType
): Promise<BookmarkItemType> => {
  const response = await sendRequest<BookMarkResult>(
    newsInstance,
    "POST",
    `/${news.newsId}`
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 저장 실패");
  }

  const { savedNewsId } = response.result;
  return { ...news, savedNewsId };
};

export const deleteBookMark = async (savedNewsId: number): Promise<number> => {
  const response = await sendRequest<null>(
    newsInstance,
    "DELETE",
    `/${savedNewsId}`
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 삭제 실패");
  }

  return savedNewsId;
};
