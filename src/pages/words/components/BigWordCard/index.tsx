import * as S from "./index.styles";
import DeleteIcon from "@assets/icons/words/delete.svg?react";
import CalendarIcon from "@assets/icons/words/calendar.svg?react";
import NewsIcon from "@assets/icons/common/news.svg?react";
import { useTheme } from "styled-components";
import type { WordType } from "@/types/word";
import { useDeleteWord } from "@/api/words/hooks/useWords";
import { useModalStore } from "@/stores/modal";
import { formatDateToDot } from "@/utils/format";

interface BigWordCardProps {
  word: WordType;
  onClick: () => void;
}
export const BigWordCard = ({ word, onClick }: BigWordCardProps) => {
  const theme = useTheme();
  const { openModal, closeModal } = useModalStore();
  const { mutate: deleteWordMutate } = useDeleteWord();

  const handleDelete = () => {
    openModal("confirm", {
      title: `[${word.term}] 단어를 삭제하시겠습니까?`,
      message: `삭제하기는 되돌릴 수 없으며, 단어장에서 [${word.term}] 단어를 찾을 수 없습니다.`,
      onConfirm: () => {
        closeModal();
        deleteWordMutate(word.savedWordId);
      },
      onClose: () => {
        closeModal();
      },
    });
  };

  return (
    <S.Container onClick={onClick}>
      <S.TermContainer>
        <S.Term>{word.term}</S.Term>
        <S.Description>{word.description}</S.Description>
        <S.CaptionSection>
          <S.Caption>
            <CalendarIcon fill={theme.colors.bg.green} width={16} height={16} />
            <p>{formatDateToDot(word.date)}</p>
          </S.Caption>
          <S.Caption>
            <NewsIcon fill={theme.colors.bg.blue} width={16} height={16} />
            <p>{word.category}</p>
          </S.Caption>
        </S.CaptionSection>
      </S.TermContainer>
      <S.IconWrapper
        onClick={(e) => {
          e.stopPropagation();
          handleDelete();
        }}
      >
        <DeleteIcon />
      </S.IconWrapper>
    </S.Container>
  );
};
