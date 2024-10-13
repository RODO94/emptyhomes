import { emptyData } from "./empties";

export const hackneyScene = emptyData.find(
  (borough) => borough.localAuthority === "Hackney"
);

export const findSceneSettinData = (activeBorough: string) => {
  const sceneObj = emptyData.find(
    (borough) => borough.localAuthority === activeBorough
  );
  return sceneObj;
};

export const findLondonSceneSettinData = () => {
  let empties = 0;
  let seconds = 0;
  const emptyArray = emptyData.filter((council) => council.region === "L");
  emptyArray.forEach((council) => {
    empties = empties + council.empty;
    seconds = seconds + council["2nds"];
  });
  return { empty: empties, "2nds": seconds };
};
