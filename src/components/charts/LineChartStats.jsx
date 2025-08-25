// LineChartStats.jsx
import React, { useEffect, useState } from "react";
import Spacer from "../Spacer";
import Title from "../font/Title";
import SubText from "../font/SubText";
import SubTitle from "../font/SubTitle";
import Icon from "../font/Icon";
import LineChart from "./LineChart";
import { FaEllipsisH } from "react-icons/fa";

export default function LineChartStats({
  title,
  label,
  jsonPath,  // path to JSON file for this chart
  height = "16px",
  dateRange
}) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(jsonPath);
        const data = await response.json();
        setChartData(data || []);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    }
    fetchData();
  }, [jsonPath, dateRange]);

  return (
    <div className="card box-shadow">
      <SubTitle className="flex justify-between">
        {title}
        <span>
          <Icon className="text-[var(--text-muted)]" name={<FaEllipsisH />} />
        </span>
      </SubTitle>

      <Spacer height="1rem" />

      <SubText className="uppercase">{label}</SubText>
      <Spacer height="0.2rem" />

      <Title className="borde">
        {chartData?.[0]?.uv ?? "0"}
      </Title>

      <Spacer height={height} />

      {chartData.length > 0 && (
        <LineChart
          data={chartData}
          dateRange={dateRange}
          height={140}
        />
      )}
    </div>
  );
}
