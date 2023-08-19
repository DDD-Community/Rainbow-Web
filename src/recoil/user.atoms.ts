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

export const birthdayState = atom<string>({
  key: "birthdayState",
  default: ""
});

export const salaryState = atom<number>({
  key: "salaryState",
  default: 0
});
