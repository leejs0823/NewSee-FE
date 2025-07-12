import * as S from "./index.styles";
import type { KeywordType } from "@/types/newsDetail";
import { useAddWord } from "@/api/words/hooks/useWords";
import { useModal } from "@/hooks/common/useModal";

interface WordCardProps {
  keyword: KeywordType;
}

export const WordCard = ({ keyword }: WordCardProps) => {
  return (
    <S.Container>
      <S.WordContainer>
        <S.Term>{keyword.term}</S.Term>
        <S.Description>{keyword.description}</S.Description>
      </S.WordContainer>
      <AddButton wordId={keyword.wordId} />
    </S.Container>
  );
};

const AddButton = ({ wordId }: { wordId: number }) => {
  const { mutate: addWord } = useAddWord();
  const { openModal } = useModal();

  const handleAddWord = () => {
    addWord(wordId, {
      onSuccess: () => {
        openModal("check", {
          title: "단어 추가 완료",
          message: <>단어장이 성공적으로 저장되었습니다.</>,
          onClose: () => {},
        });
      },
      onError: () => {
        openModal("check", {
          title: "오류 발생",
          message: <>단어 추가에 실패했어요. 다시 시도해 주세요.</>,
          onClose: () => {},
        });
      },
    });
  };
  return <S.WordAddButton onClick={handleAddWord}>단어장 추가</S.WordAddButton>;
};
