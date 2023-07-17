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
      console.log(response);
      if (response.data) {
        window.location.replace("/auth/onboarding/sub");
      }
      // const JWT = response.data.data.accessToken;
      // if (JWT) localStorage.setItem("EXIT_LOGIN_TOKEN", JWT);
      // console.log("로그인 성공");

      // window.location.replace("/");
    })
    .catch(() => {
      console.log("로그인에 실패하였습니다.");
      // window.location.replace("/login");
    });
}
