import { authInstance } from "@/src/api/auth/client";

export async function postExpense({
  amount = 0,
  categoryId = 0,
  content = "",
  dailyExpenseId = 0,
  date = "2000-01-01",
  memo = ""
}) {
  const response = await authInstance.post("/expenses", {
    amount,
    categoryId,
    content,
    dailyExpenseId,
    date,
    memo
  });
  return response.status;
}
