import Typography from "@mui/material/Typography";
import { findSceneSettinData } from "../../data/scenes";
import { useBoroughStore } from "../../store";

export default function SettingScene() {
  const { borough } = useBoroughStore();
  const scene = findSceneSettinData(borough);

  if (!scene) {
    return;
  }
  return (
    <>
      <Typography variant="body1">
        The current number of empty homes in {borough} is {scene["empty"]}
      </Typography>
      <Typography variant="body1">
        The current number of second homes in {borough} is {scene["2nds"]}
      </Typography>
    </>
  );
}
