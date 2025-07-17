import * as S from "./index.styles";
import { useNavigate } from "react-router-dom";
import { MyProfile, Menu, LogoutButton } from "./components";
import LevelIcon from "@assets/icons/common/level.svg?react";
import NewsIcon from "@assets/icons/common/news.svg?react";
import HelpIcon from "@assets/icons/common/help.svg?react";

export const Mypage = () => {
  const navigate = useNavigate();
  const handleGoToLevelSetting = () => {
    navigate("/mypage/levelSetting");
  };

  const handleGoToBookmark = () => {
    navigate("/mypage/bookmark");
  };

  const handleGoToHelp = () => {
    // 도움말 페이지로 이동하는 로직
  };

  return (
    <S.Container>
      <MyProfile />
      <S.MenuContainer>
        <Menu
          title="문해력 레벨 설정"
          onClick={handleGoToLevelSetting}
          Icon={LevelIcon}
        />
        <Menu
          title="저장한 뉴스"
          onClick={handleGoToBookmark}
          Icon={NewsIcon}
        />
        <Menu title="도움말" onClick={handleGoToHelp} Icon={HelpIcon} />
        <LogoutButton />
      </S.MenuContainer>
    </S.Container>
  );
};
