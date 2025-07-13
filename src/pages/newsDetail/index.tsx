import * as S from "./index.styles";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LevelTag } from "@/components/common/LevelTag";
import { BookmarkButton } from "@/components/common/BookmarkButton";
import TopBar from "@/components/common/TopBar";
import { useNewsStore } from "@/stores/news";
import { useNewsDetail } from "@/api/news/hooks/useNewsDetail";
import NewsDefaultImage from "@/assets/images/newsImage.png";
import { getTimeAgo } from "@utils/date";
import {
  KeywordsSection,
  SummarySection,
  NewsContentSection,
  NewsFooter,
  ShareButton,
} from "./components";
import { useModalStore } from "@/stores/modal";

export const NewsDetail = () => {
  const { newsId } = useParams();
  const id = Number(newsId);
  const navigate = useNavigate();
  const news = useNewsStore((state) => state.news);
  const [notFound, setNotFound] = useState(false);
  useNewsDetail(id, setNotFound);

  const [imageSrc, setImageSrc] = useState(NewsDefaultImage);

  useEffect(() => {
    if (news?.imageUrl) {
      setImageSrc(news.imageUrl);
    } else {
      setImageSrc(NewsDefaultImage);
    }
  }, [news]);

  const { openModal, closeModal } = useModalStore();

  useEffect(() => {
    if (notFound) {
      openModal("check", {
        title: "Not Found",
        message: <>해당 뉴스 기사를 찾을 수 없습니다.</>,
        onClose: () => {
          navigate(-1);
          closeModal();
        },
      });
    }
  }, [notFound]);

  const newsExists = news && news.newsId === id;

  if (!newsExists) return null;

  return (
    <S.Container>
      <TopBar title="뉴스 상세" />
      <S.HeadContainer>
        <S.HeadContentContainer>
          <S.NewsInfoContainer>
            <S.NewsInfo>
              <p>{news.category}</p>
              <p>{news.source}</p>
              <p>{getTimeAgo(news.time)}</p>
            </S.NewsInfo>
            <BookmarkButton news={news} />
          </S.NewsInfoContainer>
          <S.Title>{news.title}</S.Title>
          <S.LevelNShare>
            <LevelTag />
            <ShareButton />
          </S.LevelNShare>
        </S.HeadContentContainer>
        <S.Image
          src={imageSrc}
          alt={news.title}
          onError={() => {
            if (imageSrc !== NewsDefaultImage) {
              setImageSrc(NewsDefaultImage);
            }
          }}
        />
      </S.HeadContainer>
      <S.Line />
      <NewsContentSection />
      <S.Line />
      <KeywordsSection />
      <S.Line />
      <SummarySection />
      <S.Line />
      <NewsFooter />
    </S.Container>
  );
};
