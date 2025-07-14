import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.bg.white};
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  z-index: 100000;
`;

export const ModalTitle = styled.h2`
  ${({ theme }) => theme.fonts.Head2};
  margin-bottom: 12px;
`;

export const ModalText = styled.p`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 20px;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
