import { Card, Title, LineChart, Tab, TabGroup, TabList } from "@tremor/react";
import { useMemo, useState } from "react";

// Sample raw dataset with ISO dates
const rawData = [
  { date: "2025-08-18", Sales: 200 },
  { date: "2025-08-19", Sales: 350 },
  { date: "2025-08-20", Sales: 280 },
  { date: "2025-08-21", Sales: 500 },
  { date: "2025-08-22", Sales: 300 },
  { date: "2025-08-23", Sales: 400 },
];

// --- helpers for filtering ---
function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
function startOfWeek() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun
  const diff = (day + 6) % 7; // Monday start
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - diff);
}
function startOfMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

// --- main component ---
export default function StatsCalendar() {
  const [range, setRange] = useState("week");

  // Filter the data based on range
  const chartData = useMemo(() => {
    const from =
      range === "today"
        ? startOfToday()
        : range === "week"
        ? startOfWeek()
        : range === "month"
        ? startOfMonth()
        : new Date(0); // all time

    return rawData.filter((d) => new Date(d.date) >= from);
  }, [range]);

  return (
    <Card>
      <Title>Sales Over Time</Title>

      {/* Range buttons */}
      <TabGroup index={["today", "week", "month", "all"].indexOf(range)}>
        <TabList variant="solid">
          <Tab onClick={() => setRange("today")}>Today</Tab>
          <Tab onClick={() => setRange("week")}>This Week</Tab>
          <Tab onClick={() => setRange("month")}>This Month</Tab>
          <Tab onClick={() => setRange("all")}>All Time</Tab>
        </TabList>
      </TabGroup>

      <LineChart
        data={chartData}
        index="date" // Tremor reads this key as the X-axis
        categories={["Sales"]} // y-axis values
        colors={["blue"]}
        valueFormatter={(n) => `$${n}`}
        yAxisWidth={40}
        className="mt-6"
      />
    </Card>
  );
}
