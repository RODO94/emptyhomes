import { Box, styled } from "@mui/material";

const layoutSpacing = {
  desktop: {
    maxWidth: "800px",
  },
};

export const ContentBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "0.625rem",
}));

export const CentralMainBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: layoutSpacing.desktop.maxWidth,
}));

// display: flex;
// max-width: 50rem;
// flex-direction: column;
// align-items: center;
// gap: 2.5rem;
