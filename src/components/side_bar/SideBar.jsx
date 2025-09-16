import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { FaMessage, FaHouse, FaPeopleGroup } from 'react-icons/fa6'
import { BsChatLeft } from 'react-icons/bs';
import { PiHouse, PiHouseBold } from 'react-icons/pi';
import { HiOutlineUserPlus, HiOutlineUsers } from 'react-icons/hi2';
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
  ]

  return (
    <>
      {/* Overlay (mobile only) */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
          md:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`
          top-0 left-0 rounded-r-3xl h-screen z-50 pl-3 pr-3
          bg-[var(--bg-primary)] transition-transform duration-300
          w-[210px] max-lg:w-[90px] max-md:absolute max-md:w-[200px]
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center h-[45px] px-3">
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
