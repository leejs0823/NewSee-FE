import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/common/Layout";
import {
  Home,
  Words,
  Mypage,
  News,
  Login,
  KakaoLogin,
  NewsDetail,
  Bookmark,
  LevelSetting,
  ProfileEdit,
} from "@pages/index";
import { ProtectedRoute } from "@/components/common/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "words",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Words />,
          },
        ],
      },
      {
        path: "mypage",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Mypage />,
          },
          {
            path: "bookmark",
            element: <Bookmark />,
          },
          {
            path: "levelSetting",
            element: <LevelSetting />,
          },
          {
            path: "profileEdit",
            element: <ProfileEdit />,
          },
        ],
      },
      { path: "news", element: <News /> },
      { path: "news/:newsId", element: <NewsDetail /> },
      { path: "login", element: <Login /> },
      { path: "login/oauth2/code/kakao", element: <KakaoLogin /> },
    ],
  },
]);
