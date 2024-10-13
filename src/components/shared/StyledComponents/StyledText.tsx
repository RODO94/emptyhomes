import { Chip, styled, Typography } from "@mui/material";

export const BoroughChip = styled(Chip)(() => ({
  fontFamily: '"Montserrat", system-ui, Avenir, Helvetica, Arial, sans-serif;',
  fontWeight: 700,
  fontSize: "0.75rem",
  fontVariant: "all-small-caps",
  background: colour.primary.background,
  color: colour.secondary.text,
}));
