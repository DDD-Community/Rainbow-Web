import { atom } from "recoil";
import { loadRecoilStateFromSessionStorage } from "./recoilSessionstorage";

export const contractAgreedState = atom<boolean>({
  key: "contractAgreedState",
  default: loadRecoilStateFromSessionStorage<boolean>("contractAgreedState", false)
});

export const emailState = atom<string>({
  key: "emailState",
  default: loadRecoilStateFromSessionStorage<string>("emailState", "")
});

export const nicknameState = atom<string>({
  key: "nicknameState",
  default: loadRecoilStateFromSessionStorage<string>("nicknameState", "")
});

export const genderState = atom<string>({
  key: "genderState",
  default: loadRecoilStateFromSessionStorage<string>("genderState", "")
});

export const birthDateState = atom<string>({
  key: "birthDateState",
  default: loadRecoilStateFromSessionStorage<string>("birthDateState", "")
});

export const salaryState = atom<string>({
  key: "salaryState",
  default: loadRecoilStateFromSessionStorage<string>("salaryState", "")
});
