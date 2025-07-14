import { useState, useRef } from "react";
import * as S from "./index.styles";
import ArrowIcon from "@assets/icons/mypage/rightArrow.svg?react";
import StopIcon from "@assets/icons/news/stop.svg?react";
import InterruptIcon from "@assets/icons/news/interrupt.svg?react";

interface TTSPlayModalProps {
  content: string;
  top: number;
  right: number;
  onClose: () => void;
}

export const TTSPlayModal = ({
  content,
  top,
  right,
  onClose,
}: TTSPlayModalProps) => {
  const [text] = useState(content);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handlePlay = () => {
    // 정지 후 새로 재생
    if (!isPlaying && !isPaused) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      synthRef.current.speak(utterance);
      setIsPlaying(true);
      setIsPaused(false);
    } else if (isPaused) {
      synthRef.current.resume();
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    if (synthRef.current.speaking) {
      synthRef.current.pause();
      setIsPlaying(false);
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    synthRef.current.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  return (
    <S.Wrapper style={{ position: "absolute", top, right, zIndex: 9999 }}>
      <S.CloseButton onClick={onClose}>
        <ArrowIcon
          width={16}
          height={16}
          style={{ transform: "rotate(-90deg)" }}
        />
      </S.CloseButton>

      <S.Box>
        <S.ButtonGroup>
          <S.Button onClick={handleStop}>
            <StopIcon width={16} height={16} /> 처음부터
          </S.Button>
          <S.PlayButton onClick={handlePlay} $isPlaying={isPlaying}>
            {isPaused ? "이어 재생" : isPlaying ? "재생 중" : "재생하기"}
          </S.PlayButton>
          <S.Button onClick={handlePause} disabled={!isPlaying}>
            <InterruptIcon width={16} height={16} /> 일시정지
          </S.Button>
        </S.ButtonGroup>

        <S.Label>속도</S.Label>
        <S.Slider
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />

        <S.Label>음조</S.Label>
        <S.Slider
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(e) => setPitch(Number(e.target.value))}
        />

        <S.Label>볼륨</S.Label>
        <S.Slider
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </S.Box>
    </S.Wrapper>
  );
};
