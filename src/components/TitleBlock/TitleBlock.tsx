import Typography from "@mui/material/Typography";
import "./TitleBlock.scss";
import { Box } from "@mui/material";

export default function TitleBlock() {
  // title text
  // title subtext
  // preamble

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1">Empty Homes</Typography>
        <Typography variant="h2">
          How do they affect us and our communities?
        </Typography>
      </Box>
      <Typography variant="body1">
        The following work has been pulled together by the Empty Homes Action
        Group to understand the affect of vacant homes on our communities and on
        the way we live our lives.{" "}
      </Typography>
      <Typography variant="body1">
        We are particularly interested in the ways different public datasets can
        give us an understanding of how long term strategic decision making can
        enable gentrification, homelessness, and inequality
      </Typography>
    </>
  );
}
