import { useState } from "react";
import { formatDateToDot } from "@/utils/format";
import type { KeywordType } from "@/types/newsDetail";
import * as S from "./index.styles";
import ExitIcon from "@assets/icons/common/exit.svg?react";
import ArrowIcon from "@assets/icons/mypage/rightArrow.svg?react";

interface WordCardModalProps {
  words: KeywordType[];
  onClose: () => void;
  initialIndex: number;
}

export const WordCardModal = ({
  words,
  onClose,
  initialIndex,
}: WordCardModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const word = words[currentIndex];

  return (
    <S.Overlay>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>
          <ExitIcon width={30} height={30} />
        </S.CloseButton>
        <S.Title>[{word.term}]</S.Title>
        <S.Description>{word.description}</S.Description>
        <S.InfoRow>
          {word.date && (
            <>
              <S.Tag>날짜</S.Tag>
              <S.Content> {formatDateToDot(word.date)}</S.Content>
            </>
          )}
          <S.Tag>카테고리</S.Tag>
          <S.Content>{word.category}</S.Content>
        </S.InfoRow>
        <S.Arrows>
          {currentIndex > 0 && (
            <S.LeftArrowButton onClick={() => setCurrentIndex((i) => i - 1)}>
              <ArrowIcon
                width={20}
                height={20}
                style={{ transform: "rotate(180deg)" }}
              />
            </S.LeftArrowButton>
          )}
          {currentIndex < words.length - 1 && (
            <S.RightArrowButton onClick={() => setCurrentIndex((i) => i + 1)}>
              <ArrowIcon width={20} height={20} />
            </S.RightArrowButton>
          )}
        </S.Arrows>
      </S.ModalContent>
    </S.Overlay>
  );
};
