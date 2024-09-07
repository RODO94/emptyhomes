import * as Plot from "@observablehq/plot";
import { useEffect, useRef, useState } from "react";
import emptyData from "../../../data/total-empty-2023.json";
import londonTopo from "../../../data/topo_lad.json";
import { feature } from "topojson-client";
import { GeoJSON } from "../../../types/geo";
import { GeoPermissibleObjects } from "d3";

export default function MapChart() {
  const plotRef = useRef();

  const [featuresArray, setFeaturesArray] = useState<
    undefined | GeoPermissibleObjects
  >(undefined);

  useEffect(() => {
    const geoJsonData: GeoJSON = feature(londonTopo, londonTopo.objects.lad);

    const generateData = () => {
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

      setFeaturesArray({
        type: "FeatureCollection",
        features: londonArray,
      });
    };

    generateData();
  }, []);

  useEffect(() => {
    if (featuresArray) {
      const plot = Plot.plot({
        projection: { type: "mercator", domain: featuresArray }, // Adjusted scale

        marks: [
          // Use Plot.geo to render the regions
          Plot.geo(featuresArray, {
            fill: (d) => d.properties.empty, // Map to the data property you're using for color
            stroke: "black", // Add black stroke to distinguish regions
            strokeWidth: 0.5, // Adjust the stroke width as needed
            tip: { strokeWidth: 1 }, // Tooltip (if supported in your setup)
            channels: {
              Name: (d) => d.properties.name,
              Empty: (d) => d.properties.empty,
            },
          }),
        ],

        // Configure color scale
        color: {
          type: "linear", // Quantize for color buckets
          domain: [0, 5000], // Adjust domain based on your data
          scheme: "Reds",
          legend: true, // Show legend
          label: "Number of empty properties",
        },

        // Optional: Adjust height/width for better fitting of the projection
        height: 600,
        width: 800,
      });

      // plot.addEventListener("input", (event) => {
      //   console.log(plot.value, event);
      // });

      // Append the plot to the div element
      plotRef.current.append(plot);

      // Clean up the plot when the component unmounts
      return () => {
        plot.remove();
      };
    }
  }, [featuresArray]);

  return <div ref={plotRef} />;
}
