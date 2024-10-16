import * as Plot from "@observablehq/plot";
import { useEffect, useRef, useState } from "react";
import londonFeatures from "../../../features.json";
import emptyData from "../../../data/total-empty-2023.json";
import londonTopo from "../../../data/topo_lad.json";
import { feature } from "topojson-client";
import { useBoroughStore } from "../../../store";

export default function MapChart({
  fillColour,
}: {
  fillColour: Plot.ColorScheme;
}) {
  const plotRef = useRef(null);

  const [featuresArray, setFeaturesArray] = useState<undefined | any>(
    londonFeatures
  );

  const { borough } = useBoroughStore();

  useEffect(() => {
    const geoJsonData = feature(londonTopo, londonTopo.objects.lad);
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

      if (borough !== "all boroughs") {
        const boroughArray = londonArray.filter(
          (authority) => authority.properties.name === borough
        );

        return setFeaturesArray({
          type: "FeatureCollection",
          features: boroughArray,
        });
      }

      setFeaturesArray({
        type: "FeatureCollection",
        features: londonArray,
      });
    };

    generateData();
  }, [borough]);

  useEffect(() => {
    // Create the plot
    const plot = Plot.plot({
      projection: { type: "mercator", domain: featuresArray }, // Adjusted scale

      marks: [
        // Use Plot.geo to render the regions
        Plot.geo(featuresArray, {
          fill: (d) => d.properties.empty, // Map to the data property you're using for color
          stroke: "black", // Add black stroke to distinguish regions
          strokeWidth: 0.5, // Adjust the stroke width as needed
          tip: true, // Tooltip (if supported in your setup)
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
        scheme: fillColour,
        legend: true, // Show legend
      },

      // Optional: Adjust height/width for better fitting of the projection
      height: 600,
      width: 800,
    });

    // Append the plot to the div element
    plotRef.current.appendChild(plot);

    // Clean up the plot when the component unmounts
    return () => {
      plot.remove();
    };
  }, [featuresArray]);
  return <div ref={plotRef}></div>;
}
