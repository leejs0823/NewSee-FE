import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMyProfile, patchMyProfile } from "../user";
import { useUserStore } from "@/stores/user";
import type { ProfileResult } from "../user";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";
import { useModal } from "@/hooks/common/useModal";
import { useNavigate } from "react-router-dom";

export const useMyProfile = () => {
  const setProfile = useUserStore((state) => state.setProfile);

  return useQuery<ProfileResult>({
    queryKey: ["myProfile"],
    queryFn: async () => {
      const data = await withDelayedGlobalLoading(fetchMyProfile());
      setProfile({
        ...data,
        joinDate:
          typeof data.joinDate === "string"
            ? new Date(data.joinDate)
            : data.joinDate,
      });
      return data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    retry: 1,
  });
};

export const usePatchProfile = () => {
  const setName = useUserStore((state) => state.setName);
  const queryClient = useQueryClient();
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  return useMutation<string, Error, string>({
    mutationFn: (name) => withDelayedGlobalLoading(patchMyProfile(name)),
    onSuccess: (_, name) => {
      setName(name);
      queryClient.setQueryData<ProfileResult>(["myProfile"], (old) =>
        old ? { ...old, name } : old
      );
      openModal("check", {
        title: "프로필 수정이 완료되었습니다!",
        message: "",
        onClose: () => {
          closeModal();
          navigate("/mypage");
        },
      });
    },
    onError: () => {
      openModal("check", {
        title: "프로필 수정에 실패했습니다.",
        message: "다시 시도해주세요!",
        onClose: () => {
          closeModal();
          navigate("/mypage");
        },
      });
    },
  });
};
