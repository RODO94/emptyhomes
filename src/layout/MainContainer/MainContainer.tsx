import { Box, styled } from "@mui/material";
import CentralPanel from "../CentralPanel/CentralPanel";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import "./MainContainer.scss";

const MainBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  padding: "3rem 0rem 1.5rem 0rem",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "0.5rem",
}));

export default function MainContainer() {
  return (
    <main>
      <MainBox>
        <LeftPanel />
        <CentralPanel />;
        <RightPanel />
      </MainBox>
    </main>
  );
}

// display: flex;
// padding: 3rem 0rem 1.5rem 0rem;
// justify-content: center;
// align-items: flex-start;
// gap: 0.5rem;
// align-self: stretch;
