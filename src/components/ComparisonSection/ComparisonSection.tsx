import { Typography } from "@mui/material";
import DoubleGraphBox from "../../layout/DoubleGraphBox/DoubleGraphBox";
import MapChart from "../Map/MapChart/MapChart";
import SectionHeader from "../shared/SectionHeader/SectionHeader";

export default function ComparisonSection() {
  return (
    <>
      <SectionHeader
        header="Two graphs to compare"
        subheader="What things are linked between these?"
      />
      <Typography variant="body1">
        This is some text here that can give the user some perspective around
        how things compare with each other. The two graphs below show homes out
        of use and second homes, but you could easily do something along the
        axis of time. For example, here's how things looked 10, or 20 years ago,
        compared with now. We could even plot supermarkets or schools on top of
        these to add a bit more data.
      </Typography>
      <DoubleGraphBox
        graphOne={<MapChart fillColour="Greens" target="outOfUse" />}
        captionOne="First graph of the observable HQ style"
        graphTwo={<MapChart fillColour="Purples" target="2nds" />}
        captionTwo="Second graph of the observable HQ style"
      />
    </>
  );
}
