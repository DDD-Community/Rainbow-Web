import axios from "axios";

const PROXY = process.env.NEXT_PUBLIC_DOMAIN === "http://localhost:3000/" ? "" : "/proxy";

const getAccessTokenLocalStorage = () => {
  const accessToken = localStorage.getItem("EXIT_LOGIN_TOKEN");
  return accessToken ? `Bearer ${accessToken}` : "";
};

export const instance = axios.create({
  baseURL: PROXY,
  withCredentials: false,
  headers: {
    Authorization: `${getAccessTokenLocalStorage()}`
  }
});

export const authInstance = axios.create({
  baseURL: "http://apis.buybye.kr:8080",
  withCredentials: true,
  headers: {
    // Authorization: `${getAccessTokenLocalStorage()}`
  }
});

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
