import { useEffect } from "react";
import { useGlobalLoading } from "@/hooks/common/useGlobalLoading";
import { useModal } from "@/hooks/common/useModal";

const GlobalLoading = () => {
  const { isGlobalLoading } = useGlobalLoading();
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    if (isGlobalLoading) {
      openModal("loading", {
        message: "잠시만 기다려주세요...",
      });
    } else {
      closeModal();
    }
  }, [isGlobalLoading]);

  return null;
};

export default GlobalLoading;
