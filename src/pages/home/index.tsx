import { Banner, InputUrlContainer } from "./components";
import LinkIcon from "@assets/icons/home/link.svg?react";
import * as S from "./index.styles";
import { useTheme } from "styled-components";
import CommonButton from "@/components/common/CommonButton";
import useInput from "@/hooks/common/useInput";
import { useNewsUrl } from "@/api/news/hooks/useNewsUrl";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/common/useModal";

export const Home = () => {
  const theme = useTheme();
  const urlInput = useInput();
  const { mutate } = useNewsUrl();
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const handleSubmit = () => {
    if (!urlInput.value) {
      alert("URL을 입력해주세요.");
      return;
    }
    mutate(urlInput.value, {
      onSuccess: (id) => {
        navigate(`/news/${id}`);
      },
      onError: () => {
        openModal("check", {
          title: "서버 오류입니다",
          message: "다시 요청하거나 개발자에게 문의하세요!",
          onClose: closeModal,
        });
      },
    });
  };

  return (
    <>
      <Banner />
      <S.ContentContainer>
        <S.DescriptionContainer>
          <S.TitleContainer>
            <LinkIcon fill={theme.colors.bg.blue} width={20} height={20} />
            <S.Title>뉴스 URL 입력</S.Title>
          </S.TitleContainer>
          <S.Description>
            뉴스 기사 링크를 붙여넣으면,
            <br />
            AI가 문해력에 맞게 쉽게 바꿔드려요!
          </S.Description>
        </S.DescriptionContainer>
        <InputUrlContainer
          value={urlInput.value}
          onChange={urlInput.onChange}
        />
        <CommonButton
          title="뉴스 바로가기"
          onClick={handleSubmit}
          variant="blue"
        />
      </S.ContentContainer>
    </>
  );
};
