import * as S from "../index.styles";
import CommonButton from "@components/common/CommonButton";
import { useModal } from "@/hooks/common/useModal";

interface CheckModalProps {
  title?: string;
  message?: React.ReactNode;
  onClose: () => void;
}

const CheckModal = ({ title, message, onClose }: CheckModalProps) => {
  const { closeModal } = useModal();

  const handleClose = () => {
    closeModal();
    onClose?.();
  };

  return (
    <>
      <S.ModalTitle>{title}</S.ModalTitle>
      <S.ModalText>{message}</S.ModalText>
      <CommonButton title="확인" variant="blue" onClick={handleClose} />
    </>
  );
};

export default CheckModal;
