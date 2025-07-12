import { Outlet, useNavigate } from "react-router-dom";
import { useUserStore } from "@/stores/user";
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/common/useModal";

export const ProtectedRoute = () => {
  const { accessToken } = useUserStore();
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    if (!accessToken && !modalShown) {
      setModalShown(true);
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
          navigate("/", { replace: true });
        },
      });
    }
  }, [accessToken, modalShown, openModal, closeModal, navigate]);
  if (accessToken) return <Outlet />;

  return null;
};
