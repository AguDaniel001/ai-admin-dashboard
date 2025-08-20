import React, { useId } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
} from "recharts";

const chartData = [
  { name: "Point 1", uv: 4500, pv: 3800, amt: 2100 },
  { name: "Point 2", uv: 4680, pv: 3920, amt: 2150 },
  { name: "Point 3", uv: 4820, pv: 4010, amt: 2190 },
  { name: "Point 4", uv: 5100, pv: 4180, amt: 2240 },
  { name: "Point 5", uv: 4980, pv: 4120, amt: 2220 },
  { name: "Point 6", uv: 5290, pv: 4320, amt: 2290 },
  { name: "Point 7", uv: 5480, pv: 4460, amt: 2320 },
  { name: "Point 8", uv: 5620, pv: 4530, amt: 2340 },
  { name: "Point 9", uv: 5770, pv: 4590, amt: 2390 },
  { name: "Point 10", uv: 5930, pv: 4720, amt: 2410 },
  { name: "Point 11", uv: 5850, pv: 4680, amt: 2400 },
  { name: "Point 12", uv: 6020, pv: 4770, amt: 2440 },
  { name: "Point 13", uv: 6180, pv: 4890, amt: 2480 },
  { name: "Point 14", uv: 6330, pv: 4960, amt: 2500 },
  { name: "Point 15", uv: 6490, pv: 5070, amt: 2540 },
  { name: "Point 16", uv: 6660, pv: 5130, amt: 2570 },
  { name: "Point 17", uv: 6610, pv: 5080, amt: 2560 },
  { name: "Point 18", uv: 6750, pv: 5200, amt: 2600 },
  { name: "Point 19", uv: 6940, pv: 5320, amt: 2640 },
  { name: "Point 20", uv: 7100, pv: 5380, amt: 2660 },
  { name: "Point 21", uv: 7240, pv: 5470, amt: 2700 },
  { name: "Point 22", uv: 7380, pv: 5550, amt: 2730 },
  { name: "Point 23", uv: 7520, pv: 5630, amt: 2770 },
];




const DualLineChart = ({ data = chartData, height = 150, className }) => {
  const gradId = useId(); // unique id per instance

  return (
    <div className={className} style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          {/* Gradient strictly UNDER the uv line */}
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8071b0" stopOpacity={0.32} />
              <stop offset="90%" stopColor="#8071b0" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Under-curve fade (no fill above the line) */}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="none"
            fill={`url(#${gradId})`}
            isAnimationActive={false}
            activeDot={false}
          />

          {/* Lines */}
          <Line type="monotone" dataKey="uv" stroke="#a78bfa" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="pv" stroke="rgba(255,255,255,0.2)" strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DualLineChart;
