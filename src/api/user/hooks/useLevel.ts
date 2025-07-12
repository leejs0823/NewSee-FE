import { useMutation } from "@tanstack/react-query";
import { postSelectLevel, patchSelectLevel } from "../level";
import { useUserStore } from "@/stores/user";
import { LevelType } from "@/types/level";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const usePostLevel = () => {
  const setLevel = useUserStore((state) => state.setLevel);

  return useMutation({
    mutationFn: (level: LevelType) =>
      withDelayedGlobalLoading(postSelectLevel(level)),
    onSuccess: (_, level) => {
      setLevel(level);
    },
  });
};

export const usePatchLevel = () => {
  const setLevel = useUserStore((state) => state.setLevel);

  return useMutation({
    mutationFn: (level: LevelType) =>
      withDelayedGlobalLoading(patchSelectLevel(level)),
    onSuccess: (_, level) => {
      setLevel(level);
    },
  });
};
