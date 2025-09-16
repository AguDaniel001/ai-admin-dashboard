// LineChart.jsx
import React, { useId } from "react";
import { ResponsiveContainer, ComposedChart, Line, Area, Tooltip } from "recharts";

const LineChart = ({ data = [], dateRange, height = 150, className }) => {
  const gradId = useId();
  const { startDate, endDate } = dateRange || {};

  const filteredData = data.filter((d) => {
    if (!startDate || !endDate) return true;
    const current = new Date(d.date);
    return current >= startDate && current <= endDate;
  });

  return (
    <div className={className} style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={filteredData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={`var(--color-primary)`} stopOpacity={0.3} />
              <stop offset="40%" stopColor={`var(--color-primary)`} stopOpacity={0.2} />
              <stop offset="100%" stopColor={`var(--color-primary)`} stopOpacity={0} />
              {/* <stop offset="90%" stopColor="#8071b0" stopOpacity={0} /> */}
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill={`url(#${gradId})`}
            isAnimationActive={false}
            activeDot={false}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke={`var(--color-primary)`}
            strokeWidth={2}
            dot={false}
          />

          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: "var(--bg-primary)",
              border: "1px solid var(--border-outline)",
              borderRadius: "0.5rem",
              fontSize: "12px",
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
