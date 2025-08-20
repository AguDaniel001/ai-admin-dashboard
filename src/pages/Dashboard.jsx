import React from 'react'
import Title from "../components/font/Title"
import CardText from '../components/CardText'
import Spacer from '../components/Spacer'
import Icon from '../components/font/Icon'
import Text from '../components/font/Text'
import { FaCalendarAlt, FaRegCalendar } from 'react-icons/fa'
import { FaBars} from 'react-icons/fa6'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';



function Dashboard() {
  return (
    <div className=' px-10 py-6 relative'>
      <div className='h-screen' >
      <div className='flex justify-between '>
        <div>
          <Title>Dashboard</Title>
        </div>

        <div className='flex gap-2 items-center'>
         <Icon className="icon-card text-[var(--text-muted)] flex " 
            name={<FaBars />} />
         <div  className="icon-card flex gap-3 items-center ">
          <Icon className="text-[var(--text-muted)]" name={<FaRegCalendar />} />
          <Text> Jan 10, 2025 - Jan 28, 2025 </Text>
         </div> 
        
        </div>

      </div>
      
       <Spacer height="1.5rem"/>
      {/* <Button text='Add View' variant='primary' /> */}

      <div className='flex gap-4'>
        <CardText
        />
        <CardText
        />
        <CardText
        />
      </div>
       
      

      </div>
    </div>
  )
}

export default Dashboard