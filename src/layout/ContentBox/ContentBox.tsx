import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

const SectionBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
}));

export default function ContentBox({ children }: PropsWithChildren) {
  return <SectionBox>{children}</SectionBox>;
}

// box
// display: flex;
// flex-direction: column;
// align-items: center;
// gap: 0.625rem;
// align-self: stretch;
