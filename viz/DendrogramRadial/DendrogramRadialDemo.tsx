import { data } from "./data";
import { Dendrogram } from "./Dendrogram";

export const DendrogramRadialDemo = ({ width = 700, height = 400 }) => (
  <Dendrogram data={data} width={width} height={height} />
);
