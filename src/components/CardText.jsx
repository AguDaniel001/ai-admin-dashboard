import React from "react";
import Spacer from "./Spacer";
import Title from "./font/Title";
import SubText from "./font/SubText";
import SubTitle from "./font/SubTitle";
import Icon from "./font/Icon";
import Badge from "./Badge";
import DualLineChart from "./charts/DualLineChart";
import { FaEllipsisH } from "react-icons/fa";

export default function CardText({ 
  titleText, 
  subText, 
  titleStyle,  
  subTextStyle,
  height="16px",
  className

}) {
  return (
    <div className="card box-shadow ">
      <SubTitle className="flex justify-between" >Acme Plus <span><Icon className="text-[var(--text-muted)]" name={<FaEllipsisH />}/></span></SubTitle>
      <Spacer height="1rem"/>
      <SubText className="uppercase" >sales</SubText>
      <Spacer height="0.2rem"/>
      <Title className='borde ' >$24,780 <Badge isSuccess={true} >+49%</Badge> </Title>
      <Spacer height={height}/>
         <div className="h-30">
          {/* <TinyLineChart /> */}
          <DualLineChart />
        </div>
    </div>
  );
}
