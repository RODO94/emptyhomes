import Box from "@mui/material/Box";
import LondonGraph from "../LondonGraph/LondonGraph";
import SectionHeader from "../shared/SectionHeader/SectionHeader";

export default function MapIndex() {
  return (
    <Box sx={{ width: "100%" }}>
      <SectionHeader
        header="Vacancy Map"
        subheader="The number of empty homes in London"
      />
      <LondonGraph />
    </Box>
  );
}
