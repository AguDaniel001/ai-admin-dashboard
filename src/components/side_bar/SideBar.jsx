import React from 'react'

import NavBtnList from './NavBtnList'
import { FaHome, FaTasks } from 'react-icons/fa'
import Spacer from '../Spacer'
import { FaMessage, FaPeopleGroup, FaPeopleLine } from 'react-icons/fa6'
import { useLocation } from 'react-router';
import SubText from '../font/SubText'

function SideBar() {
  return (
    <div  className='w-[220px] bg-[var(--bg-primary)] h-screen  p-[18px] rounded-r-3xl'>


      <h1 className='uppercase '>O m l i v i o n</h1>
      <Spacer height='3rem' />
      <SubText className="uppercase" >Pages</SubText>
      <Spacer height='1rem' />
      {/* <Image className="" name="" /> */}
      <NavBtnList 
        navItems={[
          {
            name: 'Dashboard',
            icon: <FaHome />,
            // current: true,
            href: '/'
          },
          {
            name: 'Leads',
            icon: <FaPeopleGroup /> ,
            // current: false,
            href: '/leads'
          },
          {
            name: 'Messages',
            icon: <FaMessage /> ,
            // current: false,
            href: '/messages'
          },
      

        ]}
        />

    </div>
  )
}

export default SideBar