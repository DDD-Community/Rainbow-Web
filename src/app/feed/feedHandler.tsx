"use client";

import { authInstance } from "@/src/api/auth/apis";

export const fetchFirstFeed = (): Promise<any> => authInstance.get(`/feeds/friend-feeds`);

export const fetchFeed = (expenseId?: number): Promise<any> =>
  authInstance.get(`/feeds/friend-feeds`, {
    params: {
      lastId: expenseId
    }
  });

export function feedHandler(expenseId?: number) {
  return expenseId === 0 ? fetchFirstFeed() : fetchFeed(expenseId);
}

export const addMemberFollow = (memberId: number): Promise<any> =>
  authInstance.post(`/members/following`, {
    followingId: memberId
  });

export async function fetchMember(word: string) {
  if (!word) {
    return [];
  }

  const response = await authInstance.get("/members/search", {
    params: {
      nickname: word
    }
  });
  return response.data.data;
}
