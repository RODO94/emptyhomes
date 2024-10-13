import { Chip, styled, Typography } from "@mui/material";

const colour = {
  primary: {
    text: "#242424",
    background: "#BFE3E0",
  },
  secondary: {
    text: "#10403C",
  },
};

export const Title = styled(Typography)(() => ({
  color: colour.primary.text,
  fontSize: "6rem",
  fontWeight: 700,
}));

export const Subtitle = styled(Typography)(() => ({
  color: colour.primary.text,
  fontSize: "1.5rem",
  fontWeight: 400,
}));

export const Body = styled(Typography)(() => ({
  color: colour.primary.text,
  fontSize: "1rem",
  fontWeight: 300,
}));

export const Heading = styled(Typography)(() => ({
  color: colour.primary.text,
  fontSize: "2rem",
  fontWeight: 600,
}));

export const Subheading = styled(Typography)(() => ({
  color: colour.primary.text,
  fontSize: "1.9rem",
  fontWeight: 200,
}));

export const Caption = styled(Typography)(() => ({
  color: colour.primary.text,
  fontSize: "0.85rem",
  fontWeight: 300,
}));

export const ActionText = styled(Typography)(() => ({
  color: colour.secondary.text,
  fontSize: "0.625rem",
  fontWeight: 400,
  fontVariant: "all-small-caps",
}));

export const BoroughChip = styled(Chip)(() => ({
  fontFamily: '"Montserrat", system-ui, Avenir, Helvetica, Arial, sans-serif;',
  fontWeight: 700,
  fontSize: "0.75rem",
  fontVariant: "all-small-caps",
  background: colour.primary.background,
  color: colour.secondary.text,
}));
