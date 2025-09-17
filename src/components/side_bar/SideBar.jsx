import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { PiHouseBold } from 'react-icons/pi';
import { HiOutlineUsers } from 'react-icons/hi2';

import { RiSettings4Line } from 'react-icons/ri';
import { BiMessage } from 'react-icons/bi';
import Spacer from '../Spacer'
import SubText from '../font/SubText'
import Button from '../Button'
import NavBtnList from './NavBtnList'

function SideBar({ isOpen, onClose }) {
  const navItems = [
    { name: 'Dashboard', icon: <PiHouseBold />, href: '/' },
    { name: 'Leads', icon: <HiOutlineUsers />, href: '/leads' },
    { name: 'Messages', icon: <BiMessage />, href: '/messages' },
    { name: 'Settings', icon: <RiSettings4Line />, href: '/settings' },
  ]

  return (
    <>
      {/* Overlay (mobile only) */}
      <div
        className={`
          fixed inset-0 bg-black/30 z-40 transition-opacity duration-300
          md:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`
          top-0 left-0 rounded-r-3xl h-screen z-50 pl-3 pr-3
          bg-[var(--bg-primary)]
          w-[210px] max-lg:w-[90px] max-md:absolute max-md:w-[200px]
          md:translate-x-0 duration-300 ease-in-out max-sm:w-[160px]
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center h-[45px] ">
          <h1 className="uppercase max-lg:hidden">O m l i v i o n</h1>
          <h1 className="min-lg:hidden font-extrabold text-2xl">O</h1>
          <Button className="md:hidden icon" onClick={onClose}>
            <FaArrowLeft />
          </Button>
        </div>

        <Spacer height="3rem" />
        <SubText className="uppercase">Pages</SubText>
        <Spacer height="1rem" />

        {/* Nav Button List */}
        <NavBtnList navItems={navItems} onClick={onClose} />
      </div>
    </>
  )
}

export default SideBar
