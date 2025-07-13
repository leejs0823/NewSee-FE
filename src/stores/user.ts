import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LevelType } from "@/types/level";
import { useBookmarkStore } from "./bookmark";

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  level: LevelType;
  name: string | null;
  email: string | null;
  profileImage: string | null;
  joinDate: Date | null;
  savedWordCount: number | null;
  login: (data: {
    accessToken: string;
    refreshToken: string;
    name: string;
    email: string;
    profileImage: string;
    level: LevelType;
  }) => void;
  logout: () => void;
  setProfile: (data: {
    name: string;
    profileImage: string;
    level: LevelType;
    joinDate: Date;
    savedWordCount: number;
  }) => void;
  setAccessToken: (accessToken: string) => void;
  setLevel: (level: LevelType) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      level: LevelType.MEDIUM,
      name: null,
      email: null,
      profileImage: null,
      joinDate: null,
      savedWordCount: 0,
      login: ({
        accessToken,
        refreshToken,
        name,
        email,
        profileImage,
        level,
      }) =>
        set({
          accessToken,
          refreshToken,
          name,
          email,
          profileImage,
          level,
        }),
      logout: () => {
        set({
          accessToken: null,
          refreshToken: null,
          level: LevelType.MEDIUM,
          name: null,
          email: null,
          profileImage: null,
          joinDate: null,
          savedWordCount: 0,
        });
        useBookmarkStore.getState().reset();
      },
      setAccessToken: (accessToken: string) => set({ accessToken }),
      setLevel: (level: LevelType) => set({ level }),
      setProfile: ({ name, profileImage, level, joinDate, savedWordCount }) =>
        set({
          name,
          profileImage,
          level,
          joinDate: new Date(joinDate),
          savedWordCount,
        }),
    }),
    {
      name: "auth",
    }
  )
);
