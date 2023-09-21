import { atom } from "recoil";

export const contractAgreedState = atom<boolean>({
  key: "contractAgreedState",
  default: false
});

export const memberIdState = atom<number>({
  key: "memberIdState",
  default: 0
});

export const kaKaoIdState = atom<number>({
  key: "kakaoIdState",
  default: 0
});

export const emailState = atom<string>({
  key: "emailState",
  default: ""
});

export const nickNameState = atom<string>({
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

export const checkingState = atom<boolean>({
  key: "checkingState",
  default: false
});

interface FormData {
  birthDate: string;
  email: string;
  gender: string;
  kaKaoId: number;
  nickName: string;
  salary: string;
}

export const userFormState = atom<FormData>({
  key: "userFormState",
  default: {
    birthDate: "",
    email: "",
    gender: "",
    kaKaoId: 0,
    nickName: "",
    salary: ""
  }
});
