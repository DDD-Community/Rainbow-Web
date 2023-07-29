import { atom, selector } from "recoil";

interface Props {
  email: string;
  nickname: string;
  birthDate: string;
  salaryStart: number;
  salaryEnd: number;
  gender: string;
}

export const propsStateAtom = atom<Props>({
  key: "propsStateAtom",
  default: { email: "", nickname: "", birthDate: "", salaryStart: 0, salaryEnd: 0, gender: "" }
});

export const propsState = selector<Props>({
  key: "propsState",
  get: ({ get }) => get(propsStateAtom),
  set: ({ set }, newValue) => {
    set(propsStateAtom, newValue);
  }
});
