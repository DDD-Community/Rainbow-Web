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
  console.log(expenseId);
  return expenseId === 0 ? fetchFirstFeed() : fetchFeed(expenseId);
}
