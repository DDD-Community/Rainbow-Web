import { atom } from "recoil";
import { FooterNavBarActiveTypes } from "@/types";

export const isOpenState = atom<boolean>({
  key: "footerNavBarOpen",
  default: false
});

export const activeTypeState = atom<FooterNavBarActiveTypes>({
  key: "footerNavBarActiveType",
  default: "main"
});
