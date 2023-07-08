import axios from "axios";

const getSessionKeyLocalStorage = () => {
  const sessionKey = localStorage.getItem("EXIT_LOGIN_SESSION");
  return sessionKey ? `${sessionKey}` : "";
};

export const authInstance = axios.create({
  baseURL: "http://apis.buybye.kr:8080",
  withCredentials: false,
  headers: {
    Authorization: `${getSessionKeyLocalStorage()}`
  }
});
