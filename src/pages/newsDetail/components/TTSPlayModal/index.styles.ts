import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.bg.white};
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: 30px auto;
  border-radius: 12px;
  padding: 20px 32px;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  margin-left: auto;
  font-size: 12px;
  padding: 10px;
  background: transparent;
  border: none;
  position: absolute;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  right: 0;
  top: 0;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 6px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ theme }) => theme.colors.text.primary};
`;

interface PlayButtonProps {
  $isPlaying: boolean;
}

export const PlayButton = styled.button<PlayButtonProps>`
  border-radius: 8px;
  padding: 6px 10px;
  border: 2px solid ${({ theme }) => theme.colors.border.blue};
  ${({ theme }) => theme.fonts.Button2};
  background-color: ${({ theme }) => theme.colors.bg.blue};
  color: ${({ $isPlaying, theme }) =>
    $isPlaying ? theme.colors.text.blue : theme.colors.text.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.blueBg};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-top: 12px;
`;

export const Slider = styled.input`
  width: 100%;
  margin-top: 4px;
`;
