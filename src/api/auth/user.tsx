import { useQuery } from "@tanstack/react-query";
import { post } from "./apis";
import { user } from "./querykeys";

const postTokenReIssue = async (refreshToken: string) =>
  post(
    "members/accessToken",
    {},
    {
      headers: {
        Refresh: refreshToken
      }
    }
  );

export const usePostTokenReIssue = (refreshToken: string) =>
  useQuery(user.tokenReIssue(refreshToken), () => postTokenReIssue(refreshToken));
