import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  min-height: 0;
  background-color: ${({ theme }) => theme.colors.bg.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  gap: 20px;
`;

export const HeadContentContainer = styled.div`
  gap: 4px;
`;

export const NewsInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NewsInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    ${({ theme }) => theme.fonts.Body3}
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.Head2};
  text-align: left;
  margin-bottom: 10px;
  word-break: keep-all;
`;

export const ShareButton = styled.button`
  background-color: ${({ theme }) => theme.colors.bg.elevated};
  border-radius: 50px;
  padding: 4px 12px;
  ${({ theme }) => theme.fonts.Button2}
`;

export const LevelNShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
`;

export const Line = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.colors.border.divider};
  width: 100%;
`;
