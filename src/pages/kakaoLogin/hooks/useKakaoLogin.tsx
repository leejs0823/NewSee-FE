import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithKakaoToken, getKakaoAccessToken } from "@/api/user/user";
import { useUserStore } from "@/stores/user";
import { useModal } from "@/hooks/common/useModal";
import { LevelSelectModal } from "@/components/common/Modal/LevelSelectModal";

export const useKakaoLogin = (code: string | null) => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    if (!code) return;

    const login = async () => {
      try {
        const kakaoAccessToken = await getKakaoAccessToken(code);
        const userInfo = await loginWithKakaoToken(kakaoAccessToken);
        useUserStore.getState().login(userInfo);
        // localStorage.setItem("accessToken", userInfo.accessToken);
        navigate("/");
        if (userInfo.new) {
          openModal("custom", {
            children: () => <LevelSelectModal closeModal={closeModal} />,
          });
        }
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
      }
    };

    login();
  }, [code]);
};
