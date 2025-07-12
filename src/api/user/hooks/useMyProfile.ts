import { useQuery } from "@tanstack/react-query";
import { fetchMyProfile } from "../user";
import { useUserStore } from "@/stores/user";
import type { ProfileResult } from "../user";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

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
