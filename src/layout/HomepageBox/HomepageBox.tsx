import Box from "@mui/material/Box";
import MapIndex from "../../components/Map";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import "./HomepageBox.scss";
import { styled } from "@mui/material";
import ContentBox from "../ContentBox/ContentBox";
import SettingScene from "../../components/SettingScene/SettingScene";
import DoubleGraphBox from "../DoubleGraphBox/DoubleGraphBox";
import MapChart from "../../components/Map/MapChart/MapChart";
import ComparisonSection from "../../components/ComparisonSection/ComparisonSection";

const MainBox = styled(Box)(() => ({
  margin: "3rem auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "3rem",
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
      <ContentBox>
        <SettingScene />
      </ContentBox>
      <ContentBox>
        <ComparisonSection />
      </ContentBox>
    </MainBox>
  );
}
