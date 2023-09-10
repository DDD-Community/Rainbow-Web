import { CategoryType } from "@/types";
import { authInstance } from "@/src/api/auth/client";

export interface CategoriesTypes {
  categoryId: number;
  name: string;
  status: boolean;
  customCategoryImage: CategoryType;
}

export async function getCategories() {
  const response = await authInstance.get("/expenses/custom-category");
  const { data } = response;
  return data.data as CategoriesTypes[];
}
