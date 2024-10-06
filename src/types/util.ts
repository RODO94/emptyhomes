import { emptyData } from "../data/empties";

export type LondonBoroughs = (typeof emptyData)[number] extends infer T
  ? T extends { localAuthority: infer U; region: "L" }
    ? U
    : never
  : never;
