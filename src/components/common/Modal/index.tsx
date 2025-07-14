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
        return typeof props.children === "function"
          ? props.children({ closeModal })
          : props.children;
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
