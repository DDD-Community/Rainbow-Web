import { atom } from "recoil";
import { FooterNavBarActiveTypes } from "@/types";

export const isOpenState = atom<boolean>({
  key: "expensePrice",
  default: false
});

export const activeTypeState = atom<FooterNavBarActiveTypes>({
  key: "expenseCategory",
  default: "main"
});
