import { data } from "./data";
import { BubblePlot } from "./BubblePlot";

export const BubblePlotLegendDemo = ({ width = 700, height = 400 }) => (
  <BubblePlot data={data} width={width} height={height} />
);
