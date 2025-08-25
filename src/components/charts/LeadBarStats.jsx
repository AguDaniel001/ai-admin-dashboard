import React from "react";
import Spacer from "../Spacer";
import Title from "../font/Title";
import SubText from "../font/SubText";
import SubTitle from "../font/SubTitle";
import Icon from "../font/Icon";
import Badge from "../Badge";
import DualLineChart from "./LineChart";
import { FaEllipsisH } from "react-icons/fa";
import SimpleBarChart from "./SimpleBarChart";

export default function LeadLineStats({ 
  titleText, 
  subText, 
  titleStyle,  
  subTextStyle,
  height="16px",
  className,
  dateRange,

}) {
  return (
    <div className="card p-0 box-shadow ">
      <SubTitle className="flex justify-between px-5 h-12 items-center " >Direct VS Indirect <span><Icon className="text-[var(--text-muted)]" name={<FaEllipsisH />}/></span></SubTitle>
      <p className=' border-b-[1px] border-[var(--border-outline)] '></p>
      <Spacer height="1rem"/>
      <div className="px-5">
        <Spacer height="0.2rem"/>
        <Title className='borde ' >$8.25K <Badge isSuccess={false} >-19%</Badge> </Title>
      </div>
      
      <Spacer height={height}/>
         <div className="h-[280px]">
          {/* <SimpleBarChart /> */}
          <SimpleBarChart dateRange={dateRange} />
        </div>
    </div>
  );
}
