// Type for coordinates (latitude, longitude pairs)
export type Coordinates = [number, number][];

// Geometry object (can be Polygon, MultiPolygon, etc.)
export interface Geometry {
  type: "Polygon" | "MultiPolygon";
  coordinates: Coordinates | Coordinates[][];
}

// Feature properties (you can customize this based on your actual properties)
export interface FeatureProperties {
  id: string;
  name?: string;
  empty?: number;
  LAD13CD?: string;
  LAD13CDO?: string;
  LAD13NM?: string;
  LAD13NMW?: string;
  region?: string;
  // You can add other fields here if needed
}

// A single GeoJSON feature (like a country or region)
export interface GeoJSONFeature {
  type: "Feature";
  geometry: Geometry;
  properties: FeatureProperties;
}

// The GeoJSON FeatureCollection, which is a collection of features
export interface GeoJSON {
  type: "FeatureCollection";
  features: GeoJSONFeature[];
}

// Type for arcs (integer coordinates that refer to shared arcs)
type Arc = number[][];

// A Geometry in TopoJSON (like a Polygon, MultiPolygon)
export interface TopoJSONGeometry {
  type: "Polygon" | "MultiPolygon";
  arcs: number[][] | number[][][];
  id?: string; // Optional, depending on your data
}

// Object inside the TopoJSON
export interface TopoJSONObjects {
  [key: string]: {
    crs: { properties: { name: string } };
    type: "GeometryCollection";
    geometries: TopoJSONGeometry[];
  };
}

// TopoJSON root object
export interface TopoJSON {
  type: "Topology";
  objects: TopoJSONObjects;
  arcs: Arc[];
  transform: {
    scale: [number, number];
    translate: [number, number];
  };
}
