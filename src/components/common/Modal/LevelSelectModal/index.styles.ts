import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 10000000;
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
`;
export const Title = styled.p`
  ${({ theme }) => theme.fonts.Head2};
  color: ${({ theme }) => theme.colors.text.primary};
`;
export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
export const Line = styled.hr`
  background-color: ${({ theme }) => theme.colors.border.divider};
  height: 1px;
  width: 100%;
  border: none;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const CloseButton = styled.button`
  ${({ theme }) => theme.fonts.Body3}
  background: none;
  color: ${({ theme }) => theme.colors.text.disabled};
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
export const SelectHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const SelectTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SelectTitle = styled.h2`
  ${({ theme }) => theme.fonts.Head3}
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SelectContent = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.text.secondary};
`;
