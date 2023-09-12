import { atom } from "recoil";
import { CategoriesTypes } from "../app/plus/category/getCategories";

export const expenseDetailState = atom<string>({
  key: "expenseDetail",
  default: ""
});

export const expensePriceState = atom<string>({
  key: "expensePrice",
  default: ""
});

export const expenseCategoryState = atom<CategoriesTypes>({
  key: "expenseCategory",
  default: {
    categoryId: 0,
    name: "",
    status: false,
    customCategoryImage: "food"
  }
});

export const expenseDateState = atom({
  key: "expenseDate",
  default: {
    date: "2023-09-11",
    dailyExpenseId: 1
  }
});
