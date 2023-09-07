import { atom } from "recoil";
import { ExpenseCategoryTypes } from "@/types";

export const expenseDetailState = atom<string>({
  key: "expenseDetail",
  default: ""
});

export const expensePriceState = atom<string>({
  key: "expensePrice",
  default: ""
});

export const expenseCategoryState = atom<ExpenseCategoryTypes>({
  key: "expenseCategory",
  default: {
    type: "clothes",
    name: "",
    isOpen: false
  }
});
