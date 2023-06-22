import { LoginDataType } from "@/src/constant/api.constant";
import { authInstance } from "@/src/api/auth/client";

interface LoginResponseType {
  data: LoginDataType;
}

export const fetchAuth = (code: string): Promise<LoginResponseType> =>
  authInstance.get(`/auth/kakao?code=${code}`);

export function LoginHandler(code: string) {
  fetchAuth(code)
    .then((response: LoginResponseType) => {
      // const cookieHeader = response.headers.cookie;
      // if (cookieHeader) {
      //   const cookies = cookieHeader.split(';');
      //   for (const cookie of cookies) {
      //     const [name, value] = cookie.trim().split(':');
      if (response.data) {
        // name==='sessionKey'
        // localStorage.setItem('EXIT_LOGIN_SESSION', value);
        console.log("로그인이 완료 되었습니다.");
        console.log(response);
      } else {
        console.log("세션key가 만료 되었습니다.");
      }
      // }}
    })
    .catch(() => {
      console.log("로그인 중 오류가 생겼습니다.");
    });
}
