import axios from "axios";

export const authInstance = axios.create({
  baseURL: "http://43.201.219.27:8080",
  withCredentials: false,
  headers: {
    //   Authorization: `${getAccessTokenLocalStorage()}`,
  }
});
