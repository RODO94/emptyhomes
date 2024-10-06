import { ResponsiveChoropleth } from "@nivo/geo";
import "./LondonGraph.scss";
import { useEffect, useState } from "react";
import emptyData from "../../data/total-empty-2023.json";
import { feature } from "topojson-client";
import londonTopo from "../../data/topo_lad.json";
import { useBoroughStore } from "../../store";
import { LondonBoroughs } from "../../types/util";

type EventObject = {
  color: string;
  data: { id: string; value: number };
  formattedValue: string;
  geometry: { type: string; coordinates: [] };
  id: LondonBoroughs;
  label: string;
  properties: { name: string; empty: number; region: string };
  type: string;
  value: number;
};

export default function LondonGraph() {
  const [data, setData] = useState<null | any>(null);
  const [featuresArray, setFeaturesArray] = useState<undefined | any[]>(
    undefined
  );
  const [projectionScale, setProjectionScale] = useState<number>(45000);
  const projectionY = 60.9;

  const [height, setHeight] = useState(750); // Default height

  const { setBorough, borough } = useBoroughStore();

  useEffect(() => {
    const screenHeight = screen.height;
    const newHeight = screenHeight * 0.7;
    setHeight(newHeight);
    setProjectionScale(newHeight / 0.0173753555);
  }, []);

  useEffect(() => {
    const geoJsonData = feature(londonTopo, londonTopo.objects.lad);

    const generateData = () => {
      if (!featuresArray) {
        const mapArray = geoJsonData.features.map((borough) => {
          const findObj = emptyData.find(
            (data) => data.localAuthority === borough.properties.LAD13NM
          );

          return {
            type: borough.type,
            geometry: borough.geometry,
            id: borough.properties.LAD13NM,
            properties: {
              name: borough.properties.LAD13NM,
              empty: findObj?.empty,
              region: findObj?.region,
            },
          };
        });

        const londonArray = mapArray.filter(
          (authority) => authority.properties.region === "L"
        );
        console.log(londonArray);
        setFeaturesArray(londonArray);
        const dataArray: { id: LondonBoroughs; value: number }[] =
          londonArray.map(
            (borough: {
              id: LondonBoroughs;
              properties: { empty: number };
            }) => {
              return { id: borough.id, value: borough.properties.empty };
            }
          );
        setData(dataArray);
      }
    };

    generateData();
  }, [featuresArray]);

  // const handleClickScaleUp = () => {
  //   setProjectionScale(projectionScale + 300);
  //   setProjectionY((projectionScale + 300) * 0.0014145496535);
  // };
  // const handleClickScaleDown = () => {
  //   setProjectionScale(projectionScale - 300);
  //   setProjectionY((projectionScale - 300) * 0.0014145496535);
  // };

  // const handleYAdjustmentUp = () => {
  //   setProjectionY(projectionY + 0.15);
  // };
  // const handleYAdjustmentDown = () => {
  //   setProjectionY(projectionY - 0.15);
  // };

  if (!featuresArray) {
    return;
  }

  console.log(borough);
  return (
    <section className="london-graph" style={{ height: height }}>
      <ResponsiveChoropleth
        data={data}
        features={featuresArray}
        colors="blues"
        margin={{ top: 8, bottom: 16, left: 16, right: 0 }}
        domain={[0, 3000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=",.2r"
        projectionTranslation={[0.57, projectionY]}
        projectionRotation={[0, 0, 0]}
        projectionScale={projectionScale}
        enableGraticule={false}
        graticuleLineColor="#152538"
        borderWidth={0.5}
        borderColor="#D8F7D9"
        onClick={(event) => {
          console.log(event);
          setBorough(event.data.id);
        }}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: false,
            translateX: -7,
            translateY: -200,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 16,
            onClick: (event) => {
              console.log(event);
            },
          },
        ]}
      />
      {/* <button onClick={handleClickScaleUp}>Scale Up</button>
      <button onClick={handleClickScaleDown}>Scale Down</button>
      <button onClick={handleYAdjustmentUp}>Y Up</button>
      <button onClick={handleYAdjustmentDown}>Y Down</button> */}
    </section>
  );
}
