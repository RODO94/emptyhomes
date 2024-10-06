import { create } from "zustand";
import { LondonBoroughs } from "../types/util";

type Boroughs = LondonBoroughs | "all boroughs";

type BoroughStore = {
  borough: Boroughs;
  setBorough: (borough: Boroughs) => void;
};

export const useBoroughStore = create<BoroughStore>((set) => ({
  borough: "all boroughs",
  setBorough: (borough: Boroughs) => set({ borough }),
}));
