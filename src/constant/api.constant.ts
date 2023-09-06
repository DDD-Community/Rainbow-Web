export const CLIENT_ID = "b3ee341ecd11261443a552fa9fbe2d58";
const isProduction = process.env.NODE_ENV === "production";
const REDIRECT_URI = isProduction
  ? "http://www.buybye.kr/member/kakao" // 배포 모드
  : "http://localhost:3000/member/kakao"; // 개발 모드
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
