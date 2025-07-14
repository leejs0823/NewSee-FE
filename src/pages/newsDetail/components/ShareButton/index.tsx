import * as S from "./index.styles";
import { useModal } from "@/hooks/common/useModal";

export const ShareButton = () => {
  const { openModal, closeModal } = useModal();

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      openModal("check", {
        title: "링크가 클립보드에 복사되었습니다.",
        message: "링크를 통해 다른 사람에게 뉴스를 공유해보아요!",
        onClose: closeModal,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return <S.ShareButton onClick={handleCopyUrl}>공유하기</S.ShareButton>;
};
