import axios from "axios";

// const PROXY = process.env.NEXT_PUBLIC_DOMAIN === "http://localhost:3000/" ? "" : "/proxy";

const getAccessTokenLocalStorage = () => {
  const accessToken = localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN");
  return accessToken ? `Bearer ${accessToken}` : "";
};

export const instance = axios.create({
  baseURL: "http://apis.buybye.kr:8080",
  withCredentials: true,
  headers: {
    // Authorization: `${getAccessTokenLocalStorage()}`
  }
});

export const authInstance = axios.create({
  baseURL: "http://apis.buybye.kr:8080",
  withCredentials: true,
  headers: {
    Authorization: `${getAccessTokenLocalStorage()}`
  }
});

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
