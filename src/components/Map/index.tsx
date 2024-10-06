import LondonGraph from "../LondonGraph/LondonGraph";
import SectionHeader from "../shared/SectionHeader/SectionHeader";

export default function MapIndex() {
  return (
    <section>
      <SectionHeader
        header="Vacancy Map"
        subheader="The number of empty homes per borough"
      />
      <LondonGraph />
      <p>clicky click click</p>
    </section>
  );
}
