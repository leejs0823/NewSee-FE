import * as S from "./index.styles";
import { useState } from "react";
import LevelOptionCard from "../../LevelOptionCard";
import CommonButton from "../../CommonButton";
import { LevelType } from "@/types/level";
import LevelIcon from "@assets/icons/common/level.svg?react";
import { useTheme } from "styled-components";
import { usePostLevel } from "@/api/user/hooks/useLevel";

interface LevelSelectModalProps {
  closeModal: () => void;
}

export const LevelSelectModal = ({ closeModal }: LevelSelectModalProps) => {
  const [selectedLevel, setSelectedLevel] = useState<LevelType>(LevelType.HIGH);
  const { mutate: selectLevel } = usePostLevel(); // 레벨 설정 API 훅
  const theme = useTheme();

  const handleSelect = (level: LevelType) => {
    setSelectedLevel(level);
  };

  const handleSubmit = async () => {
    if (!selectedLevel) return;

    selectLevel(selectedLevel, {
      onSuccess: () => {
        closeModal();
      },
      onError: (error) => {
        console.error("레벨 저장 실패", error);
      },
    });
  };

  return (
    <S.Container>
      <S.HeadContainer>
        <S.Title>환영합니다.</S.Title>
        <S.Description>
          뉴씨의 더욱 다양한 기능을 이용해보세요!
          <br />
          레벨을 선택하지 않으면 자동으로 "중급"으로 선택됩니다.
        </S.Description>
      </S.HeadContainer>

      <S.Line />
      <S.SelectContainer>
        <S.SelectHeader>
          <S.SelectTitleContainer>
            <LevelIcon fill={theme.colors.bg.blue} />
            <S.SelectTitle>문해력 레벨 설정하기</S.SelectTitle>
          </S.SelectTitleContainer>

          <S.SelectContent>
            내 수준에 맞는 뉴스 난이도를 선택해주세요!
          </S.SelectContent>
        </S.SelectHeader>
        <S.CardList>
          {Object.values(LevelType).map((level) => (
            <LevelOptionCard
              key={level}
              level={level}
              selected={selectedLevel === level}
              onClick={handleSelect}
            />
          ))}
        </S.CardList>
      </S.SelectContainer>
      <S.ButtonContainer>
        <CommonButton
          title="내 레벨 선택하기"
          variant="blue"
          onClick={handleSubmit}
          disabled={!selectedLevel}
        />

        <S.CloseButton onClick={closeModal}>다음에 선택하기</S.CloseButton>
      </S.ButtonContainer>
    </S.Container>
  );
};
