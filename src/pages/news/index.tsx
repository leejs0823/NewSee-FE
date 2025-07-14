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

export const News = () => {
  const { fetchBookmarks } = useBookmark();

  const [selectedTag, setSelectedTag] = useState("전체");
  useEffect(() => {
    fetchBookmarks();
  }, []);
  useNewsList();

  const newsList = useNewsListStore((state) => state.newsList);

  const filteredNews: NewsListItemType[] =
    selectedTag === "전체"
      ? newsList
      : newsList.filter((item) => item.category === selectedTag);

  return (
    <S.Container>
      <S.HeaderSection>
        <S.HeadTitleContainer>
          <S.HeadText>오늘의 뉴스</S.HeadText>
          <LevelTag />
        </S.HeadTitleContainer>
        <SearchBar
          placeholder="뉴스를 검색하세요"
          onSearch={(keyword) => console.log("뉴스 검색:", keyword)}
        />
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
          filteredNews.map((newsItem) => <NewsItem news={newsItem} />)
        )}
      </S.BodySection>
    </S.Container>
  );
};
