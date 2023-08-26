import { atom } from "recoil";

export const contractAgreedState = atom<boolean>({
  key: "contractAgreedState",
  default: false
});

export const emailState = atom<string>({
  key: "emailState",
  default: ""
});

export const nicknameState = atom<string>({
  key: "nicknameState",
  default: ""
});

export const genderState = atom<string>({
  key: "genderState",
  default: ""
});

export const birthDateState = atom<string>({
  key: "birthDateState",
  default: ""
});

export const salaryState = atom<string>({
  key: "salaryState",
  default: ""
});
