// SimpleBarChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const rawData = [
  { date: "2025-08-19", conversations: 223 },
  { date: "2025-08-19", conversations: 276 },
  { date: "2025-08-19", conversations: 198 },
  { date: "2025-08-20", conversations: 312 },
  { date: "2025-08-20", conversations: 223 },
  { date: "2025-08-20", conversations: 276 },
  { date: "2025-08-21", conversations: 198 },
  { date: "2025-08-21", conversations: 312 },
  { date: "2025-08-22", conversations: 223 },
  { date: "2025-08-22", conversations: 276 },
  { date: "2025-08-23", conversations: 198 },
  { date: "2025-08-23", conversations: 312 },
];

// ✅ Group by date and sum conversations
function groupData(data) {
  const map = {};
  data.forEach((d) => {
    if (!map[d.date]) {
      map[d.date] = { date: d.date, conversations: 0 };
    }
    map[d.date].conversations += d.conversations;
  });
  return Object.values(map);
}

// ✅ Formatter: "Tue 19 Aug"
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    weekday: "short", // Tue
    day: "numeric",   // 19
    month: "short",   // Aug
  });
};

const SimpleBarChart = ({ dateRange }) => {
  const { startDate, endDate } = dateRange || {};

  // Filter and group
  const groupedData = groupData(rawData).filter((d) => {
    if (!startDate || !endDate) return true;
    const current = new Date(d.date);
    return current >= startDate && current <= endDate;
  });

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={groupedData}
          margin={{ top: 0, right: 20, left: 2, bottom: 20 }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="0"
            stroke="var(--border-outline)"
          />

          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ fontSize: 12, fill: "var(--text-muted)" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12, fill: "var(--text-muted)" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            labelFormatter={formatDate}
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "var(--bg-primary)",
              border: "1px solid var(--border-outline)",
              borderRadius: "0.5rem",
              fontSize: "12px",
            }}
          />

          <Bar
            dataKey="conversations"
            fill="#56adff"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
