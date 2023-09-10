import { authInstance } from "@/src/api/auth/client";

export async function postCategory({ customCategoryImage = "food", name = "", status = true }) {
  const response = await authInstance.post("/expenses/custom-category", {
    customCategoryImage,
    name,
    status
  });
  return response.status;
}
