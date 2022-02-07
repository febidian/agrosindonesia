import axios from "axios";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const getAuth = atom({
  key: "getAuth",
  default: {
    check: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const getUserAuth = selector({
  key: "getUserAuth",
  get: async ({ get }) => {
    get(getAuth);
    try {
      const response = await axios.get("auth/me");
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
  effects_UNSTABLE: [persistAtom],
});

export const DataUser = atom({
  key: "DataUser",
  default: {
    user: [],
  },
  effects_UNSTABLE: [persistAtom],
});
