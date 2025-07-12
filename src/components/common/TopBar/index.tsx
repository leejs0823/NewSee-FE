import * as S from "./index.styles";
import ArrowIcon from "@assets/icons/common/arrow.svg?react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  title?: string;
}

const TopBar = ({ title }: TopBarProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleBack = () => {
    if (location.pathname === "/login") {
      navigate("/", { replace: true });
    } else {
      navigate(-1);
    }
  };

  return (
    <S.Container>
      <S.ArrowContainer onClick={handleBack}>
        <ArrowIcon fill={theme.colors.text.primary} width={24} height={24} />
      </S.ArrowContainer>
      <S.TopBarTitle>{title}</S.TopBarTitle>
    </S.Container>
  );
};

export default TopBar;
