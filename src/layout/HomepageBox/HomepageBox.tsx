import Box from "@mui/material/Box";
import MapIndex from "../../components/Map";
import MultiText from "../../components/shared/MultiText/MultiText";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import "./HomepageBox.scss";
import { styled } from "@mui/material";
import ContentBox from "../ContentBox/ContentBox";
import SettingScene from "../../components/SettingScene/SettingScene";

const MainBox = styled(Box)(() => ({
  margin: "3rem auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "3rem",
  maxWidth: "800px",
  width: "100%",
  marginTop: "5rem",
}));

export default function HomepageBox() {
  return (
    <MainBox>
      <ContentBox>
        <TitleBlock />
      </ContentBox>
      <ContentBox>
        <MapIndex />
      </ContentBox>
      <SettingScene />
      <MultiText headline="This is a tester" showText="Show text if possible" />
      {/* Key Facts Section */}
    </MainBox>
  );
}
