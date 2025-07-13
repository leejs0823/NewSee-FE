import * as S from "./index.styles";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LevelTag } from "@/components/common/LevelTag";
import { BookmarkButton } from "@/components/common/BookmarkButton";
import TopBar from "@/components/common/TopBar";
import { useNewsStore } from "@/stores/news";
import { mockNewsData } from "./data/newsDetail";
import NewsDefaultImage from "@/assets/images/newsImage.png";
import { getTimeAgo } from "@utils/date";
import {
  KeywordsSection,
  SummarySection,
  NewsContentSection,
  NewsFooter,
} from "./components";
import { useModalStore } from "@/stores/modal";

export const NewsDetail = () => {
  const { newsId } = useParams();
  const id = Number(newsId);
  const navigate = useNavigate();

  const { news, setNews } = useNewsStore();
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const { openModal, closeModal } = useModalStore();

  useEffect(() => {
    if (!id) return;

    if (news?.newsId === id) return;

    setLoading(true);
    const foundNews = mockNewsData.find((item) => item.newsId === id);
    if (foundNews) {
      setNews(foundNews);
      setNotFound(false);
      setImageSrc(foundNews.imageUrl);
    } else {
      setNotFound(true);
    }
    setLoading(false);
  }, [id]);

  // 뉴스 없을 때 모달
  useEffect(() => {
    if (notFound) {
      openModal("check", {
        title: "Not Found",
        message: <>해당 뉴스 기사를 찾을 수 없습니다.</>,
        onClose: () => navigate(-1),
      });
    }
  }, [notFound]);

  // 로딩 시 로딩 모달
  useEffect(() => {
    if (loading) {
      openModal("loading");
    } else {
      closeModal();
    }
  }, [loading]);

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
            <S.ShareButton>공유하기</S.ShareButton>
          </S.LevelNShare>
        </S.HeadContentContainer>
        <S.Image
          src={imageSrc}
          alt={news.title}
          onError={() => setImageSrc(NewsDefaultImage)}
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
