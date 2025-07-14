import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 100%;
  min-height: 0;
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 15px;
  padding: 20px;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.bg.white};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    ${({ theme }) => theme.fonts.Head2}
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 68px;
  gap: 16px;
`;

export const InfoBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border.divider};
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
`;

export const Caption = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.text.disabled};
`;

export const ColorText = styled.p`
  ${({ theme }) => theme.fonts.Body1B}
  color: ${({ theme }) => theme.colors.text.black};
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow: scroll;
  align-items: flex-start;
  align-self: stretch;

  -ms-overflow-style: none; /* IE & Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ theme }) => theme.colors.text.disabled};
`;

export const WordCardList = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 20px;
  padding-bottom: 50px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg.based};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
