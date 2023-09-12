import { authInstance } from "@/src/api/auth/client";

export async function postCategory({
  customCategoryImage = "food",
  name = "",
  status = true,
  date = "2023-09-01",
  dailyExpenseId = 0
}) {
  const response = await authInstance.post("/expenses/custom-category", {
    customCategoryImage,
    name,
    status,
    date,
    dailyExpenseId
  });
  return response.status;
}
