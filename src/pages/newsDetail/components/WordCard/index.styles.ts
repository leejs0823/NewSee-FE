import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.greenBg};
  padding: 12px;
  border-radius: 8px;
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  gap: 8px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
`;

export const Term = styled.h4`
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const WordAddButton = styled.button`
  border-radius: 50px;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.bg.green};
  padding: 4px 12px;
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.text.white};
`;
