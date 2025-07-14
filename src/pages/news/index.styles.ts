import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 100%;
  min-height: 0;
`;

export const HeaderSection = styled.div`
  flex-shrink: 0;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bg.white};
`;

export const HeadTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BodySection = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg.based};
  padding-bottom: 50px;
`;

export const EmptyMessage = styled.div`
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ theme }) => theme.colors.text.disabled};
`;

export const HeadText = styled.h1`
  ${({ theme }) => theme.fonts.Head2}
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
