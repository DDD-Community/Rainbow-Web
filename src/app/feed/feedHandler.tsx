"use client";

import { authInstance } from "@/src/api/auth/apis";

// import { LoginDataType } from "@/src/constant/api.constant";

const KEY =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwia2FLYW9JZCI6MCwiaWF0IjoxNjk0MTgxOTk4LCJleHAiOjE2OTYzMjk0ODJ9.r4kN14fe0ChUCoSLeR6hwr2JY8YXIXIALP_c_70IJjKU_slDVmpPlh4f75Bv0siOa7StL3auZToQN58Z2cd95A";
// import { EmojiTypes } from "@/types";

// interface FeedResponseType {
//   data: LoginDataType;
// }

export const fetchFeed = (): Promise<any> =>
  authInstance.get(`/feeds/friend-feeds`, {
    headers: {
      Authorization: KEY
    }
  });

export function feedHandler() {
  return fetchFeed();
}
