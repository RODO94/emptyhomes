import Typography from "@mui/material/Typography";
import {
  findLondonSceneSettinData,
  findSceneSettinData,
} from "../../data/scenes";
import { useBoroughStore } from "../../store";
import { useEffect, useState } from "react";

export default function SettingScene() {
  const { borough } = useBoroughStore();

  const [scene, setScene] = useState<any>({ empty: 0, "2nds": 0 });

  useEffect(() => {
    if (borough !== "all boroughs") {
      setScene(findSceneSettinData(borough));
    } else {
      setScene(findLondonSceneSettinData());
    }
  }, [borough]);

  return (
    <>
      <Typography variant="body1">
        The current number of empty homes in {borough} is {scene.empty || 0}
      </Typography>
      <Typography variant="body1">
        The current number of second homes in {borough} is {scene["2nds"] || 0}
      </Typography>
    </>
  );
}
