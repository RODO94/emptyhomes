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
