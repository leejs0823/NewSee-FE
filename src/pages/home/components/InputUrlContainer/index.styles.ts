import styled from "styled-components";

export const Container = styled.div`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.bg.elevated};
  padding: 12px 16px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

export const Input = styled.input`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.bg.elevated};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }
`;
