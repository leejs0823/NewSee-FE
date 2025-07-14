import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 16px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  max-width: 430px;
  top: 0;
  z-index: 10000;
  background-color: ${({ theme }) => theme.colors.bg.white};
`;

export const TopBarTitle = styled.p`
  ${({ theme }) => theme.fonts.Head2};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ArrowContainer = styled.div`
  position: absolute;
  left: 16px;
`;
