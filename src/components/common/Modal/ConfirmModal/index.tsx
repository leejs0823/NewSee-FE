import * as S from "../index.styles";
import CommonButton from "../../CommonButton";
interface ConfirmModalProps {
  title?: string;
  message?: string;
  onConfirm: () => void;
  onClose: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal = ({
  title,
  message,
  onConfirm,
  onClose,
  confirmText = "확인",
  cancelText = "취소",
}: ConfirmModalProps) => {
  return (
    <>
      <S.ModalTitle>{title}</S.ModalTitle>
      <S.ModalText>{message}</S.ModalText>
      <S.ModalButtonGroup>
        <CommonButton title={cancelText} variant="disabled" onClick={onClose} />
        <CommonButton title={confirmText} variant="blue" onClick={onConfirm} />
      </S.ModalButtonGroup>
    </>
  );
};

export default ConfirmModal;
