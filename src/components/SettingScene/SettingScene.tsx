import Typography from "@mui/material/Typography";
import {
  findLondonSceneSettinData,
  findSceneSettinData,
} from "../../data/scenes";
import { useBoroughStore } from "../../store";
import { useEffect, useState } from "react";
import { emptyData } from "../../data/empties";
import SectionHeader from "../shared/SectionHeader/SectionHeader";

type EmptyObj = (typeof emptyData)[number];
type EmptyKey = keyof EmptyObj;

export type SceneType = {
  [K in EmptyKey]: EmptyObj[K];
};

export default function SettingScene() {
  const { borough } = useBoroughStore();

  const [scene, setScene] = useState<any>({
    empty: emptyData[0].empty,
    "2nds": emptyData[0]["2nds"],
  });

  useEffect(() => {
    if (borough !== "all boroughs") {
      setScene(findSceneSettinData(borough));
    } else {
      setScene(findLondonSceneSettinData());
    }
  }, [borough]);

  return (
    <>
      <SectionHeader
        header="Setting the Scene"
        subheader="What is important to know"
      />
      <ul>
        <li>
          <Typography variant="body1">
            The current number of empty homes in {borough} is {scene.empty || 0}
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            The current number of second homes in {borough} is{" "}
            {scene["2nds"] || 0}
          </Typography>
        </li>
      </ul>
    </>
  );
}
