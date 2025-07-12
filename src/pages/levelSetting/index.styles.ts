import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.elevated};
  padding: 20px;
`;

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg.white};
  border-radius: 16px;
  padding: 20px 14px;
  gap: 20px;
  align-items: center;
`;

export const Title = styled.p`
  text-align: center;
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const SubButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  ${({ theme }) => theme.fonts.Body3}
`;
