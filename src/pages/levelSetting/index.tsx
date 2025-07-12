import * as S from "./index.styles";
import { useState } from "react";
import TopBar from "@/components/common/TopBar";
import CommonButton from "@/components/common/CommonButton";
import LevelOptionCard from "@components/common/LevelOptionCard";
import { LevelType } from "@/types/level";
import { usePatchLevel } from "@/api/user/hooks/useLevel";
import { useModal } from "@/hooks/common/useModal";
import { useUserStore } from "@/stores/user";
import { LevelTypeToKorean } from "@/utils/level";
import { LevelTypeToMainColorKey } from "@/utils/level";
import { useTheme } from "styled-components";

export const LevelSetting = () => {
  const theme = useTheme();
  const level = useUserStore.getState().level;
  const [selectedLevel, setSelectedLevel] = useState<LevelType>(level);
  const { mutate: selectLevel } = usePatchLevel();
  const { openModal, closeModal } = useModal();

  const handleSelect = (level: LevelType) => {
    setSelectedLevel(level);
  };

  const handleSubmit = async () => {
    if (!selectedLevel) return;
    const levelLabel = LevelTypeToKorean[selectedLevel];
    selectLevel(selectedLevel, {
      onSuccess: () => {
        openModal("check", {
          title: "문해력 레벨 변경 완료",
          message: (
            <>
              문해력 레벨을{" "}
              <span
                style={{
                  color:
                    theme.colors.text[
                      LevelTypeToMainColorKey[
                        selectedLevel
                      ] as keyof typeof theme.colors.text
                    ],
                  fontWeight: 600,
                }}
              >
                [{levelLabel}급]
              </span>{" "}
              으로 변경하였습니다! <br />
              모든 뉴스에 대해{" "}
              <span
                style={{
                  color:
                    theme.colors.text[
                      LevelTypeToMainColorKey[
                        selectedLevel
                      ] as keyof typeof theme.colors.text
                    ],
                  fontWeight: 600,
                }}
              >
                [{levelLabel}급]
              </span>{" "}
              수준으로 제공됩니다.
            </>
          ),
          onClose: closeModal,
        });
      },
      onError: (error) => {
        console.error("레벨 저장 실패", error);
      },
    });
  };
  return (
    <>
      <TopBar title="문해력 레벨 설정" />
      <S.Container>
        <S.SettingContainer>
          <S.Title>
            내 수준에 맞는 뉴스 난이도를 선택해주세요 <br />
            선택 후 저장하기 버튼을 누르지 않으면 반영되지 않습니다!
          </S.Title>
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
          <S.ButtonContainer>
            <CommonButton
              variant="blue"
              title="저장하기"
              onClick={handleSubmit}
            />
          </S.ButtonContainer>
        </S.SettingContainer>
      </S.Container>
    </>
  );
};
