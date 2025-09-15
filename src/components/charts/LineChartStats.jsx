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
  dataKey,   // "chatbot" | "leads" | "feedback"
  height = "16px",
  dateRange
}) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/stats.json");
        const data = await response.json();

        if (data[dataKey]) {
          setChartData(data[dataKey]);
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    }
    fetchData();
  }, [dataKey, dateRange]);

  const metric =
    chartData?.total ??
    chartData?.average ??
    chartData?.sum ??
    0;

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

      <Title className="borde">{metric}</Title>

      <Spacer height={height} />

      {chartData?.data && (
        <LineChart
          data={chartData.data}
          dateRange={dateRange}
          height={140}
        />
      )}
    </div>
  );
}
