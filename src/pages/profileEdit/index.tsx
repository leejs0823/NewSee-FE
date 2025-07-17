import * as S from "./index.styles";
import TopBar from "@/components/common/TopBar";
import { useUserStore } from "@/stores/user";
import useInput from "@/hooks/common/useInput";
import ProfileDefaultImage from "@assets/images/profileImage.png";
import CommonButton from "@/components/common/CommonButton";
import { usePatchProfile } from "@/api/user/hooks/useMyProfile";

export const ProfileEdit = () => {
  const profileImage = useUserStore((state) => state.profileImage);
  const name = useUserStore((state) => state.name);
  const { value, onChange } = useInput(name ? name : "");
  const { mutate: patchProfileMutate } = usePatchProfile();

  const handleClick = () => {
    patchProfileMutate(value);
  };

  return (
    <>
      <TopBar title="프로필 수정" />
      <S.Container>
        <S.ImageContainer>
          <S.Image src={profileImage ? profileImage : ProfileDefaultImage} />
        </S.ImageContainer>
        <S.InputBox>
          <S.Label>닉네임</S.Label>
          <S.InputContainer>
            <S.Input
              placeholder="닉네임을 입력하세요"
              value={value}
              onChange={(e) => {
                if (e.target.value.length <= 20) {
                  onChange(e);
                }
              }}
            />
            <S.CountLabel>{value.length}/20</S.CountLabel>
          </S.InputContainer>
        </S.InputBox>
        <CommonButton title="수정하기" onClick={handleClick} variant="blue" />
      </S.Container>
    </>
  );
};
