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
        ],
      },
      { path: "news", element: <News /> },
      { path: "news/:newsId", element: <NewsDetail /> },
      {
        path: "bookmark",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Bookmark />,
          },
        ],
      },
      { path: "login", element: <Login /> },
      {
        path: "levelSetting",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <LevelSetting />,
          },
        ],
      },
      { path: "login/oauth2/code/kakao", element: <KakaoLogin /> },
    ],
  },
]);
