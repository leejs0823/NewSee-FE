import { useUserStore } from "@/stores/user";
import axios from "axios";

import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  Method,
  AxiosResponse,
} from "axios";

interface ApiSuccess<T> {
  code: string;
  message: string;
  result: T;
  success: true;
}

interface ApiFailure {
  code: string;
  message: string;
  success: false;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export const sendRequest = async <T = unknown, D = unknown>(
  instance: AxiosInstance,
  method: Method,
  url: string,
  data?: D,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers,
      ...(method.toUpperCase() === "GET" ? { params: data } : { data }),
    };

    const response: AxiosResponse<ApiResponse<T>> =
      await instance.request(config);

    const responseData = response.data;
    // console.log(`✅ ${url} [${method}] Success:`, responseData);

    return responseData;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        `❌ ${url} [${method}] Error:`,
        error.response?.data || error.message
      );
      throw error; // 원래 AxiosError를 그대로 던짐
    }

    console.error(`❌ ${url} [${method}] Unknown error:`, error);
    throw new Error("예상치 못한 오류가 발생했습니다.");
  }
};

// 동적 URL 생성
export const createUrl = (
  path: string,
  params: Record<string, string> = {}
): string => {
  const query = new URLSearchParams(params).toString();
  return `${path}${query ? `?${query}` : ""}`;
};

// 인터셉터 적용
export const applyInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = useUserStore.getState().accessToken;

      // 로그인 전에는 인터셉터 제외
      const excludedPaths = ["/kakao"];

      const isExcluded = excludedPaths.some((path) =>
        config.url?.includes(path)
      );

      if (isExcluded) return config;

      if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
        return config;
      }
      return config;
    },
    (error) => {
      console.error("🚨 Request Interceptor Error:", error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response?.status === 401 ||
        (error.response?.status === 403 &&
          !originalRequest._retry &&
          useUserStore.getState().refreshToken)
      ) {
        originalRequest._retry = true;

        try {
          const refreshToken = useUserStore.getState().refreshToken;

          const res = await axios.post(
            "/api/user/refresh",
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );

          const newAccessToken = res.data.result.accessToken;
          useUserStore.getState().setAccessToken(newAccessToken);

          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${newAccessToken}`,
          };

          return instance(originalRequest);
        } catch (refreshError) {
          console.error("🔁 AccessToken 갱신 실패", refreshError);

          useUserStore.getState().logout?.();
          window.location.replace("/login");
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};
