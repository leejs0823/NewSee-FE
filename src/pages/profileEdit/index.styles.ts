import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.white};
  padding: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Label = styled.label`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  align-items: flex-end;
`;

export const Input = styled.input`
  padding: 10px 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.divider};
  color: ${({ theme }) => theme.colors.text.secondary};
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }
`;

export const CountLabel = styled.label`
  color: ${({ theme }) => theme.colors.text.disabled};
  ${({ theme }) => theme.fonts.Caption};
`;
