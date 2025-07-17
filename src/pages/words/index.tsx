import * as S from "./index.styles";
import { useWordsStore } from "@/stores/words";
import { BigWordCard } from "./components";
import { useMyWords } from "@/api/words/hooks/useWords";
import { SearchBar } from "@/components/common/SearchBar";
import WordsIcon from "@assets/icons/common/words.svg?react";
import { useTheme } from "styled-components";
import { NEWS_CATEGORY_TAGS } from "@/types/category";
import { useState } from "react";
import { CategoryTag } from "@/components/common/CategoryTag";
import { useUserStore } from "@/stores/user";
import { LevelTypeToKorean } from "@/utils/level";
import { WordCardModal } from "@/components/common/Modal/WordCardModal";
import { useSearchWords } from "@/api/words/hooks/useSearchWords";
import type { WordType } from "@/types/word";
import useSearchHandler from "@/hooks/common/useSearchHandler";

export const Words = () => {
  const theme = useTheme();
  const { mutateAsync: searchWordsMutate } = useSearchWords();

  const [showWordModal, setShowWordModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState("전체");
  const { isSearching, handleSearch, handleReset, searchResult } =
    useSearchHandler<WordType>({ mutateFn: searchWordsMutate });

  useMyWords();

  const words = useWordsStore((state) => state.words);
  const wordCount = useWordsStore((state) => state.wordCount);
  const level = useUserStore((state) => state.level);

  const baseList = isSearching ? searchResult || [] : words;

  const filteredWords: WordType[] =
    selectedTag === "전체"
      ? baseList
      : baseList.filter((item) => item.category === selectedTag);

  const handleWordClick = (index: number) => {
    setSelectedIndex(index);
    setShowWordModal(true);
  };

  return (
    <S.Container>
      <S.HeadContainer>
        <S.Header>
          <WordsIcon fill={theme.colors.bg.green} width={24} height={24} />
          <h1>내 단어장</h1>
        </S.Header>
        <S.InfoContainer>
          <S.InfoBox>
            <S.ColorText>{LevelTypeToKorean[level]}급</S.ColorText>
            <S.Caption>나의 레벨</S.Caption>
          </S.InfoBox>
          <S.InfoBox>
            <S.ColorText>{wordCount}</S.ColorText>
            <S.Caption>총 단어</S.Caption>
          </S.InfoBox>
        </S.InfoContainer>
        <SearchBar
          placeholder="단어를 검색하세요"
          onSearch={handleSearch}
          onReset={handleReset}
        />
        {isSearching && (
          <S.SearchResultText>
            총 {baseList.length}개의 단어가 검색되었습니다.
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
      </S.HeadContainer>
      <S.WordCardList>
        {wordCount === 0 ? (
          <S.EmptyMessage>저장된 단어가 없습니다.</S.EmptyMessage>
        ) : filteredWords.length === 0 ? (
          <S.EmptyMessage>조건에 맞는 단어가 없습니다.</S.EmptyMessage>
        ) : (
          filteredWords.map((word, index) => (
            <BigWordCard
              key={word.savedWordId}
              word={word}
              onClick={() => handleWordClick(index)}
            />
          ))
        )}
      </S.WordCardList>
      {showWordModal && (
        <WordCardModal
          words={filteredWords}
          initialIndex={selectedIndex}
          onClose={() => setShowWordModal(false)}
        />
      )}
    </S.Container>
  );
};
