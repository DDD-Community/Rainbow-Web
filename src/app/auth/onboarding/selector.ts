import { atom, selector } from "recoil";

interface Props {
  email: string;
  nickname: string;
  birth: string;
  salary: number;
  gender: string;
}

export const propsStateAtom = atom<Props>({
  key: "propsStateAtom",
  default: { email: "", nickname: "", birth: "", salary: 0, gender: "" }
});

export const propsState = selector<Props>({
  key: "propsState",
  get: ({ get }) => get(propsStateAtom),
  set: ({ set }, newValue) => {
    set(propsStateAtom, newValue);
  }
});
