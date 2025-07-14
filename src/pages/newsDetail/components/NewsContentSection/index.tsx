import * as S from "./index.styles";
import { useRef, useState, useEffect } from "react";
import { useNewsStore } from "@/stores/news";
import NewsIcon from "@assets/icons/common/news.svg?react";
import { useTheme } from "styled-components";
import { TTSPlayModal } from "../TTSPlayModal";

export const NewsContentSection = () => {
  const theme = useTheme();
  const news = useNewsStore((state) => state.news);
  const [show, setShow] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ top: 0, right: 0 });

  const handleClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + window.scrollY + 8, right: rect.right });
    }
    setShow(true);
  };

  // 스크롤 막기
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>
          <NewsIcon fill={theme.colors.bg.blue} width={21} height={21} />
          <S.TitleText>기사 내용 읽기</S.TitleText>
        </S.Title>
        <S.ReadButton onClick={handleClick}>읽어주기</S.ReadButton>
        {show && (
          <TTSPlayModal
            content={news?.transformedContent || ""}
            top={position.top}
            right={position.right}
            onClose={() => setShow(false)}
          />
        )}
      </S.TitleContainer>
      <S.ContentContainer>{news?.transformedContent}</S.ContentContainer>
    </S.Container>
  );
};
