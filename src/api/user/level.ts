import { sendRequest } from "../request";
import { userInstance } from "../instance";
import { LevelType } from "@/types/level";
import { LevelTypeToKorean } from "@/utils/level";

export const postSelectLevel = async (level: LevelType) => {
  const response = await sendRequest(userInstance, "POST", "/level", {
    level: LevelTypeToKorean[level],
  });

  if (!response.success) {
    throw new Error(response.message || "문해력 수준 선택 실패");
  }
  return response;
};

export const patchSelectLevel = async (level: LevelType) => {
  const response = await sendRequest(userInstance, "PATCH", "/level", {
    level: LevelTypeToKorean[level],
  });

  if (!response.success) {
    throw new Error(response.message || "문해력 수준 수정 실패");
  }
  return response;
};
