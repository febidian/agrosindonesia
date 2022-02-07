import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const DataUser = atom({
  key: "DataUser",
  default: {
    user: [],
  },
  effects_UNSTABLE: [persistAtom],
});
