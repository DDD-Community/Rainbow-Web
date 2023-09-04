export const CLIENT_ID = "b3ee341ecd11261443a552fa9fbe2d58";
export const REDIRECT_URI = "http://localhost:3000/member/kakao";
export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const TOKEN = {
  ACCESS: "authorization",
  REFRESH: "x-refresh-token"
};

export interface JsonWebKey {
  data: string;
  email: string;
  kakaoId: number;
  message: string;
}

export interface LoginDataType extends Response {
  data: JsonWebKey;
  // jwt: JsonWebTokenType;
}
