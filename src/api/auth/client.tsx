import axios from "axios";

const getSessionKeyLocalStorage = () => {
  const sessionKey = localStorage.getItem("EXIT_LOGIN_SESSION");
  return sessionKey ? `${sessionKey}` : "";
};

export const authInstance = axios.create({
  baseURL: "http://43.201.219.27:8080",
  withCredentials: false,
  headers: {
    Authorization: `${getSessionKeyLocalStorage()}`
  }
});
