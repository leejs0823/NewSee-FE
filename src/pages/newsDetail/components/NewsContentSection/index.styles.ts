import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TitleText = styled.h2`
  ${({ theme }) => theme.fonts.Body1B}
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ReadButton = styled.button`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.bg.blueBg};
  padding: 4px 12px;
  ${({ theme }) => theme.fonts.Body3};
`;

export const ContentContainer = styled.p`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: pre-line;
`;
