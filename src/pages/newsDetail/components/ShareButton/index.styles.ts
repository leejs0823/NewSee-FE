import styled from "styled-components";

export const ShareButton = styled.button`
  background-color: ${({ theme }) => theme.colors.bg.elevated};
  border-radius: 50px;
  padding: 4px 12px;
  ${({ theme }) => theme.fonts.Button2}
`;
