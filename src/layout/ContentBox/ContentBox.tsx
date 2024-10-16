import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

const SectionBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
  width: "100%",
}));

export default function ContentBox({ children }: PropsWithChildren) {
  return <SectionBox>{children}</SectionBox>;
}
