import * as S from "./index.styles";
import { LevelTag } from "@/components/common/LevelTag";
import { SearchBar } from "@/components/common/SearchBar";
import { CategoryTag } from "@/components/common/CategoryTag";
import { NEWS_CATEGORY_TAGS } from "@/types/category";
import { useState, useEffect } from "react";
import type { NewsListItemType } from "@/types/newsList";
import { NewsItem } from "./components";
import { useNewsListStore } from "@/stores/newsList";
import { useNewsList } from "@/api/news/hooks/useNewsList";
import { useBookmark } from "@/api/bookmark/hooks/useBookmark";
import { useSearchNews } from "@/api/news/hooks/useSearchNews";
import useSearchHandler from "@/hooks/common/useSearchHandler";

export const News = () => {
  const { fetchBookmarks } = useBookmark();
  const { mutateAsync: searchNewsMutate } = useSearchNews();
  const { isSearching, handleSearch, handleReset, searchResult } =
    useSearchHandler<NewsListItemType>({ mutateFn: searchNewsMutate });

  const [selectedTag, setSelectedTag] = useState("전체");

  useNewsList();

  const newsList = useNewsListStore((state) => state.newsList);
  const baseList = isSearching ? searchResult || [] : newsList;

  const filteredNews: NewsListItemType[] =
    selectedTag === "전체"
      ? baseList
      : baseList.filter((item) => item.category === selectedTag);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  // useEffect(() => {
  //   handleReset();
  // }, [selectedTag]);

  return (
    <S.Container>
      <S.HeaderSection>
        <S.HeadTitleContainer>
          <S.HeadText>오늘의 뉴스</S.HeadText>
          <LevelTag />
        </S.HeadTitleContainer>
        <SearchBar
          placeholder="뉴스를 검색하세요"
          onSearch={handleSearch}
          onReset={handleReset}
        />
        {isSearching && (
          <S.SearchResultText>
            총 {baseList.length}건의 뉴스가 검색되었습니다.
          </S.SearchResultText>
        )}
        <S.CategoryList>
          {["전체", ...NEWS_CATEGORY_TAGS].map((tag, index) => (
            <CategoryTag
              key={index}
              tagTitle={tag}
              isActive={selectedTag === tag}
              onSelectTag={setSelectedTag}
            />
          ))}
        </S.CategoryList>
      </S.HeaderSection>

      <S.BodySection>
        {filteredNews.length === 0 ? (
          <S.EmptyMessage>해당 카테고리의 뉴스가 없습니다.</S.EmptyMessage>
        ) : (
          filteredNews.map((newsItem) => (
            <NewsItem key={newsItem.newsId} news={newsItem} />
          ))
        )}
      </S.BodySection>
    </S.Container>
  );
};
