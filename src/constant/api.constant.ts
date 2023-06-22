export const CLIENT_ID = "b3ee341ecd11261443a552fa9fbe2d58";
export const REDIRECT_URI = "http://localhost:3000/auth/kakao";
export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const API = {
  AUTH: {
    LOGIN: "/auth/kakao",
    LOGOUT: "/auth/logout",
    SIGN_IN: "/auth/kakao/signin",
    GET_ID: "/auth/get"
  }
};

export interface JsonWebTokenType {
  accessToken: string;
}

export interface LoginDataType extends Response {
  data: JsonWebTokenType;
}
