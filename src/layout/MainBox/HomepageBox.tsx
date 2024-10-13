import Box from "@mui/material/Box";
import MapIndex from "../../components/Map";
import MultiText from "../../components/shared/MultiText/MultiText";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import "./HomepageBox.scss";
import { styled } from "@mui/material";

const MainBox = styled(Box)(({ theme }) => ({
  margin: "3rem auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "3rem",
  maxWidth: "800px",
  width: "100%",
}));

export default function HomepageBox() {
  return (
    <MainBox>
      <TitleBlock />
      <MapIndex />
      <MultiText headline="This is a tester" showText="Show text if possible" />
      {/* Key Facts Section */}
    </MainBox>
  );
}
