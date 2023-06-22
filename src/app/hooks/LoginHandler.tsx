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
      window.location.replace("/");
      console.log("로그인이 완료 되었습니다.");
      console.log(response);
    })
    .catch(() => {
      console.log("로그인 중 오류가 생겼습니다.");
    });
}
