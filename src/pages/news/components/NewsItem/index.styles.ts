import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border.divider};
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.bg.white};
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 80px;
  height: 80px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const HeadDescription = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HeadDescriptionText = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  p {
    ${({ theme }) => theme.fonts.Caption};
  }
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.Head3}
  color: ${({ theme }) => theme.colors.text.primary};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.text.secondary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
