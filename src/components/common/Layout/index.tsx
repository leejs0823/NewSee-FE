import { Outlet, useLocation, matchPath } from "react-router-dom";
import * as S from "./index.styles";
import Header from "../Header";
import BottomNav from "@components/common/BottomNavigationBar";

export default function Layout() {
  const location = useLocation();

  // 헤더를 숨길 경로 목록
  const noHeaderPaths = [
    "/login",
    "/news/:newsId",
    "/mypage/bookmark",
    "/mypage/levelSetting",
    "/mypage/profileEdit",
  ];

  const isHeaderVisible = !noHeaderPaths.some((path) =>
    matchPath({ path, end: true }, location.pathname)
  );
  return (
    <S.AppContainer>
      <S.AppWrapper>
        {isHeaderVisible && <Header />}
        <S.AppMain noHeader={!isHeaderVisible}>
          <Outlet />
        </S.AppMain>
        {isHeaderVisible && <BottomNav />}
      </S.AppWrapper>
    </S.AppContainer>
  );
}
