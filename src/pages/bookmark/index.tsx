import * as S from "./index.styles";
import { NewsItem } from "../news/components";
import { CategoryTag } from "@/components/common/CategoryTag";
import { NEWS_CATEGORY_TAGS } from "@/types/category";
import { useBookmarkStore } from "@/stores/bookmark";
import { useState, useEffect } from "react";
import { useBookmark } from "@/api/bookmark/hooks/useBookmark";
import TopBar from "@components/common/TopBar";
import type { NewsListItemType } from "@/types/newsList";
export const Bookmark = () => {
  const [selectedTag, setSelectedTag] = useState("전체");
  const { fetchBookmarks } = useBookmark();

  const bookmarkItems = useBookmarkStore((state) => state.bookmarkItems);

  const filteredNews: NewsListItemType[] =
    selectedTag === "전체"
      ? bookmarkItems
      : bookmarkItems.filter((item) => item.category === selectedTag);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <S.Container>
      <TopBar title="저장한 뉴스" />
      <S.ContentArea>
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
      </S.ContentArea>
      <S.BodySection>
        {filteredNews.length === 0 ? (
          <div>저장한 뉴스가 없습니다.</div>
        ) : (
          filteredNews.map((newsItem) => (
            <NewsItem key={newsItem.newsId} news={newsItem} />
          ))
        )}
      </S.BodySection>
    </S.Container>
  );
};
