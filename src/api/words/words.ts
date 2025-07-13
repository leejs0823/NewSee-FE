import { sendRequest } from "../request";
import { wordsInstance } from "../instance";
import type { WordType } from "@/types/word";
import { mapToNewsCategory } from "@/utils/category";

interface WordsResult {
  totalCount: number;
  words: WordType[];
}

interface DeleteWordResult {
  deletedSavedWordId: number;
}

export const getMyWords = async (): Promise<WordsResult> => {
  const response = await sendRequest<WordsResult>(wordsInstance, "GET", "");

  if (!response.success) {
    throw new Error(response.message || "단어장 불러오기 실패");
  }

  const mappedWords = response.result.words.map((word) => ({
    ...word,
    category: mapToNewsCategory(word.category),
  }));

  return {
    ...response.result,
    words: mappedWords,
  };
};

export const postAddWord = async (wordId: number) => {
  const response = await sendRequest<WordType>(
    wordsInstance,
    "POST",
    `/${wordId}`
  );

  if (!response.success) {
    throw new Error(response.message || "단어장 저장 실패");
  }

  return response.result;
};

export const deleteWord = async (savedWordId: number) => {
  const response = await sendRequest<DeleteWordResult>(
    wordsInstance,
    "DELETE",
    `/${savedWordId}`
  );

  if (!response.success) {
    throw new Error(response.message || "단어장 저장 실패");
  }

  return response.result;
};
