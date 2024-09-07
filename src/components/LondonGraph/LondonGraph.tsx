import { ResponsiveChoropleth } from "@nivo/geo";
import londonFeatures from "../../features.json";
import "./LondonGraph.scss";
import { useEffect, useState } from "react";
import emptyData from "../../data/total-empty-2023.json";

export default function LondonGraph() {
  const [data, setData] = useState<null | any>(null);
  const [featuresArray, setFeaturesArray] = useState<undefined | any>(
    undefined
  );

  useEffect(() => {
    const generateData = () => {
      const featuresArray = londonFeatures.features.map((borough) => {
        return {
          type: borough.type,
          geometry: borough.geometry,
          id: borough.properties.name,
          properties: {
            name: borough.properties.name,
            color: borough.properties.color,
          },
        };
      });
      setFeaturesArray(featuresArray);

      const londonArray = emptyData.filter((borough) => borough.region === "L");

      const dataArray = londonArray.map((borough) => {
        return { id: borough.localAuthority, value: borough.outOfUse };
      });
      setData(dataArray);
    };

    generateData();
  }, []);

  console.log({ features: featuresArray, data: data });
  return (
    <section className="london-graph">
      <ResponsiveChoropleth
        data={data}
        features={featuresArray}
        margin={{ top: 10, right: 10, bottom: 10, left: 100 }}
        colors="nivo"
        domain={[0, 5000]}
        label="id"
        valueFormat=".2s"
        projectionType="mercator"
        projectionTranslation={[0.3, 0.5]}
        projectionRotation={[0, 0, 0]}
        projectionScale={500}
        enableGraticule={false}
        graticuleLineWidth={10}
        graticuleLineColor="#ffffff"
        borderWidth={0.5}
        borderColor="#152538"
        theme={{ background: "#CBD5DE" }}
        fillColor={"#ffffff"}
        isInteractive={true}
        onClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onMouseMove={() => {}}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </section>
  );
}
