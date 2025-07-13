import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  position: relative;
  z-index: 10001;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Head2}
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.p`
  word-break: keep-all;
  ${({ theme }) => theme.fonts.Body1}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.bg.blueBg};
  color: ${({ theme }) => theme.colors.text.blue};
  padding: 8px 12px;
  border-radius: 50px;
  ${({ theme }) => theme.fonts.Button2}
`;

export const Arrows = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`;

export const RightArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  pointer-events: all;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  &:disabled {
    visibility: hidden;
  }
`;

export const LeftArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  pointer-events: all;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  &:disabled {
    visibility: hidden;
  }
`;

export const Content = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.text.secondary};
`;
