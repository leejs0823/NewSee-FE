import { useBookmarkStore } from "@/stores/bookmark";
import BookMarkIcon from "@assets/icons/news/bookmark.svg?react";
import BookMarkFilledIcon from "@assets/icons/news/bookmarkFill.svg?react";
import { useBookmark } from "@/api/bookmark/hooks/useBookmark";
import type { NewsListItemType } from "@/types/newsList";
import { useUserStore } from "@/stores/user";

interface BookmarkButtonProps {
  news: NewsListItemType;
  onClick?: (e: React.MouseEvent) => void;
}

export const BookmarkButton = ({ news, onClick }: BookmarkButtonProps) => {
  const { toggleBookmark } = useBookmark();
  const accessToken = useUserStore((state) => state.accessToken);

  const bookmarkItems = useBookmarkStore((state) => state.bookmarkItems);
  const isBookmarked = bookmarkItems.some(
    (item) => item.newsId === news.newsId
  );

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(news);
    onClick?.(e);
  };

  if (!accessToken) return null;

  return (
    <button onClick={handleClick} aria-label="북마크 토글">
      {isBookmarked ? (
        <BookMarkFilledIcon width={18} height={18} />
      ) : (
        <BookMarkIcon width={18} height={18} />
      )}
    </button>
  );
};
