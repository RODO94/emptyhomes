import MapIndex from "../../components/Map";
import MultiText from "../../components/shared/MultiText/MultiText";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import "./HomepageBox.scss";

export default function HomepageBox() {
  return (
    <div className="home-box">
      <TitleBlock />
      <MapIndex />
      <MultiText headline="This is a tester" showText="Show text if possible" />
      {/* Key Facts Section */}
    </div>
  );
}
