import { useModal } from "@/hooks/common/useModal";
import ConfirmModal from "./ConfirmModal";
import CheckModal from "./CheckModal";
import LoadingModal from "./LoadingModal";
import * as S from "./index.styles";

const ModalRoot = () => {
  const { isOpen, type, props, closeModal } = useModal();

  if (!isOpen || !type) return null;

  const renderModalContent = () => {
    switch (type) {
      case "confirm":
        return (
          <ConfirmModal
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}
            onClose={props.onClose}
            confirmText={props.confirmText}
            cancelText={props.cancelText}
          />
        );
      case "check":
        return (
          <CheckModal
            title={props.title}
            message={props.message}
            onClose={props.onClose}
          />
        );
      case "loading":
        return <LoadingModal message={props.message} />;
      case "custom":
        if (typeof props.children === "function") {
          try {
            return props.children({ closeModal });
          } catch (e) {
            console.error("Custom modal children 함수 실행 중 오류:", e);
            return null;
          }
        } else if (props.children && typeof props.children === "object") {
          return props.children;
        } else {
          console.warn(
            "custom 모달에서 children이 정의되지 않았거나 잘못된 타입입니다."
          );
          return null;
        }
      default:
        return null;
    }
  };

  return (
    <S.Backdrop>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        {renderModalContent()}
      </S.ModalContainer>
    </S.Backdrop>
  );
};

export default ModalRoot;
