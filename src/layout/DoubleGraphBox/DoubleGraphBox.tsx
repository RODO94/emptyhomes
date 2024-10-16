import { styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const SectionBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "1rem",
  width: "100%",
}));

const GraphBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5rem",
  width: "50%",
}));

type Props = {
  graphOne: JSX.Element;
  graphTwo: JSX.Element;
  captionOne: string;
  captionTwo: string;
};

export default function DoubleGraphBox({
  graphOne,
  graphTwo,
  captionOne,
  captionTwo,
}: Props) {
  return (
    <SectionBox>
      <GraphBox>
        <Box>{graphOne}</Box>
        <Typography>{captionOne}</Typography>
      </GraphBox>
      <GraphBox>
        <Box>{graphTwo}</Box>
        <Typography>{captionTwo}</Typography>
      </GraphBox>
    </SectionBox>
  );
}
