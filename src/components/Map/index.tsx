import SectionHeader from "../shared/SectionHeader/SectionHeader";
import MapChart from "./MapChart/MapChart";

export default function MapIndex() {
  return (
    <section>
      <SectionHeader
        header="Vacancy Map"
        subheader="The number of empty homes per borough"
      />
      <MapChart />
      <p>clicky click click</p>
    </section>
  );
}
