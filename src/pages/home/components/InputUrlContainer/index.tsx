import * as S from "./index.styles";
import CircleDeleteIcon from "@assets/icons/common/circleDelete.svg?react";

interface InputUrlContainerProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputUrlContainer = ({ value, onChange }: InputUrlContainerProps) => {
  const handleDelete = () => {
    const fakeEvent = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(fakeEvent);
  };

  return (
    <S.Container>
      <S.Input
        placeholder="뉴스 기사 URL을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <CircleDeleteIcon
        onClick={handleDelete}
        style={{ cursor: "pointer" }}
        width={20}
        height={20}
      />
    </S.Container>
  );
};

export default InputUrlContainer;
