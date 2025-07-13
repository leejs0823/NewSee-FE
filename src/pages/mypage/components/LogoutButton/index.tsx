import * as S from "./index.styles";
import { useModal } from "@/hooks/common/useModal";
import { useUserStore } from "@/stores/user";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = useUserStore((state) => state.logout);
  const { closeModal, openModal } = useModal();

  const handleClick = () => {
    openModal("confirm", {
      title: `로그아웃 하시겠습니까?`,
      message: `지금 로그아웃하시면 뉴스 저장과 단어장 기능이 제공되지 않습니다.`,
      onConfirm: () => {
        closeModal();
        navigate("/", { replace: true });
        setTimeout(() => logout(), 100);
      },
      onClose: () => {
        closeModal();
      },
    });
  };
  return <S.Container onClick={handleClick}>로그아웃</S.Container>;
};
