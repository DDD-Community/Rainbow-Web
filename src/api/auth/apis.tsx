"use client";

/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import axios from "axios";

// const PROXY = process.env.NEXT_PUBLIC_DOMAIN === "http://localhost:3000/" ? "" : "/proxy";
const apiBaseUrl = "http://apis.buybye.kr:8080";

const getAccessTokenLocalStorage = () => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN");
    return accessToken;
  }
};

export const instance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    // Authorization: `${getAccessTokenLocalStorage()}`
  }
});

export const authInstance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${getAccessTokenLocalStorage()}`
  }
});

// Axios 인터셉터를 사용하여 토큰 갱신 처리
authInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // 토큰 만료 오류가 발생하면 refreshToken으로 accessToken을 다시 얻어옴
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await usePostTokenReIssue();
        authInstance.defaults.headers.Authorization = `${newAccessToken}`;
        originalRequest.headers.Authorization = `${newAccessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        if (typeof window !== "undefined") {
          // 토큰 갱신에 실패한 경우 로그아웃 등의 처리를 수행
          localStorage.removeItem("EXIT_LOGIN_ACCESS_TOKEN");
          localStorage.removeItem("EXIT_LOGIN_REFRESH_TOKEN");
          console.error("Token refresh failed:", refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

const getRefreshTokenLocalStorage = () => {
  if (typeof window !== "undefined") {
    const refreshToken = localStorage.getItem("EXIT_LOGIN_REFRESH_TOKEN");
    return refreshToken ? `${refreshToken}` : "";
  }
};

const postTokenReIssue = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    Authorization: `${getRefreshTokenLocalStorage()}`
  }
});

export const usePostTokenReIssue = async () => {
  try {
    const response = await postTokenReIssue.post(`/members/accessToken`);
    const newAccessToken = response.data.accessToken;
    const newRefreshToken = response.data.refreshToken;

    if (typeof window !== "undefined") {
      // 저장된 Token을 업데이트
      localStorage.setItem("EXIT_LOGIN_ACCESS_TOKEN", newAccessToken);
      localStorage.setItem("EXIT_LOGIN_REFRESH_TOKEN", newRefreshToken);

      // authInstance의 헤더를 업데이트하여 새로운 accessToken을 사용
      authInstance.defaults.headers.Authorization = `${newAccessToken}`;

      return newAccessToken;
    }
  } catch (error) {
    // 오류 처리 (예를 들어, refreshToken이 유효하지 않을 때)
    console.error("Failed to reissue token:", error);
  }
};

export const setClientHeaders = (token: string) => {
  authInstance.interceptors.request.use(config => {
    // eslint-disable-next-line
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export function get<T>(...args: Parameters<typeof authInstance.get>) {
  return authInstance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof authInstance.post>) {
  return authInstance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof authInstance.put>) {
  return authInstance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof authInstance.patch>) {
  return authInstance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof authInstance.delete>) {
  return authInstance.delete<T, T>(...args);
}
