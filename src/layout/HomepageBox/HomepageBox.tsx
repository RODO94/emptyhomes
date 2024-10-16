import Box from "@mui/material/Box";
import MapIndex from "../../components/Map";
import MultiText from "../../components/shared/MultiText/MultiText";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import "./HomepageBox.scss";
import { styled } from "@mui/material";
import ContentBox from "../ContentBox/ContentBox";
import SettingScene from "../../components/SettingScene/SettingScene";
import DoubleGraphBox from "../DoubleGraphBox/DoubleGraphBox";
import LondonGraph from "../../components/LondonGraph/LondonGraph";
import MapChart from "../../components/Map/MapChart/MapChart";

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
        <DoubleGraphBox
          graphOne={<MapChart fillColour="Greens" />}
          captionOne="First graph of the observable HQ style"
          graphTwo={<MapChart fillColour="Purples" />}
          captionTwo="Second graph of the observable HQ style"
        />
      </ContentBox>
    </MainBox>
  );
}
