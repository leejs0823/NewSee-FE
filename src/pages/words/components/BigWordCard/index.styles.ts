import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border.divider};
  background-color: ${({ theme }) => theme.colors.bg.white};
`;

export const TermContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: auto;
`;

export const Term = styled.h2`
  ${({ theme }) => theme.fonts.Head3}
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  word-break: keep-all;
`;

export const CaptionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    ${({ theme }) => theme.fonts.Body3}
    color: ${({ theme }) => theme.colors.text.disabled};
  }
`;

export const IconWrapper = styled.div`
  width: 22px;
  height: 22px;
  cursor: pointer;
  flex-shrink: 0;
  svg {
    width: 100%;
    height: 100%;
  }
`;
