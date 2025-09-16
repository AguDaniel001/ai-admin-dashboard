import React, { useState } from 'react'
import Title from "../components/font/Title"
import LineChartStats from '../components/charts/LineChartStats'
import LeadBarStats from '../components/charts/LeadBarStats'
import Spacer from '../components/Spacer'
import Icon from '../components/font/Icon'
import Text from '../components/font/Text'
import { FaRegCalendar, FaRedoAlt } from 'react-icons/fa'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Button from '../components/Button'
import "../components/calendar/calendar.css"
import RangePicker from '../components/calendar/RangePicker'
import { format } from "date-fns"
import { useStickyState } from "../components/tables/useStickyState"
import { DefinedRange } from 'react-date-range'

function Dashboard() {
  const [showCalendar, setShowCalendar] = useState(false)


  //Defined range
  const [state, setState] = useState([ { startDate: new Date(new Date().setDate(new Date().getDate() - 7)), // default: last 7 days 
  endDate: new Date(), key: "selection", }, ]);

  // Date range state
  const [dateRange, setDateRange] = useStickyState([
    {
      startDate: new Date(new Date().setDate(new Date().getDate() - 7)), // default: last 7 days
      endDate: new Date(),
      key: "selection",
    },
  ])

  return (

      <div className='page-padding flex flex-col gap-5'>
        {/* Header */}
        <div className='flex justify-between relative'>
          <Title>Dashboard</Title>
          <div className='flex gap-2 items-center'>

            <div className="flex gap-0 relative">
              {/* Calendar Toggle */}
              <Button
                className="button-icon flex! gap-3 items-center rounded-r-none text-[var(--text-muted)]"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowCalendar((prev) => !prev)
                }}
              >
                <Icon className="text-[var(--text-muted)]"><FaRegCalendar /></Icon>
                <Text>
                  {dateRange[0].startDate && dateRange[0].endDate
                    ? `${format(dateRange[0].startDate, "dd MMM yyyy")} - ${format(
                        dateRange[0].endDate,
                        "dd MMM yyyy"
                      )}`
                    : "Select Date"}
                </Text>
              </Button>

            

              {/* Reset Button */}
              <Button
                className="button-icon text-[var(--text-muted)] rounded-l-none"
                onClick={() =>
                  setDateRange([
                    {
                      startDate: null,
                      endDate: null,
                      key: "selection",
                    },
                  ])
                }
              >
                <Icon><FaRedoAlt /></Icon>
              </Button>

              {/* Calendar Popup */}
              {showCalendar && (
                <div className=" top-12  right-0 z-20">
                  <div className='flex '>
                    <div className='absolute right-80 top-12'>
                      <DefinedRange 
                        onChange={(item) => setDateRange([item.selection])} 
                        ranges={dateRange} 
                      />  
                    </div>
                    
                
                    <RangePicker
                      dateRange={dateRange}
                      setDateRange={setDateRange}
                      setShowCalendar={setShowCalendar}
                    />
                  </div>
                 
                </div>
              )}
            </div>
          </div>
        </div>

        <Spacer height="0rem" />

        {/* Stats Row */}
        <div className='flex gap-5 max-md:flex-col'>
          <LineChartStats
            title="Total Conversations"
            label="Chatbot"
            dataKey="chatbot"
            dateRange={dateRange[0]}
          />

          <LineChartStats
            title="Lead Growth"
            label="Leads"
            dataKey="leads"
            dateRange={dateRange[0]}
          />

          <LineChartStats
            title="Customer Feedback"
            label="Feedback"
            dataKey="feedback"
            dateRange={dateRange[0]}
          />
        </div>



        {/* Charts Row */}
        <div className='flex gap-5 h-[410px] max-xl:flex-col'>
          <LeadBarStats dateRange={dateRange[0]} />
          <LineChartStats dateRange={dateRange[0]} />
        </div>
      </div>
  )
}

export default Dashboard
