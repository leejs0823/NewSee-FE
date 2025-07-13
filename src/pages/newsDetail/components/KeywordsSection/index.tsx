import * as S from "./index.styles";
import { useNewsStore } from "@/stores/news";
import WordsIcon from "@assets/icons/common/words.svg?react";
import { useTheme } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WordCard } from "../index";
import { WordCardModal } from "@/components/common/Modal/WordCardModal";

export const KeywordsSection = () => {
  const navigate = useNavigate();
  const news = useNewsStore((state) => state.news);
  const theme = useTheme();

  const [showWordModal, setShowWordModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleGotoWords = () => {
    navigate("/words");
  };

  const handleWordClick = (index: number) => {
    setSelectedIndex(index);
    setShowWordModal(true);
  };
  return (
    <S.Container>
      <S.TitleNInfoContainer>
        <S.TitleContainer>
          <S.Title>
            <WordsIcon fill={theme.colors.bg.green} />
            <S.TitleText>주요 키워드</S.TitleText>
          </S.Title>
          <S.GotoWordsButton onClick={handleGotoWords}>
            내 단어장 바로가기
          </S.GotoWordsButton>
        </S.TitleContainer>
        <S.InfoText>
          기사 원문에 포함된 주요 단어들에 대해 알아봅시다.
        </S.InfoText>
      </S.TitleNInfoContainer>
      <S.WordsContainer>
        {news?.keywords.map((keyword, index) => (
          <WordCard
            key={index}
            keyword={keyword}
            onClick={() => handleWordClick(index)}
          />
        ))}
      </S.WordsContainer>
      {showWordModal && news?.keywords && (
        <WordCardModal
          words={news.keywords.map((keyword) => ({
            ...keyword,
            category: news.category,
          }))}
          initialIndex={selectedIndex}
          onClose={() => setShowWordModal(false)}
        />
      )}
    </S.Container>
  );
};
