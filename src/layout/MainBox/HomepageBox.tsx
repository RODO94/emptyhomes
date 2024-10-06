import MapIndex from "../../components/Map";
import MultiText from "../../components/shared/MultiText/MultiText";
import "./HomepageBox.scss";

export default function HomepageBox() {
  return (
    <div className="home-box">
      <MapIndex />
      <MultiText headline="This is a tester" showText="Show text if possible" />
      {/* Key Facts Section */}
    </div>
  );
}
