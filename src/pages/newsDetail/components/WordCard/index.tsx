import * as S from "./index.styles";
import type { KeywordType } from "@/types/newsDetail";
import { useAddWord } from "@/api/words/hooks/useWords";
import { useModal } from "@/hooks/common/useModal";
import { useNavigate } from "react-router-dom";

interface WordCardProps {
  keyword: KeywordType;
  onClick?: () => void;
}

export const WordCard = ({ keyword, onClick }: WordCardProps) => {
  return (
    <>
      <S.Container onClick={onClick}>
        <S.WordContainer>
          <S.Term>{keyword.term}</S.Term>
          <S.Description>{keyword.description}</S.Description>
        </S.WordContainer>
        <AddButton wordId={keyword.wordId} />
      </S.Container>
    </>
  );
};

const AddButton = ({ wordId }: { wordId: number }) => {
  const { mutate: addWord } = useAddWord();
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleAddWord = () => {
    addWord(wordId, {
      onSuccess: () => {
        openModal("check", {
          title: "단어 추가 완료",
          message: <>단어장이 성공적으로 저장되었습니다.</>,
          onClose: () => {},
        });
      },
      onError: (error: any) => {
        const status = error?.response?.status;

        if (status === 403) {
          openModal("confirm", {
            title: "로그인이 필요한 서비스입니다.",
            message: "로그인 하시겠습니까?",
            confirmText: "로그인",
            cancelText: "돌아가기",
            onConfirm: () => {
              closeModal();
              navigate("/login");
            },
            onClose: () => {
              closeModal();
              navigate("/");
            },
          });
        } else {
          openModal("check", {
            title: "오류 발생",
            message: <>단어 추가에 실패했어요. 다시 시도해 주세요.</>,
            onClose: closeModal,
          });
        }
      },
    });
  };
  return (
    <S.WordAddButton
      onClick={(e) => {
        e.stopPropagation();
        handleAddWord();
      }}
    >
      단어장 추가
    </S.WordAddButton>
  );
};
