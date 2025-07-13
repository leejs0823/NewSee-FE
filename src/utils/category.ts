import type { NewsCategoryType } from "@/types/category";

export const mapToNewsCategory = (input: string): NewsCategoryType => {
  if (input.includes("언론사별")) return "기타";
  const validCategories: NewsCategoryType[] = [
    "정치",
    "경제",
    "사회",
    "생활/문화",
    "IT/과학",
    "세계",
    "기타",
  ];

  return validCategories.includes(input as NewsCategoryType)
    ? (input as NewsCategoryType)
    : "기타";
};
