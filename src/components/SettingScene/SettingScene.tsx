import Typography from "@mui/material/Typography";
import {
  findLondonSceneSettinData,
  findSceneSettinData,
} from "../../data/scenes";
import { useBoroughStore } from "../../store";
import { useEffect, useState } from "react";
import { emptyData } from "../../data/empties";
import SectionHeader from "../shared/SectionHeader/SectionHeader";
import { List, ListItem, ListItemIcon, styled } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

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

  const BulletPoint = styled(ListItemIcon)(() => ({
    fontSize: "12px",
    minWidth: "24px",
  }));

  return (
    <>
      <SectionHeader
        header="Setting the Scene"
        subheader="What is important to know"
      />
      <List>
        <ListItem sx={{ alignItems: "baseline" }}>
          <BulletPoint
            color="primary"
            sx={{ fontSize: "8px", minWidth: "24px" }}
          >
            <CircleIcon fontSize="inherit" />
          </BulletPoint>
          <Typography variant="body2">
            The current number of empty homes in <strong>{borough}</strong> is{" "}
            <strong>{scene.empty || 0}</strong>
          </Typography>
        </ListItem>
        <ListItem sx={{ alignItems: "baseline" }}>
          <BulletPoint
            color="primary"
            sx={{ fontSize: "8px", minWidth: "24px" }}
          >
            <CircleIcon fontSize="inherit" />
          </BulletPoint>
          <Typography variant="body2">
            The current number of second homes in <strong>{borough}</strong> is{" "}
            <strong>{scene["2nds"] || 0}</strong>
          </Typography>
        </ListItem>
        <ListItem sx={{ alignItems: "baseline" }}>
          <BulletPoint
            color="primary"
            sx={{ fontSize: "8px", minWidth: "24px" }}
          >
            <CircleIcon fontSize="inherit" />
          </BulletPoint>
          <Typography variant="body2">
            There is space here for a range of other facts we can pull together
            from other boroughs on things like homelessness, temporary
            accommodation numbers etc.
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
