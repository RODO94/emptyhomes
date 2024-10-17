import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import HomepageBox from "../HomepageBox/HomepageBox";

const CentralBox = styled(Box)(() => ({
  width: "100%",
  minWidth: "800px",
  maxWidth: "800px",
  margin: "3rem auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "3rem",
}));

export default function CentralPanel() {
  return (
    <CentralBox>
      <HomepageBox />
    </CentralBox>
  );
}
